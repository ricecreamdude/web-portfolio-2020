import React from 'react';
import './Projects.css'

import { Layout, Row, Col, Card, Button, Icon, Avatar } from "antd";

const { Meta } = Card;

const { Header, Content } = Layout;

function Projects(props){


  let testData = [
    {
      title: "Cleareview",
      subtitle: "Vue JS / VueX",
      thumbUrl: './images/portfolio/pace-thumb.png',
    },
    {
      title: "China Med Device",
      subtitle: "HTML & CSS",
      thumbUrl: './images/portfolio/bowyer-thumb.png',
    },
    {
      title: "SpooPy Notes",
      subtitle: "Python / React JS",
      thumbUrl: './images/portfolio/earthhealer-thumb.png',
    },
    // {
    //   title: "Pynterest",
    //   subtitle: "Python / React JS"
    // }
  ];


  // https://codepen.io/pen/?&editable=true&editors=001
  let cardContent = testData.map( (project) => (
    <Col span={6} align="middle">
      <div className="project-card">
        <img  
          className="project-thumbnail" 
          alt={ project.title } 
          src={ project.thumbUrl } 
        />
        <div
          className="project-hover"
        >

          <Row>
            <Col>
              <Content className="hover-text">

                  <span className="hover-title">{project.title}</span> <br/>
                  <span className="hover-subtitle">{project.subtitle}</span>

              </Content>
            </Col>
          </Row>
          <Row>
            <Col className="hover-subtitle">
              <Button
                type="normal"
                size="large"
                className="project-button"
              >
                LEARN MORE
              </Button>
            </Col>
          </Row>
        </div>


        {/* <Card
          className="project-thumbnail"
          cover={<img alt={ project.title } src={ project.thumbUrl } />}
        >
        </Card>
        <Card
          className="project-hover"
          cover={<div> {project.title} {project.subtitle}</div>}
        >
        </Card> */}



      </div>
    </Col>
        ))
  
  return(
    <Layout>
      <Row className="content-wrapper">
        <h2> My Projects</h2>
      </Row>
      <Row type="flex" justify="center" className="content-wrapper">

        {cardContent}
         
      </Row>
    </Layout>
  )

}

export default Projects;