import * as React from "react"
import {Tabs, Row, Col} from "antd"
import Status from "../components/status.js"
import Analytics  from "../components/analytics.js"
import Settings from "../components/settings.js"

const { TabPane } = Tabs;

class index extends React.Component {
  render() {
    return (
      <Row align="top" justify="center">
        <Col>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Statsus" key="1">
              <Status></Status>
            </TabPane>
            <TabPane tab="Analytics" key="2">
              <Analytics></Analytics>
            </TabPane>
            <TabPane tab="Configure Settings" key="3">
              <Settings></Settings> 
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    )
    
  }
}

export default index
