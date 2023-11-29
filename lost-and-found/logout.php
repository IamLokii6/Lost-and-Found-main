<!-- logout.php -->
<?php
// Start the session
session_start();

// Destroy all session data
session_destroy();

// Redirect to the login page (adjust the URL as needed)
header("Location: login.php");
exit();
?>

