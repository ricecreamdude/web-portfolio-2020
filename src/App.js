import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>HEADER CONTENT</Header>
        <Content>PORTFOLIO CONTENT</Content>
        <Footer>USEFUL LINKS</Footer>
      </Layout>
    </div>
  );
}

export default App;
