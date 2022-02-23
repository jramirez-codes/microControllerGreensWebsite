import React from "react"
import { Card, Row, Col } from "antd"
import DataGraph from "../components/stats/lineGraph.js"

class Analytics extends React.Component {
  render() {
    return (
      <Row align="top" justify="center">
        <Col>
          <Card title="Microcontroller Greens Current Analytics">
            <DataGraph></DataGraph>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Analytics
