
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="css/styles.css">
    <title>Lost and Found</title>
</head>
<body>
    <header>
        <h1>GOA UNIVERSITY </h1>
        <img src="logo/logo.png" alt="Your Logo">
        <nav>
            <ul>
                <li><a href="index.php" class="active">Home</a></li>
                <?php
                // Check if the user is logged in
                session_start();
                if (isset($_SESSION["username"])) {
                    // Display "Logout" link if logged in
                    echo '<li><a href="logout.php">Logout</a></li>';
                    echo '<li><a href="post_item.php">Post item</a><li>';
                    
                } else {
                    // Display "Register" and "Login" links if not logged in
                    echo '<li><a href="register.php">Register</a></li>';
                    echo '<li><a href="login.php">Login</a></li>';
                }
                ?>
            </ul>
        </nav>
    </header>

    <section id="mainContent">
    <img src="background/background-image.jpg" alt="backgorund" style="width: 800px;height: 400px;">
    </section>

    <footer>
        <p>&copy; 2023 Lost and Found | Developed by Lokesh Painginkar</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>

