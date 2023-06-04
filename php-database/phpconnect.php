<?php

$servername = "localhost";
$username = "id20843619_dbnewparkingclub";
$password = "Fahrelraflieilyas123_";
$database = "id20843619_db_newparkingclub";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$conn) {
    // die("Connection failed: " . $conn->connect_error);
    echo "Error occured in connection";
}
// echo "Connected successfully";
?>