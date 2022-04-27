<?php
    header('Access-Control-Allow-Origin: *');

    // Data Base Vars
    $servername = "localhost";
    $dbname = "jordanra_microControllerGreens";
    $username = "jordanra_admin";
    $password = "microGreens123";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Data Vars
    $user = $pass = "";
    // Get / Insert Data
    if ($_POST["api_key"] == "tPmAT5Ab3j7F9") {
        $user = test_input($_POST["username"]);
        $pass = test_input($_POST["password"]);

        // Testing Login
        $query = "SELECT * FROM users";
        $field->test = FALSE;

        // Search results
        if ($result = $conn->query($query)) {
            while ($row = $result->fetch_assoc()) {
                if($row["username"] === $user) {
                    if($row["password"] === $pass) {
                        $field->test = TRUE;
                    }
                }
            }
            $result->free();
        }

        echo json_encode($field);
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $conn->close();
    ?>
