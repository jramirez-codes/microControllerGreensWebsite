import React from "react"
import { Card, Row, Col, TimePicker } from "antd"

function post(url, info) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: info})
}

function onChangeON(time, timeString) {
  console.log("Time " + Date(time))
  console.log("Time String " + timeString)
  var lightOn = "api_key=tPmAT5Ab3j7F9&lightOn="+timeString;
  // switchLightsOn = timeString;

  post("https://microcontrollergreens.live/updateLightON.php", lightOn);
}

function onChangeOFF(time, timeString) {
  console.log("Time " + Date(time))
  console.log("Time String " + timeString)
  var lightOff = "api_key=tPmAT5Ab3j7F9&lightOff="+timeString;
  // switchLightsOn = timeString;

  post("https://microcontrollergreens.live/updateLightOFF.php", lightOff);
}

class LightSettings extends React.Component {
  state = {
    lightOnStatus: "00:00",
    lightOffStatus: "00:00",
  }
  
  componentDidMount() {
    fetch("https://microcontrollergreens.live/getLightSettings.php")
      .then(respose => {
        console.log(respose)
        return respose.json()
      })
      .then(json => {
        console.log(json);
        this.setState({
          lightOnStatus: json.lightOn,
          lightOffStatus: json.lightOff
        })
      })
  }

  
  render() {
    const {lightOnStatus, lightOffStatus} = this.state;
    return (
      <Row align="top" justify="center">
        <Col>
          <Card title="Light Settings">
            <h5>Configure Lights Turn On</h5>
            <p>Lights currently turn on at: {lightOnStatus}</p>
            <Row gutter={[16,16]}>
              <Col>
                <p>Update light turn on: </p>
              </Col>
              <Col>
                <TimePicker format="HH:mm" onChange={onChangeON}></TimePicker>
              </Col>
            </Row>
            <br/>
            <br/>
            <h5>Configure Light Turn Off</h5>
            <p>Lights currently turn off at: {lightOffStatus}</p>
            <Row gutter={[16,16]}>
              <Col>
                <p>Update light turn on: </p>
              </Col>
              <Col>
                <TimePicker format="HH:mm" onChange={onChangeOFF}></TimePicker>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LightSettings
