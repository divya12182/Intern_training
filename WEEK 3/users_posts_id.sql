CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

INSERT INTO users(name,email)
VALUES
('Divya','divya@gmail.com'),
('Ravi','ravi@gmail.com'),
('Priya','priya@gmail.com');

SELECT * FROM users;

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    user_id INT,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
);

INSERT INTO posts(title,user_id)
VALUES
('SQL Basics',1),
('Python Basics',1),
('FastAPI Guide',2);

SELECT * FROM posts;

UPDATE posts
SET title='Advanced SQL'
WHERE post_id=1;

SELECT * FROM posts;

DELETE FROM posts
WHERE post_id=3;

SELECT * FROM posts;

SELECT
u.name,
p.title
FROM users u
INNER JOIN posts p
ON u.id = p.user_id;

SELECT
u.name,
p.title
FROM users u
LEFT JOIN posts p
ON u.id = p.user_id;

SELECT
u.name,
COUNT(p.post_id) AS total_posts
FROM users u
LEFT JOIN posts p
ON u.id = p.user_id
GROUP BY u.name;


DROP TABLE users CASCADE;
