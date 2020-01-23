import React from 'react';

import {Menu, Layout} from 'antd';

const { SubMenu } = Menu;

const { Header } = Layout;

function AppHeader(props){

  return (
    <Menu mode="horizontal">
      <Menu.Item key='headerHome'>
        Joshua Ho
      </Menu.Item>
      <Menu.Item key='headerServices'>
        Services
      </Menu.Item>
      <Menu.Item key='headerContact'>
        Contact
      </Menu.Item>
      <Menu.Item key='headerProjects'>
        Projects
      </Menu.Item>
    </Menu>
  );
}


export default AppHeader;