import React from "react";
import "./App.css";

import Header from "./components/Header/Header"

import { Layout, Row, Col, Card, Skeleton, Icon, Avatar } from "antd";

const { Meta } = Card;

const { Footer } = Layout;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }

  render(){ 

    const { loading } = this.state;

    return(
      <div className="App">
      <Layout>
        <Header></Header>
        
        {/* Hero */}
        <Row className="content-wrapper">
          <Col span={24}>
            <h1>HELLO MY NAME JOSH I BUILD YOU COMPOOTER WEBBY PAGE</h1>
            <p>I build online web technologies</p>
          </Col>
        </Row>
        
        {/* About Me */}
        <Row className="content-wrapper">
          <Col span={18}>
            <h1>Developing Technical Solutions For Your Business </h1>
            <p>
              By blending front end components, analytics, back end services, and automation, I build web solutions for your business.
            </p>
          </Col>
          <Col span={6}></Col>
        </Row>
        {/* Skills */}
        <Layout>
          <Row className="content-wrapper">
            <Col span={12}>
              <h1>Web Development</h1>
              <p>List of my skills here</p>
            </Col>
            <Col span={12}>
              <img src="https://via.placeholder.com/500x350" alt="Web Development Image"/>
            </Col>
          </Row>
          <Row className="content-wrapper">
            <Col span={12}>
              <img src="https://via.placeholder.com/500x350" alt="Digital Marketing Image" />
            </Col>
            <Col span={12}>
              <h1>Digital Marketing</h1>
              <p>List of my skills here</p>
            </Col>
          </Row>
          <Row className="content-wrapper"> 
            <Col span={12}>
              <h1>Mentorship and Tutoring</h1>
              <p>List of my skills here</p>
            </Col>
            <Col span={12}>
              <img src="https://via.placeholder.com/500x350" alt="Mentorship Image" />
            </Col>
          </Row>

        </Layout>

        {/* Projects */}
        <Layout>
          <Row className="content-wrapper">
            <h1> My Projects</h1>
          </Row>
          <Row className="content-wrapper">
            <Col span={2}></Col>
            <Col span={10}> 
              <Card
                style={{ width: 400, marginTop: 16 }}
                actions={[
                  <Icon type="setting" key="setting" />,
                  <Icon type="edit" key="edit" />,
                  <Icon type="ellipsis" key="ellipsis" />,
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title="Card title"
                    description="This is the description"
                  />
                </Skeleton>
              </Card>
            </Col>
          </Row>
        </Layout>

        {/* Contact Me */}
        <Row className="content-wrapper">

        </Row>
        
        <Footer>
          Built by Joshua Ho
          <Icon type="github" theme="filled" />
          <Icon type="linkedin" theme="filled" />
        </Footer>

      </Layout>
    </div>
    )
  }



}

// function App() {
//   return (

//   );
// }

export default App;
