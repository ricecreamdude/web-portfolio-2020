import React from 'react';

import { Layout, Row, Col, Card, Skeleton, Icon, Avatar } from "antd";

const { Header } = Layout;


function Skills(props){

  return(
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
  )

}

export default Skills