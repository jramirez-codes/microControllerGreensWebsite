import React from "react"
import { Card, Row, Col, TimePicker } from "antd"

// post = function(url, data) {
//   return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: data});
// }

function post(url, data, length) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length' : length}, data});
}

function onChangeON(time, timeString) {
  console.log("Time " + Date(time))
  console.log("Time String " + timeString)
  var lightOn = "key=123&lightOn="+timeString;
  post("https://microcontrollergreens.live/updateLightON.php", lightOn, lightOn.length);
}

class LightSettings extends React.Component {
  state = {
    lightOn: "00:00",
    lightOff: "00:00",
  }
  
  componentDidMount() {
    fetch("https://microcontrollergreens.live/getLightSettings.php")
      .then(respose => {
        console.log(respose)
        return respose.json()
        // return JSON.parse(respose);
      })
      .then(json => {
        // console.log(date)
        console.log(json);
        this.setState({
          lightOn: json.lightOn,
          lightOff: json.lightOff
        })
      })
  }
  
  render() {
    const {lightOn, lightOff} = this.state
    return (
      <Row align="top" justify="center">
        <Col>
          <Card title="Light Settings">
            <h5>Configure Lights Turn On</h5>
            <p>Lights currently turn on at: {lightOn}</p>
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
            <p>Lights currently turn off at: {lightOff}</p>
            <Row gutter={[16,16]}>
              <Col>
                <p>Update light turn on: </p>
              </Col>
              <Col>
                <TimePicker ></TimePicker>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LightSettings
