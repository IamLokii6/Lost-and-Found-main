<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Login - Lost and Found</title>
</head>
<body>
    <header>
        <img src="logo/logo.png" alt="Your Logo">
        <nav>
            <ul>
                <li><a href="home.php">Home</a></li>
                <li><a href="register.php">Register</a></li>
                <li><a href="login.php" class="active">Login</a></li>
            </ul>
        </nav>
    </header>

    <section id="loginForm">
        <h2>Login to Lost and Found</h2>
        <form action="login_process.php" method="post">
            <div class="form-group">
                <label for="username"><b>Username:</b></label>
                <input type="text" id="username" name="username" required>
            </div>

            <div class="form-group">
                <label for="password"><b>Password:</b></label>
                <input type="password" id="password" name="password" required>
            </div>

            <button type="submit">Login</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Lost and Found | Developed by Lokesh Paiginkar</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>
