<!-- home.php -->
<?php
// Start the session
session_start();

// Check if the user is logged in
if (isset($_SESSION["username"])) {
    $username = $_SESSION["username"];
    $loggedIn = true;
} else {
    $username = null;
    $loggedIn = false;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Your Lost and Found</title>
</head>
<body>

    <header>
        <h1>Your Lost and Found</h1>
        <nav>
            <ul>
                <li><a href="home.php" class="active">Home</a></li>
                <?php
                if ($loggedIn) {
                    echo '<li><a href="logout.php">Logout</a></li>';
                    echo '<li><a href="view_items.php">View Items</a></li>';
                } else {
                    echo '<li><a href="login.php">Login</a></li>';
                    echo '<li><a href="register.php">Register</a></li>';
                }
                ?>
            </ul>
        </nav>
    </header>

    <section id="mainContent1">
        <?php
        if ($loggedIn) {
            echo '<p>Welcome, ' . $username . '!</p>';
        } else {
            echo '<h2>Welcome to Your Lost and Found</h2>';
            echo '<p>Helping you find what\'s lost and reunite with it.</p>';
        }
        ?>
    </section>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Your Lost and Found | Developed by Lokesh Painginkar</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>

