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
    $light = $humidity = "";
    // Get / Insert Data
    if ($_POST["api_key"] == "tPmAT5Ab3j7F9") {
        $humidity = test_input($_POST["humidity"]);
    }


    // Printing Data
    $query = "SELECT * FROM ESPsettings ORDER BY light DESC LIMIT 1";

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $light = $row["light"];
            // $humidity = $row["humidity"];
        }

        /*freeresultset*/
        $result->free();
    }

    // Clear Data
    $deleteRow = "DELETE FROM ESPsettings";
    $conn->query($deleteRow);

    // Insert Data
    $sql = "INSERT INTO ESPsettings (light, humidity)
    VALUES ('$light', '$humidity')";
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
