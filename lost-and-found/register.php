<!-- register.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Register - Lost and Found</title>
</head>
<body>
    <header>
        <img src="logo/logo.png" alt="Your Logo">
        <nav>
            <ul>
                <li><a href="home.php">Home</a></li>
                <li><a href="register.php" class="active">Register</a></li>
                <li><a href="login.php">Login</a></li>
            </ul>
        </nav>
    </header>

    <section id="registrationForm">
        <h2>Register for Lost and Found</h2>
        <form action="register_process.php" method="post">
            <div class="form-group">
                <label for="username"><b>Username:</b></label>
                <input type="text" id="username" name="username" required>
            </div>

            <div class="form-group">
                <label for="email"><b>Email:</b></label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="password"><b>Password:</b></label>
                <input type="password" id="password" name="password" required>
            </div>

            <button type="submit">Register</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Lost and Found | Developed by Lokesh Paiginkar</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>
