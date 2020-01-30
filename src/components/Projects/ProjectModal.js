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
          style={{ top: '2vh' }}


          cancelText="Close"
          okText="See Project"

          width="50vw"
          className="modal-container"
        >
            <img  
              alt={this.props.modalData.title}

              src='./images/portfolio/drbowyer_modal.png'
            />
            <section>
              <h3>{this.props.modalData.title} </h3>
              <h4>{this.props.modalData.subtitle}</h4>
              <p>{this.props.modalData.description}</p>
            </section>
        </Modal>
      </div>
    )
  }
  
}