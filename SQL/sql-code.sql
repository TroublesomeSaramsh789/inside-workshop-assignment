-- CREATE DATABASE assignment;

-- USE DATABASE assignment;

CREATE TABLE users (
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(500) NOT NULL,
    user_phone VARCHAR(20) NOT NULL,
    user_type VARCHAR(10) NOT NULL,
    user_id VARCHAR(255) NOT NULL PRIMARY KEY,
    user_created_at DATE NOT NULL DEFAULT CURRENT_DATE,
);

INSERT INTO 
users (user_name,user_email, user_password,
user_phone, user_type, user_id) 
VALUES ("someone stha", "som@mail.com", "something", "898956565",
"Admin","dsfgsdgfsd");

SELECT * FROM users;

DELETE FROM users WHERE user_id = '3074d93b-fa05-4d50-aae8-1f2405e04722' RETURNING *;

UPDATE users SET user_email = 'akg@Mail.com', user_phone = '566565' WHERE user_id = '0a99e10e-a090-438e-ab22-ca3dfa2365c8' RETURNING *;


CREATE TABLE auth (
	lastLogIn DATE NOT NULL DEFAULT CURRENT_DATE,
	auth_Id VARCHAR(255) NOT NULL PRIMARY KEY,
	user_email VARCHAR(255) NOT NULL	
);
SELECT * FROM auth;