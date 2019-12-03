import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/Header'

import { Layout } from 'antd';

const { Content, Footer } = Layout;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){ 
    return(
      <div className="App">
      <Layout>
        <Header></Header>
        {/* <Content>PORTFOLIO CONTENT</Content>
        <Footer>USEFUL LINKS</Footer> */}
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
