import * as React from "react"
import {Chart, registerables} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables);

class BreakBeamData extends React.Component {
  state = {
    breakBeam: 0,
    readingTime: 0,
  }

  componentDidMount() {
    fetch("https://microcontrollergreens.live/getAllData.php")
      .then(respose => {
        console.log(respose)
        return respose.json()
        // return JSON.parse(respose);
      })
      .then(json => {
        // console.log(date)
        // console.log(json.readingTime[0]);
        this.setState({
          readingTime: json.readingTime,
          breakBeam: json.breakBeam,
        })
      })
  }

  render() {
    const {readingTime, breakBeam} = this.state
    var breakBeamFixed = []
    for(var i = 0; i < readingTime.length; i++) {
        if(parseInt(breakBeam[i]) === 1) {
          breakBeamFixed.push(100)
        }
        else {
          breakBeamFixed.push(0)
        }
    }
    const data = {
        labels: readingTime,
        datasets: [
        {
          label: 'Break Beam Percent',
          data: breakBeamFixed,
          fill: false,
          borderColor: 'rgb(53,255,51)',
          tension: 0.1
        }
        ]
        
      };
    return (
        // <p>Test This</p>
        <Line data = {data}></Line>
    )
  }
}

export default BreakBeamData
