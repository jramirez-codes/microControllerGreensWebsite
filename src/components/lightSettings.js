import React, {useState, useEffect} from "react"
import { Card, Row, Col, TimePicker } from "antd"

// function post(url, info) {
//   return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: info})
// }

// var switchLightOn = "";
// var switchLightOff = "";

// function onChangeON(time, timeString) {
//   console.log("Time " + Date(time))
//   console.log("Time String " + timeString)
//   var lightOn = "api_key=tPmAT5Ab3j7F9&lightOn="+timeString;
//   switchLightOn = timeString;

//   post("https://microcontrollergreens.live/updateLightON.php", lightOn);
// }

// function onChangeOFF(time, timeString) {
//   console.log("Time " + Date(time))
//   console.log("Time String " + timeString)
//   var lightOff = "api_key=tPmAT5Ab3j7F9&lightOff="+timeString;
//   switchLightOff = timeString;

//   post("https://microcontrollergreens.live/updateLightOFF.php", lightOff);
// }

// class LightSettings extends React.Component {
//   state = {
//     lightOnStatus: "00:00",
//     lightOffStatus: "00:00",
//   }
  
//   componentDidMount() {
//     fetch("https://microcontrollergreens.live/getLightSettings.php")
//       .then(respose => {
//         console.log(respose)
//         return respose.json()
//       })
//       .then(json => {
//         console.log(json);
//         this.setState({
//           lightOnStatus: json.lightOn,
//           lightOffStatus: json.lightOff
//         })
//       })
//   }

  
//   render() {
//     const {lightOnStatus, lightOffStatus} = this.state;
//     return (
//       <Row align="top" justify="center">
//         <Col>
//           <Card title="Light Settings">
//             <h5>Configure Lights Turn On</h5>
//             <p>Lights currently turn on at: {switchLightOn === "" ? lightOnStatus: switchLightOn}</p>
//             <Row gutter={[16,16]}>
//               <Col>
//                 <p>Update light turn on: </p>
//               </Col>
//               <Col>
//                 <TimePicker format="HH:mm" onChange={onChangeON}></TimePicker>
//               </Col>
//             </Row>
//             <br/>
//             <br/>
//             <h5>Configure Light Turn Off</h5>
//             <p>Lights currently turn off at: {switchLightOff === "" ? lightOffStatus: switchLightOff}</p>
//             <Row gutter={[16,16]}>
//               <Col>
//                 <p>Update light turn on: </p>
//               </Col>
//               <Col>
//                 <TimePicker format="HH:mm" onChange={onChangeOFF}></TimePicker>
//               </Col>
//             </Row>
//           </Card>
//         </Col>
//       </Row>
//     )
//   }
// }

function post(url, info) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: info})
}

function LightSettings () {
  const [currLight, setCurrLight] = useState({lightOnStatus: "00:00", lightOffStatus: "00:00"});

  const onChangeON = (time, timeString) => {
    console.log("Time " + Date(time))
    console.log("Time String " + timeString)
    var lightOn = "api_key=tPmAT5Ab3j7F9&lightOn="+timeString;
    setCurrLight({lightOffStatus: currLight.lightOffStatus,lightOnStatus: timeString});
    post("https://microcontrollergreens.live/updateLightON.php", lightOn);
  }

  const onChangeOFF = (time, timeString) => {
    console.log("Time " + Date(time))
    console.log("Time String " + timeString)
    var lightOff = "api_key=tPmAT5Ab3j7F9&lightOff="+timeString;
    setCurrLight({lightOffStatus: timeString,lightOnStatus: currLight.lightOnStatus});
    post("https://microcontrollergreens.live/updateLightOFF.php", lightOff);
  }
  
  useEffect(() => {
    // Runs after the first render() lifecycle
    fetch("https://microcontrollergreens.live/getLightSettings.php")
      .then(respose => {
        // console.log(respose)
        return respose.json()
      })
      .then(json => {
        // console.log(json);
        // console.log(currLight);
        setCurrLight({lightOnStatus: json.lightOn, lightOffStatus: json.lightOff});
      })
  }, []);

    return (
      <Row align="top" justify="center">
        <Col>
          <Card title="Light Settings">
            <h5>Configure Lights Turn On</h5>
            <p>Lights currently turn on at: {currLight.lightOnStatus}</p>
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
            <p>Lights currently turn off at: {currLight.lightOffStatus}</p>
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

export default LightSettings
