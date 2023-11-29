<!-- post_item.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/styles.css">
    <title>Post Lost/Found Item - Lost and Found</title>
</head>
<body>
    <header>
        <img src="logo/logo.png" alt="Your Logo">
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="view_items.php">View Items</a></li>
            </ul>
        </nav>
    </header>

    <section id="postItemForm">
        <h2>Post Lost/Found Item</h2>
        <form action="post_item_process.php" method="post" enctype="multipart/form-data">
            <label for="itemType">Item Type:</label>
            <select id="itemType" name="itemType" required>
                <option value="lost">Lost</option>
                <option value="found">Found</option>
            </select>

            <label for="itemName">Name:</label>
            <input type="text" id="itemName" name="itemName" required>

            <label for="contact">Contact Information:</label>
            <input type="text" id="contact" name="contact" required>

            <label for="description">Product Description:</label>
            <textarea id="description" name="description" rows="4" required></textarea>

            <label for="image">Upload Image:</label>
            <input type="file" id="image" name="image" accept="image/*" required>

            <button type="submit">Post Item</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2023 Lost and Found | Developed by Lokesh Paiginkar</p>
    </footer>

    <script src="js/scripts.js"></script>
</body>
</html>

