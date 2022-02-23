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
    $lightOn = "";
    $lightOff = "";
    // Get Data
    // if ($_POST["api_key"] == "tPmAT5Ab3j7F9") {
    //     $light = test_input($_POST["light"]);
    //     $moisture = test_input($_POST["moisture"]);
    //     $breakBeam = test_input($_POST["breakBeam"]);
    //     $date = date('Y-m-d H:i:s');
    // }

    // Insert Data
    if($moisture != 0) {
        $sql = "INSERT INTO ESPcommand (lightOn, lightOff)
        VALUES ('$breakBeam', '$moisture', '$light')";
    }
    // Test If data was saved
    if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
    } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Printing Data
    $query = "SELECT * FROM ESPdata";
    echo "<b> <center>Database Output</center> </b> <br> <br>";

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $field1name = $row["breakBeam"];
            $field2name = $row["moisture"];
            $field3name = $row["light"];
            $field4name = $row["readingTime"];
            echo '<b>'.$field1name.$field2name.$field3name.$field4name.'</b><br />';
        }

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
    </table>
    </body>
    </html>
