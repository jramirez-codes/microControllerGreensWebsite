import React, { useState } from "react"
import LoginForm from "../components/LoginForm.js"
import { Card, Row, Col, Tabs } from "antd"
import Status from "../components/status.js"
import Analytics from "../components/analytics.js"
import LightSettingsV2 from "../components/lightSettingsV2.js"
import HumiditySettings from "../components/humiditySettings.js"

function Index () {
  // This is used for Tabs
  const { TabPane } = Tabs;

  // Admin login Info
  // Note: Upgrade security later
  const adminUser = {
    username: "admin",
    password: "microgreens123"
  }

  // Checking for first attempt
  // State For Passwords
  const [user, setUser] = useState({username: "", password:""});
  const [attempted, setAttempted] = useState(0);

  // Checking Login
  const Login = loginInfo => {
    if(loginInfo.username === adminUser.username && adminUser.password === loginInfo.password) {
      console.log("Logged In");    

      // Set user
      setUser({
        username: loginInfo.username,
        password: loginInfo.password
      })
    }
    else {
      console.log("Didnt mathch");
      // Set Attempted
      setAttempted(1)
    }
  }
    return (
      user.username === "" ? 
      (
        <Row align="middle" justify="center">
          <Col>
            <Card title="Login MicroController Greens">
              <LoginForm Login={Login}></LoginForm>
              {attempted === 1 ? (<p>Incorrect login information, please try again</p>):(<p></p>)}
            </Card>
          </Col>
        </Row>
      ) 
      : 
      (
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
                <Row gutter={[20,20]}> 
                  <Col span={100}><HumiditySettings></HumiditySettings></Col>
                  <Col span={100}><LightSettingsV2></LightSettingsV2> </Col>
                </Row>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      )
    );
}

export default Index;