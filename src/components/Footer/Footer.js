import React from 'react';

import { Layout, Row, Col, Card, Skeleton, Icon, Avatar } from "antd";

const { Footer } = Layout;


function appFooter(props){

  return(
    <Footer>
      Built by Joshua Ho
      <Icon type="github" theme="filled" />
      <Icon type="linkedin" theme="filled" />
    </Footer> 
  )

}

export default appFooter;