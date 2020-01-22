import React from 'react';
import './Hero.css'

import { Layout, Row, Col, Button } from "antd";

const { Content } = Layout;

function Hero(){



  return (
    <Layout>
      <Row>
        <Col span={24} >
          <Content className="hero-component">
            
            <div className="hero-content">

              <p className="hero-text">Hello. I'm <span className="hero-name">Joshua Ho</span>. <br />
                I'm a full stack web developer.</p>
              <Button
                type="normal"
                size="large"
                className="hero-button"
              >
                See My Work
              </Button>

            </div>
          </Content>
        </Col>
      </Row>
    </Layout>
  );
}


export default Hero;