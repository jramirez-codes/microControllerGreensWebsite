import React from "react"
import { Card, Row, Col, TimePicker } from "antd"

class LightSettings extends React.Component {
  state = {
    lightOn: "00:00:00",
    lightOff: "00:00:00",
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
            <TimePicker ></TimePicker>
            <br/>
            <br/>
            <h5>Configure Light Turn Off</h5>
            <p>Lights currently turn off at: {lightOff}</p>
            <TimePicker ></TimePicker>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LightSettings
