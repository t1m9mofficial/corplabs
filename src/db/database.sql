DROP DATABASE IF EXISTS corplabs;
CREATE DATABASE IF NOT EXISTS corplabs;
USE corplabs;

/* Cars Table */
DROP TABLE IF EXISTS cars; 

CREATE TABLE IF NOT EXISTS cars (
    car_id INT NOT NULL AUTO_INCREMENT,
    year VARCHAR(4),
    make VARCHAR(20),
    model VARCHAR(20),
    colour VARCHAR(10),
    created_on DATE,
    PRIMARY KEY (car_id)
) DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE UTF8MB4_bin;

/* Users Table */
DROP TABLE IF EXISTS users; 

CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    email VARCHAR(30),
    phone_number VARCHAR(20),
    created_on DATE,
    PRIMARY KEY (user_id)
) DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE UTF8MB4_bin;

/* User's cars Table */
DROP TABLE IF EXISTS user_car; 

CREATE TABLE IF NOT EXISTS user_car (
    id INT NOT NULL AUTO_INCREMENT,
    user_id int,
    car_id int,
    created_on DATE,
    PRIMARY KEY (id)
) DEFAULT CHARSET=utf8mb4 DEFAULT COLLATE UTF8MB4_bin;