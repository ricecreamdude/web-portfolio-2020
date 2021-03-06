import React from 'react';

import { Layout, Row, Col, Card, Skeleton, Icon, Avatar } from "antd";

const { Meta } = Card;

const { Header } = Layout;

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
      thumbUrl: './images/portfolio/pace-thumb.png',
    },
    // {
    //   title: "SpooPy Notes",
    //   subtitle: "Python / React JS"
    // },
    // {
    //   title: "Pynterest",
    //   subtitle: "Python / React JS"
    // }
  ];


  // https://codepen.io/pen/?&editable=true&editors=001
  let Test = testData.map( (project) => (
    <Card
    hoverable
    style={{ width: 400 }}
    cover={<img alt={ project.title } src={ project.thumbUrl } />}
  >
    {/* <div>   
      <h1>{project.title}</h1>
      <p>{project.subtitle}</p> 
    </div> */}
    </Card>
        ))
  
  return(
    <Layout>
      <Row className="content-wrapper">
        <h1> My Projects</h1>
      </Row>
      <Row className="content-wrapper">
        <Col span={2}></Col>
        <Col span={10}> 

          {Test}
          {/* <Card
            style={{ width: 400, marginTop: 16 }}
            actions={[
              <Icon type="setting" key="setting" />,
              <Icon type="edit" key="edit" />,
              <Icon type="ellipsis" key="ellipsis" />,
            ]}
          >
            <Skeleton loading={props.loading} active>
              <Meta
                title="Card title"
                description="This is the description"
              />
            </Skeleton>
          </Card> */}

        </Col>
      </Row>
    </Layout>
  )

}

export default Projects;