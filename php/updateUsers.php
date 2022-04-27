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
    $username = $password = "";
    // Get / Insert Data
    if ($_POST["api_key"] == "tPmAT5Ab3j7F9") {
        $username = test_input($_POST["username"]);
        $password = test_input($_POST["password"]);
    }


    // Printing Data
    // $query = "SELECT * FROM users";
    // $testUser = $testPass = "";
    // $test = FALSE;
    // if ($result = $conn->query($query)) {
    //     while ($row = $result->fetch_assoc()) {
    //         $testUser = $row["username"];
    //         if($testUser == $username) {
    //             $testPass = $row["password"];
    //             if($testPass == $password) {
    //                 $test = TRUE;
    //             }
    //         }
    //     }

    //     /*freeresultset*/
    //     $result->free();
    // }

    // Insert Data
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    // Test If data was saved
    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $conn->close();
    ?>
