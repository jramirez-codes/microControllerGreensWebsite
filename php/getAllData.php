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

    // Printing Data
    $query = "SELECT * FROM ESPdata ORDER BY readingTime DESC LIMIT 200";
    // echo json_encode($field);
    $field->breakBeam = array();
    $field->moisture = array();
    $field->light = array();
    $field->readingTime = array();

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            // $output = array($row["breakBeam"],$row["moisture"],$row["light"],$row["readingTime"]);
            array_push($field->breakBeam, $row["breakBeam"]);
            array_push($field->moisture, $row["moisture"]);
            array_push($field->light, $row["light"]);
            array_push($field->readingTime, $row["readingTime"]);

            //echo '<b>'.$field1name.$field2name.$field3name.$field4name.'</b><br />';
        }
        $output = json_encode($field);
        echo $output;

        /*freeresultset*/
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
