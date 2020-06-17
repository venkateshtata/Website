import React from 'react';
import '../styles/cover.css'
import logo_white from './icons/logo_white.png';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';


class Cover extends React.Component {
  render() {
    
    return (
        <div className="cover">
          <img src={logo_white} className="cover_logo"></img>
           <Typical className="head"
            steps={['Designing Products that matter.',1]}
            loop={2}
            wrapper="p"
          />
        </div>
    );
  }
}
export default Cover;