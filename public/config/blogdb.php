<?php
$servername = "localhost";
$username = "blogai";
$password = "Blogaitime1!";
$dbname = "bartonblog";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM blogposts";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>ID</th><th>Title</th><th>Author</th><th>Content</th><th>Date</th></tr>";
    // output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"] . "</td><td>" . $row["title"] . "</td><td>" . $row["author"] . "</td><td>" . $row["content"] . "</td><td>" . $row["date"] . "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}
$conn->close();
?>