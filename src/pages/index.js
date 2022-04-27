import React, { useState } from "react"
import { Card, Row, Col, Space, Layout, Tabs} from "antd"
import "../style/styles.less"
import LoginForm from "../components/LoginForm.js"
import CreateUser from "../components/CreateUser"
import Status from "../components/status.js"
import Analytics from "../components/analytics.js"
import LightSettingsV2 from "../components/lightSettingsV2.js"
import HumiditySettings from "../components/humiditySettings.js"

function post(url, info) {
  return fetch(url, {method: "POST", headers: {'Content-Type': 'application/x-www-form-urlencoded'}, body: info})
}

function Index () {
  // For Tabs
  const { TabPane } = Tabs;

  // Layout
  const { Header, Content} = Layout;

  // Checking for first attempt
  // State For Passwords
  const [login, setLogin] = useState(0);
  const [attemptedLogin, setAttemptedLogin] = useState("");
  const [attemptCreate, setAttemptCreate] = useState("");

  // Checking Login
  const Login = loginInfo => {
    var data = "api_key=tPmAT5Ab3j7F9&username="+loginInfo.username+"&password="+loginInfo.password;
    post("https://microcontrollergreens.live/updateLogin.php", data)
    .then(response => {
      return response.json();
    })
    .then(json => {
      if(json.test) {
        setLogin(1);
      }
      else {
        setAttemptedLogin("Incorrect login information, please try again.");
      }
    })
  }

  const CreateUserLogin = userInfo => {
    var data = "api_key=tPmAT5Ab3j7F9&username="+userInfo.username+"&password="+userInfo.password;
    post("https://microcontrollergreens.live/updateUsers.php", data);
    setAttemptCreate("User created! Please login.");
  }

    return (
      login === 0 ? 
      (
        <Row align="middle" justify="center">
          <Col>
            <h2><b>MicroController Greens Web App</b></h2>
            <Card title="MicroController Greens Authentication">
              <Tabs type="card">
                <TabPane tab="User Login" key="1">
                  <LoginForm Login={Login}></LoginForm>
                  <p>{attemptedLogin}</p>
                </TabPane>
                <TabPane tab="Create User" key="2">
                  <CreateUser Login={CreateUserLogin}></CreateUser>
                  <p>{attemptCreate}</p>
                </TabPane>
              </Tabs>
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
                      <Analytics></Analytics>
                    </Col>
                  </Row>
                  <Row gutter={[20,20]} justify="center">
                    <Col>
                      <HumiditySettings></HumiditySettings>
                    </Col>
                    <Col>
                      <LightSettingsV2></LightSettingsV2>
                    </Col>
                    <Col>
                      <Status></Status>
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