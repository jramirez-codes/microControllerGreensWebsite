import React, {useState, useEffect} from "react"
import { Card, Row, Col, Slider } from "antd"

function post(url, info) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: info})
}

function LightSettingsV2 () {
  const [lightState, setLightState] = useState(0);
  const [lightType, setLightType] = useState("Dark");

  const onChangeLight = value => {
    setLightState(value);

    var lightString = "api_key=tPmAT5Ab3j7F9&light="+value;
    post("https://microcontrollergreens.live/updateLight.php", lightString);
    console.log("Updated Lights");

    if(value === 0) {
      setLightType("Dark");
    }
    else if(value === 1) {
      setLightType("Medium Dark");
    }
    else if(value === 2) {
      setLightType("Midium");
    }
    else if(value === 3) {
      setLightType("Medium Light");
    }
    else if(value === 4){
      setLightType("Light");
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
        setLightState(json.light);
        var lightVal = parseInt(json.light, 10);
        if(lightVal === 0) {
          setLightType("Dark");
        }
        else if(lightVal === 1) {
          setLightType("Medium Dark");
        }
        else if(lightVal === 2) {
          setLightType("Midium");
        }
        else if(lightVal === 3) {
          setLightType("Medium Light");
        }
        else if(lightVal === 4){
          setLightType("Light");
        }
      });      
  }, []);

    return (
      <Row align="top" justify="center"s>
        <Col >
          <Card title="Light Sensitivity Settings">
            <Row><b>Current Light Settings</b><p>: {lightType}</p></Row>
            <Slider min={0} max={4} onChange={onChangeLight} value={lightState} step={1}/>
          </Card>
        </Col>
      </Row>
    )
}

export default LightSettingsV2
