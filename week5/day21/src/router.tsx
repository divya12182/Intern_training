import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";

import Home from "./pages/Home";
import PlaceDetails from "./pages/PlaceDetails";

// Root Route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

// Home Route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

// Place Detail Route
const placeDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/place/$id",
  component: PlaceDetails,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  placeDetailRoute,
]);

// Router
export const router = createRouter({
  routeTree,
});

// Register Router Types
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
