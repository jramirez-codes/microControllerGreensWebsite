import React, { useState } from "react"
import { Card, Row, Col, Space, Layout} from "antd"
import "../style/styles.less"
import LoginForm from "../components/LoginForm.js"
import Status from "../components/status.js"
import Analytics from "../components/analytics.js"
import LightSettingsV2 from "../components/lightSettingsV2.js"
import HumiditySettings from "../components/humiditySettings.js"

function Index () {
  // Layout
  const { Header, Content} = Layout;
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
            <h2><b>MicroController Greens Web App</b></h2>
            <Card title="Login MicroController Greens">
              <LoginForm Login={Login}></LoginForm>
              {attempted === 1 ? (<p>Incorrect login information, please try again</p>):(<p></p>)}
            </Card>
          </Col>
        </Row>
      ) 
      : 
      (
        <Layout>
          <Header>
            <h2><b>MicroController Greens Web App</b></h2>
          </Header>
          <Content>
            <Row align="middle" justify="center">
              <Col>
                <Space direction="vertical" size="large" align="center">
                  <Row gutter={[20,20]} justify="center">
                    <Col>
                      <HumiditySettings></HumiditySettings>
                    </Col>
                    <Col>
                      <LightSettingsV2></LightSettingsV2>
                    </Col>
                  </Row>
                  <Row gutter={[20,20]} justify="center">
                    <Col>
                      <Status></Status>
                    </Col>
                    <Col>
                      <Analytics></Analytics>
                    </Col>
                  </Row>
                </Space>
              </Col>
            </Row>
          </Content>
        </Layout>
      )
    );
}

export default Index;