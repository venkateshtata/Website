import React from 'react';
import '../styles/eva.css'
import logo_white from './icons/eva_logo.PNG';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';
import EVA_cover from './EVA_cover';
import EVAHeader from './EVAHeader';


class EVA extends React.Component {
  render() {
    
    return (
        <div className="EVAcover">
        <EVAHeader/>
        <EVA_cover/>
          <img src={logo_white} className="EVAcover_logo"></img>

          <p className="EVAhead">EUCLID VISION ANALYTICS</p>
        </div>
    );
  }
}
export default EVA;