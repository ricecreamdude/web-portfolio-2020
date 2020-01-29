import React , { component } from 'react';
import { Modal, Button, Row, Col } from 'antd';


export default class ProjectModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      visible: false, 
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    window.open(this.props.modalData.url, "_blank");

    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  // modalData: {
  //   title: "Cleareview Web Application",
  //   subtitle: "Medical Legal Litgation Services",
  //   description: "Cleareview, Inc. was started by a radiologist to address the issue of bias in expert witness testimony."
  // }

  render(){
    return(
      <div>

        <Button
          type="normal"
          size="large"
          className="project-button"
          onClick={this.showModal}
        >
          LEARN MORE
        </Button>
        <Modal
          title={this.props.modalData.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          
          cancelText="Close"
          okText="See Project"
        >
          <p>{this.props.modalData.description}</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    )
  }
  
}