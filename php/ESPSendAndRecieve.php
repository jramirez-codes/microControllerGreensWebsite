<?php
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
    $date = "";
    $light = $moisture = $breakBeam = 0;
    // Get Data
    if ($_POST["api_key"] == "tPmAT5Ab3j7F9") {
        $light = test_input($_POST["light"]);
        $moisture = test_input($_POST["moisture"]);
        $breakBeam = test_input($_POST["breakBeam"]);
        $date = date('Y-m-d H:i:s');
    }

    // Insert Data
    if($moisture != 0) {
        $sql = "INSERT INTO ESPdata (breakBeam, moisture, light)
        VALUES ('$breakBeam', '$moisture', '$light')";
    } 

    // Printing Data
    $query = "SELECT * FROM ESPsettings ORDER BY lightOn LIMIT 1";

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $field->lightOn = $row["lightOn"];
            $field->lightOff = $row["lightOff"];
            $field->humidity = $row["humidity"];
            
            $output = json_encode($field);
            echo $output;
        }
        $result->free();
    }

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $conn->close();
    ?>
