import React, {useState, useEffect} from "react"
import { Card, Row, Col, Slider } from "antd"

function post(url, info) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: info})
}

function HumiditySettings () {
  const [HumidityState, setHumidityState] = useState(0);
  const [HumidityType, setHumidityType] = useState("Dry");

  const onChangeHumidity = value => {
    setHumidityState(value);

    var HumidityString = "api_key=tPmAT5Ab3j7F9&humidity="+value;
    post("https://microcontrollergreens.live/updateHumidity.php", HumidityString);
    console.log("Updated Humiditys");

    if(value === 0) {
      setHumidityType("Dry");
    }
    else if(value === 1) {
      setHumidityType("Medium Dry");
    }
    else if(value === 2) {
      setHumidityType("Medium");
    }
    else if(value === 3) {
      setHumidityType("Medium Wet");
    }
    else if(value === 4){
      setHumidityType("Wet");
    }
  };
  
  useEffect(() => {
    // Runs after the first render() lifecycle
    fetch("https://microcontrollergreens.live/getSettings.php")
      .then(respose => {
        // console.log(respose)
        return respose.json()
      })
      .then(json => {
        console.log(json);
        setHumidityState(json.humidity);
        var HumidityVal = parseInt(json.humidity, 10);
        if(HumidityVal === 0) {
          setHumidityType("Dry");
        }
        else if(HumidityVal === 1) {
          setHumidityType("Medium Dry");
        }
        else if(HumidityVal === 2) {
          setHumidityType("Medium");
        }
        else if(HumidityVal === 3) {
          setHumidityType("Medium Wet");
        }
        else if(HumidityVal === 4){
          setHumidityType("Wet");
        }
      });      
  }, []);

    return (
      <Row align="top" justify="center"s>
        <Col >
          <Card title="Humidity Sensitivity Settings">
            <Row><b>Current Humidity Settings</b><p>: {HumidityType}</p></Row>
            <Slider min={0} max={4} onChange={onChangeHumidity} value={HumidityState} step={1}/>
          </Card>
        </Col>
      </Row>
    )
}

export default HumiditySettings
