<?php
// Database configuration
$servername = "localhost"; // Change this if your MySQL server is on a different machine
$username = "root"; // Change this to your MySQL username
$password = ""; // If you have a password, put it here
$dbname = "lost_and_found"; // Change this to your database name


// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set the character set to UTF-8
$conn->set_charset("utf8");
?>

