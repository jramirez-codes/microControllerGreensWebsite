import React from "react"
import { Card, Row, Col, Tabs } from "antd"
import AllData from "../components/stats/allData.js"
import HumidityData from "./stats/humidityData.js"
import LightData from "./stats/lightData.js"
import BreakBeamData from "./stats/breakBeamData.js"
import LightLuxData from "./stats/lightLuxData.js"

const { TabPane } = Tabs;

class Analytics extends React.Component {
  render() {
    return (
      <Row align="middle" justify="center">
        <Col>
          <Card title="Microcontroller Greens Current Analytics">
            <Tabs type="card">
              <TabPane tab="All Data" key="1">
                <div className="chart-container">
                  <AllData></AllData>
                </div>
              </TabPane>
              <TabPane tab="Humidity Percent Data " key="2">
                <div className="chart-container">
                  <HumidityData></HumidityData>
                </div>
              </TabPane>
              <TabPane tab="LED Intensity Percent Data" key="3">
                <div className="chart-container">
                  <LightData></LightData>
                </div>
              </TabPane>
              <TabPane tab="Light Sensor Data" key="4">
                <div className="chart-container">
                  <LightLuxData></LightLuxData>
                </div>
              </TabPane>
              <TabPane tab="Break Beam Data" key="5">
                <div className="chart-container">
                  <BreakBeamData></BreakBeamData>
                </div>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Analytics
