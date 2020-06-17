import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import logo_cube from './icons/logo_cube_white.png';
import logo from './icons/logo.png';
import menu from './icons/menu.png';
import '../styles/eva-header.css';
import "antd/dist/antd.css";
import { Drawer} from "antd";





class EVAHeader extends React.Component {

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
            <p href="#faq" className="EVAside_item">FAQ</p>
            <p href="#explore" className="EVAside_item">Explore</p>

          </Drawer>


            <Navbar fixed="top" variant="dark" className="EVAnav_back">
                <Navbar.Brand href="#home">
                  {/* <img src={menu} onClick={this.showDrawer} className="menu">
                  </img> */}
                  <img src={logo_cube} className="EVAlogo_cube"></img>
                </Navbar.Brand>
                
                    <Nav className="mr-auto">
                    <Nav.Link className="EVAnav_ele" href="#home">Home</Nav.Link>
                    <Nav.Link  className="EVAnav_ele" href="#features">Technologies</Nav.Link>
                    <Nav.Link className="EVAnav_ele" href="#pricing">Products</Nav.Link>
                    <Nav.Link className="EVAnav_ele" href="#pricing">Euclid Research</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
  }
}
export default EVAHeader