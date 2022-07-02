-- CREATE DATABASE assignment;

-- USE DATABASE assignment;

CREATE TABLE users (
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password text NOT NULL,
    user_phone VARCHAR(20) NOT NULL,
    user_type VARCHAR(10) NOT NULL,
    user_id VARCHAR(255) NOT NULL PRIMARY KEY
);

INSERT INTO 
users (user_name,user_email, user_password,
user_phone, user_type, user_id) 
VALUES ("someone stha", "som@mail.com", "something", "898956565",
"Admin","dsfgsdgfsd");
