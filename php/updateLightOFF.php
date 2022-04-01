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
    $lightOn = $lightOff = $humidity = "";
    // Get / Insert Data
    if ($_POST["api_key"] == "tPmAT5Ab3j7F9") {
        $lightOff = test_input($_POST["lightOff"]);
    }


    // Printing Data
    $query = "SELECT * FROM ESPsettings ORDER BY lightOn DESC LIMIT 1";

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $lightOn = $row["lightOn"];
            $humidity = $row["humidity"];
        }

        /*freeresultset*/
        $result->free();
    }

    // Clear Last Input and Insert Data
    if($lightOff != "") {
        // Clear Data
        $deleteRow = "DELETE FROM ESPsettings";
        $conn->query($deleteRow);

        // Insert Data
        $sql = "INSERT INTO ESPsettings (lightOn, lightOff, humidity)
        VALUES ('$lightOn', '$lightOff', '$humidity')";
        // Test If data was saved
        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $conn->close();
    ?>
