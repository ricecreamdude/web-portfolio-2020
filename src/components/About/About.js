import React from 'react';

import { Layout, Row, Col, Card, Skeleton, Icon, Avatar } from "antd";

const { Header } = Layout;

function About(props){

  return (
    <Row className="content-wrapper">
    <Col span={24}>
      <h1>Developing Technical Solutions For Your Business </h1>
      <p>
        By blending front end components, analytics, back end services, and automation, I build web solutions for your business.
      </p>
    </Col>
    <Col span={6}></Col>
  </Row>
  );
}


export default About;