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
    $lightOn = $lightOff = "";
    // Get / Insert Data
    if ($_POST["lightOn"] != NULL) {
        $lightOn = test_input($_POST["lightOn"]);
    }


    // Printing Data
    $query = "SELECT * FROM lightSettings ORDER BY lightOn DESC LIMIT 1";
    echo "<b> <center>Database Output</center> </b> <br> <br>";

    if ($result = $conn->query($query)) {
        while ($row = $result->fetch_assoc()) {
            $lightOff = $row["lightOff"];
        }

        /*freeresultset*/
        $result->free();
    }

    // Insert Data
    if($lightOn != "") {
        $sql = "INSERT INTO lightSettings (lightOn, lightOff)
        VALUES ('$lightOn', '$lightOff')";
    }
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
    </table>
    </body>
    </html>
