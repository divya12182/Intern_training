import asyncio
from datetime import datetime
from sse_starlette.sse import EventSourceResponse
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List

app = FastAPI()

clients: List[WebSocket] = []

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):

    await websocket.accept()
    clients.append(websocket)

    print("Client Connected")

    try:
        while True:

            message = await websocket.receive_text()

            print("Received:", message)

            for client in clients:
                await client.send_text(message)

    except WebSocketDisconnect:

        clients.remove(websocket)
        print("Client Disconnected")

async def event_generator():

    count = 1

    while True:

        yield {
            "event": "message",
            "data": f"Counter : {count} | Time : {datetime.now().strftime('%H:%M:%S')}"
        }

        count += 1

        await asyncio.sleep(1)

@app.get("/events")
async def events():
    return EventSourceResponse(event_generator())