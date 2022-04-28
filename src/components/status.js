import * as React from "react"
import {Card, Row, Col} from "antd"

class Status extends React.Component {
  state = {
    breakBeam: "",
    readingTime: "",
    light: "",
    moisture: "",
    PWM: ""
  }

  componentDidMount() {
    fetch("https://microcontrollergreens.live/getCurrData.php")
      .then(respose => {
        console.log(respose);
        return respose.json();
        // return JSON.parse(respose);
      })
      .then(json => {
        // console.log(json.readingTime)
        var string = ""
        if(json.breakBeam.localeCompare("0")) {
          string = "Yes"
        }
        else {
          string = "No"
        }
        // Date
        this.setState({
          breakBeam: string,
          readingTime: json.readingTime,
          light: json.light,
          moisture: (100-((parseInt(json.moisture, 10) - 1200)/16)).toFixed(2),
          PWM: json.PWM,
        })
      })
  } 

  render () {
    const {breakBeam, light, moisture, readingTime, PWM} = this.state

    return (
      <Row align="middle" justify="center">
        <Col>
          <Card title="Microcontroller Greens Current Status">
            <p>Data last received: {readingTime}</p>
            <p>LED Intensity: {PWM}%</p>
            <p>Light Sensor: {light} Lux</p>
            <p>Moisture Sensor: {moisture}%</p>
            <p>Ready to harvest: {breakBeam}</p>
          </Card>
        </Col>
      </Row>
    )
  }
} 

export default Status
