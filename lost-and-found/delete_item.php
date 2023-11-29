<?php
// Include the database connection
include("config.php");

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the item ID to be deleted
    $itemID = $_POST["item_id"];

    // Check if the item exists and belongs to the logged-in user
    $checkItemSQL = "SELECT * FROM items WHERE id = $itemID AND username = '$username'";
    $checkItemResult = $conn->query($checkItemSQL);

    if ($checkItemResult->num_rows > 0) {
        // Item belongs to the logged-in user, proceed with deletion
        $deleteItemSQL = "DELETE FROM items WHERE id = $itemID";
        if ($conn->query($deleteItemSQL) === TRUE) {
            echo "Item deleted successfully!";
        } else {
            echo "Error deleting item: " . $conn->error;
        }
    } else {
        // Item doesn't exist or doesn't belong to the logged-in user
        echo "Invalid item ID or you don't have permission to delete this item.";
    }
}

// Close the database connection
$conn->close();
?>
