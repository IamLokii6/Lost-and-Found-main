<!-- login_process.php -->
<?php
// Include the database connection
include("config.php");

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Basic validation
    if (empty($username) || empty($password)) {
        echo "Username and password are required.";
    } else {
        // Retrieve hashed password from the database
        $sql = "SELECT id, password FROM users WHERE username = '$username'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $hashed_password = $row["password"];

            // Verify the password
            if (password_verify($password, $hashed_password)) {
                // Start a session
                session_start();

                // Store user information in the session
                $_SESSION["username"] = $username;

                // Redirect to the post item page
                header("Location: post_item.php");
                exit();
            } else {
                echo "Invalid username or password.";
            }
        } else {
            echo "Invalid username or password.";
        }
    }
}

// Close the database connection
$conn->close();
?>

