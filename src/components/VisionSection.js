import React from 'react';
import '../styles/cover.css'
import logo_white from './icons/logo_white.png';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';
import detection from './icons/detection.jpg';
import '../styles/vision-section.css';
import Button from 'react-bootstrap/Button';



class VisionSection extends React.Component {
  render() {
    
    return (
        <div>
            <div  className="vision-section">
                <div>
                  <p className="vision-sec-title">Euclid Vision Analytics</p>
                  <p className="vision-sec-des">The only way to maintain pace in the digital economy is to embrace a culture of continuous evolution. To that end, we offer a game-changing framework that equips your team to unify its vision, build a culture of innovation, and reinvent your future through transformation.</p>
                  <Button variant="outline-dark" className="vision-btn" href="http://localhost:3000/eva">EXPLORE</Button>

                </div>
                <img src={detection} className="vision-img"></img>
            </div>
        </div>
    );
  }
}
export default VisionSection;