import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo_cube from './icons/logo_cube_white.png';
import logo from './icons/logo.png';
import menu from './icons/menu.png';
import '../styles/header.css';
import "antd/dist/antd.css";
import { Drawer} from "antd";





class Header extends React.Component {

  state = { visible: false, placement: 'left' };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onChange = e => {
    this.setState({
      placement: e.target.value,
    });
  };

  

  render() {

    const { placement, visible } = this.state;

    
    
    return (
        <div>

          <Drawer
            width={500}
            placement={placement}
            closable={false}
            onClose={this.onClose}
            visible={visible}
            key={placement}>
            
            {/* <img variant="outline-primary" src={logo_cube} className="logo_cube"></img> */}
            <p href="#faq" className="side_item">FAQ</p>
            <p href="#explore" className="side_item">Explore</p>

          </Drawer>


            <Navbar fixed="top" variant="dark" className="nav_back">
                <Navbar.Brand href="#home">
                  {/* <img src={menu} onClick={this.showDrawer} className="menu">
                  </img> */}
                  <img src={logo_cube} className="logo_cube"></img>
                </Navbar.Brand>
                
                    <Nav className="mr-auto">
                    <Nav.Link className="nav_ele" href="#home">Home</Nav.Link>
                    <Nav.Link  className="nav_ele" href="#features">Technologies</Nav.Link>
                    <Nav.Link className="nav_ele" href="#pricing">Products</Nav.Link>
                    <Nav.Link className="nav_ele" href="#pricing">Euclid Research</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button className="search_btn" variant="outline-dark">Search</Button>
                </Form>
            </Navbar>
        </div>
    );
  }
}
export default Header