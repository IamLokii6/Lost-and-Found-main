<!-- view_items.php -->
<?php
// Include the database connection
include("config.php");

// Fetch all items from the database or filter based on search
if (isset($_GET['search'])) {
    $search = $_GET['search'];
    $sql = "SELECT * FROM items WHERE itemName LIKE '%$search%' OR itemType LIKE '%$search%' OR contact LIKE '%$search%' OR description LIKE '%$search%' ORDER BY created_at DESC";
} else {
    $sql = "SELECT * FROM items ORDER BY created_at DESC";
}

$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>View Items - Your Lost and Found</title>
</head>
<body>

    <header>
        <h1>Your Lost and Found</h1>
        <nav>
            <ul>
                <li><a href="home.php">Home</a></li>
                <?php
                // Adjust the navigation menu based on the login status
                if ($username) {
                    echo '<li><a href="logout.php">Logout</a></li>';
                } else {
                    echo '<li><a href="login.php">Login</a></li>';
                    echo '<li><a href="register.php">Register</a></li>';
                }
                ?>
                <li><a href="post_item.php">Post Item</a></li>
                <li><a href="view_items.php" class="active">View Items</a></li>
            </ul>
        </nav>
    </header>

    <section id="mainContent">
        <h2>View Lost and Found Items</h2>

        <!-- Search Form -->
        <form action="" method="get">
            <label for="search">Search items:</label>
            <input type="text" id="search" name="search" placeholder="Enter keywords">
            <button type="submit">Search</button>
        </form>

        <?php
        // Display items
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '<div class="item">';
                echo '<h3>' . $row["itemName"] . '</h3>';
                echo '<p>Type: ' . ucfirst($row["itemType"]) . '</p>';
                echo '<p>Contact: ' . $row["contact"] . '</p>';
                echo '<p>Description: ' . $row["description"] . '</p>';
                echo '<img src="' . $row["image"] . '" alt="' . $row["itemName"] . '">';
                echo '</div>';
            }
        } else {
            echo '<p>No items found.</p>';
        }
        ?>
    </section>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Your Lost and Found | Developed by Lokesh Paiginkar</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
