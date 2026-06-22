CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

INSERT INTO users (name, email)
VALUES
('Divya', 'divya@gmail.com'),
('Srimathi', 'srimathi12@gmail.com'),
('Priya', 'priya@gmail.com'),
('Kumaravel', 'kumaravel2004@gmail.com'),
('Aanandha', 'aanandha08@gmail.com');

SELECT * FROM users;
SELECT * FROM users WHERE id = 1;
SELECT * FROM users WHERE name = 'Priya';
SELECT * FROM users WHERE name LIKE 'K%';
SELECT * FROM users ORDER BY name ASC;
SELECT * FROM users ORDER BY name DESC;






