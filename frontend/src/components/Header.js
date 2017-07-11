import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Header = () => (
    <Menu>
      <Menu.Item header>Reviso Timetracking</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item><Link to="/new">New</Link></Menu.Item>
        <Menu.Item><Link to="/overview">Overview</Link></Menu.Item>
        <Menu.Item><Link to="/manage">Manage</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
);

export default Header;
