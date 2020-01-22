import React from "react";
import "./App.css";

//Components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";


import { Layout, Row, Card } from "antd";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }

  render(){ 

    return(
      <div className="App">
      <Layout>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects
          isLoading={this.state.loading}
        />

        {/* Contact Me */}
        <Row className="content-wrapper">

        </Row>
        
        <Footer />
      </Layout>
    </div>
    )
  }



}

// function App() {
//   return (

//   );
// }

export default App;
