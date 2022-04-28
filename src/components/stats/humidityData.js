import * as React from "react"
import {Chart, registerables} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables);

class HumidityData extends React.Component {
  state = {
    readingTime: 0,
    moisture: 0,
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
          moisture: json.moisture,
        })
      })
  }

  render() {
    const {moisture, readingTime} = this.state
    var moistureFixed = []
    var date = []
    for(var i = readingTime.length - 1; i >= 0; i--) {
      moistureFixed.push(100-((parseInt(moisture[i], 10) - 1200)/16))
      date.push(readingTime[i])
    }
    console.log(moistureFixed)
    console.log(date)

    const data = {
        labels: date,
        datasets: [{
          label: 'Moisture Percent',
          data: moistureFixed,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
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

export default HumidityData
