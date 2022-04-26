import * as React from "react"
import {Chart, registerables} from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(...registerables);

class AllData extends React.Component {
  state = {
    readingTime: 0,
    light: 0,
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
          light: json.light,
          moisture: json.moisture,
        })
      })
  }

  render() {
    const {light, moisture, readingTime} = this.state
    var lightFixed = []
    var moistureFixed = []
    var date = []
    for(var i = 0; i < light.length; i++) {
        lightFixed.push(parseInt(light[i]))
        moistureFixed.push(parseInt(moisture[i]))
        date.push(Date(readingTime[i]))
    }
    console.log(lightFixed)
    console.log(moistureFixed)
    console.log(date)

    const data = {
        labels: readingTime,
        datasets: [{
          label: 'Moisture',
          data: moistureFixed,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        },
        {
          label: 'Light',
          data: lightFixed,
          fill: false,
          borderColor: 'rgb(226,135,67)',
          tension: 0.1
        },
        ]
        
      };
    return (
        // <p>Test This</p>
        <Line data = {data}></Line>
    )
  }
}

export default AllData
