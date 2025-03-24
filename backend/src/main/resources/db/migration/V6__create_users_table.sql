CREATE TABLE IF NOT EXISTS tUsers (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(200),
    password VARCHAR(75),
    email VARCHAR(75)
    );
