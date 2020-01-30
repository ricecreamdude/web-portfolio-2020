import React from 'react';

import './Projects.css'

import { Layout, Row, Col, Card, Button, Icon, Avatar } from "antd";
import ProjectModal from './ProjectModal';


const { Meta } = Card;

const { Header, Content } = Layout;

function Projects(props){


  let testData = [
    {
      title: "Cleareview",
      subtitle: "VueJS / VueX",
      thumbUrl: './images/portfolio/pace-thumb.png',
      modalData: {
        title: "Cleareview Web Application",
        subtitle: "Medical Legal Litgation Services",
        description: "Cleareview, Inc. was started by a radiologist to address the issue of bias in expert witness testimony.",
        url: "https://www.cleareview.com/",
      }
    },
    {
      title: "China Med Device",
      subtitle: "WordPress, HTML/CSS",
      thumbUrl: './images/portfolio/bowyer-thumb.png',
      modalData: {
        title: "China Med Device",
        subtitle: "Medical Device Market Entry Solutions",
        description: "Providing turn-key solutions for Western medical device & In-Vitro Diagnostic companies with NMPA (CFDA) regulatory and commercialization services in China.",
        url: "https://www.chinameddevice.com" 
      }
    },
    {
      title: "Dermatology Arts",
      subtitle: "Squarespace, HTML/CSS",
      thumbUrl: './images/portfolio/earthhealer-thumb.png',
      modalData: {
        title: "Dermatology Arts",
        subtitle: "Local Medical Services Website",
        description: "A friendly, caring, modern dermatology practice in Bellevue focused on real medical and surgical skin needs.",
        url: "https://dermatologyarts.com/"

      }
    },
    // {
    //   title: "Pynterest",
    //   subtitle: "Python / React JS"
    // }
  ];

  // https://codepen.io/pen/?&editable=true&editors=001
  let cardContent = testData.map( (project) => (
    <Col xs={18} sm={18} md={18} lg={6} xl={6} align="middle">
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
              <ProjectModal
                modalData={project.modalData}
              >
              </ProjectModal>
            </Col>
          </Row>
        </div>

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