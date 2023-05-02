<?php

$servername = "localhost";
$username = "id20579225_1clubparking";
$password = "Fahrelraflieilyas123_";
$database = "id20579225_1parkingclub";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    // die("Connection failed: " . $conn->connect_error);
    echo "Error occured in connection"
}
// echo "Connected successfully";
?>