-- Database creation
CREATE DATABASE IF NOT EXISTS lost_and_found;

-- Use the database
USE lost_and_found;

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Items table
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    itemType ENUM('lost', 'found') NOT NULL,
    itemName VARCHAR(100) NOT NULL,
    contact VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL
);

