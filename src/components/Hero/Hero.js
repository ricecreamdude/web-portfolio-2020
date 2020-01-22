import React from 'react';

import { Layout, Row, Col, Card, Skeleton, Icon, Avatar } from "antd";

const { Header } = Layout;

function Hero(props){

  return (
    <Row className="content-wrapper">
      <Col span={24}>
        <h1>Hello. I'm Joshua Ho. </h1>
        <p>I'm a full stack web developer.</p>
      </Col>
  </Row>
  );
}


export default Hero;