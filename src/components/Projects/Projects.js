import React from 'react';

import './Projects.css'

import { Layout, Row, Col, Card, Button, Icon, Avatar } from "antd";
import ProjectModal from './ProjectModal';


const { Meta } = Card;

const { Header, Content } = Layout;

function Projects(props){


  let testData = [

    {
      title: "Dr. Bowyer ",
      subtitle: "WordPress, HTML/CSS",
      thumbUrl: './images/portfolio/bowyer_thumb.png',
      modalData: {
        title: "Dr. Bowyer",
        subtitle: "DENTAL SERVICES",
        description: "Worked with a designer to develop a custom multi-page website. Managed web hosting, domain registration, and website theme modifications",
        url: "https://www.drbowyer.com/",
        imgUrl: "./images/portfolio/bowyer_modal.png"
      }
    },
    {
      title: "Earth Healer",
      subtitle: "Squarespace, HTML/CSS",
      thumbUrl: './images/portfolio/earthhealer_thumb.png',
      modalData: {
        title: "Earth Healer",
        subtitle: "GARDENING CLASSES AND TIPS",
        description: "Worked with a designer to develop a custom multi-page website. Managed web hosting, domain registration, and website theme modifications",
        url: "https://earthhealerllc.com/",
        imgUrl: "./images/portfolio/earthhealer_modal.jpeg"
      }
    },
    {
      title: "PACE Staffing Network",
      subtitle: "WordPress, HTML/CSS",
      thumbUrl: './images/portfolio/pace_thumb.png',
      modalData: {
        title: "PACE Staffing Network",
        subtitle: "STAFFING SERVICES IN THE NORTHWEST",
        description: "A local temporary staffing and direct hire recruiting agency. Crafted serveral pages by hand using custom HTML/CSS.",
        url: "https://www.pacestaffing.com/",
        imgUrl: './images/portfolio/pace_modal.jpg'
      }
    },
        // {
    //   title: "Cleareview",
    //   subtitle: "VueJS / VueX",
    //   thumbUrl: './images/portfolio/pace_thumb.png',
    //   modalData: {
    //     title: "Cleareview",
    //     subtitle: "MEDICAL LITIGATION SERVICES",
    //     description: "Cleareview, Inc. was started by a radiologist to address the issue of bias in expert witness testimony.",
    //     url: "https://www.cleareview.com/",
    //     imgUrl: ""
    //   }
    // },
    // {
    //   title: "China Med Device",
    //   subtitle: "WordPress, HTML/CSS",
    //   thumbUrl: './images/portfolio/cmd_logo.png',
    //   modalData: {
    //     title: "China Med Device",
    //     subtitle: "MEDICAL DEVICE MARKET ENTRY SOLUTIONS",
    //     description: "Providing turn-key solutions for Western medical device & In-Vitro Diagnostic companies with NMPA (CFDA) regulatory and commercialization services in China.",
    //     url: "https://www.chinameddevice.com" 
    //   }
    // },
    // {
    //   title: "Dermatology Arts",
    //   subtitle: "Squarespace, HTML/CSS",
    //   thumbUrl: './images/portfolio/earthhealer_thumb.png',
    //   modalData: {
    //     title: "Dermatology Arts",
    //     subtitle: "LOCAL DERMATOLOGY SERVICES",
    //     description: "A friendly, caring, modern dermatology practice in Bellevue focused on real medical and surgical skin needs.",
    //     url: "https://dermatologyarts.com/",
    //     imgUrl: "./images/portfolio/dermatology_arts.png"
    //   }
    // },
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
          <Row align="middle">
            <Row>
              <Col>
                <Content className="hover-text">
                    <span className="hover-title">{project.title}</span> <br/>
                    <span className="hover-subtitle">{project.subtitle}</span>
                </Content>
              </Col>
            </Row>
            <Row >
              <Col className="hover-subtitle">
                <ProjectModal
                  modalData={project.modalData}
                >
                </ProjectModal>
              </Col>
            </Row>
          </Row>
        </div>

      </div>
    </Col>
  ))
  
  return(
    <Layout>
      <Row className="content-wrapper">
        <h2> Portfolio </h2>
      </Row>
      <Row type="flex" justify="center" className="content-wrapper">
        {cardContent}
      </Row>
    </Layout>
  )

}

export default Projects;