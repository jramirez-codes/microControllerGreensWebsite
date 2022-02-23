import React from "react"
import { Card, Row, Col, TimePicker } from "antd"
import moment from 'moment';

// window.post = function(url, data) {
//   return fetch(url, {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(data)});
// }

// ...

// post("post/data/here", {element: "osmium"});

function onChange(time, timeString) {
  console.log(time, timeString);

}

class LightSettings extends React.Component {
  render() {
    return (
      <Row align="top" justify="center">
        <Col>
          <Card title="Light Settings">
            <p>Configure Lights Turn On</p>
            <TimePicker onChange={onChange} defaultValue={moment('12:08:23', 'HH:mm:ss')}></TimePicker>
            <br/>
            <br/>
            <p>Configure Light Turn Off</p>
            <TimePicker defaultValue={moment('12:08:23', 'HH:mm:ss')}></TimePicker>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default LightSettings
