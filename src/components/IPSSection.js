import React from 'react';
import '../styles/cover.css'
import logo_white from './icons/logo_white.png';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';
import ips from './icons/ips.PNG';
import '../styles/ips-section.css';
import Button from 'react-bootstrap/Button';



class IPSSection extends React.Component {
  render() {
    
    return (
        <div>
            <div  className="ips-section">
                <img src={ips} className="ips-img"></img>
                <div>
                <p className="ips-sec-title">IMU based Indoor Positioning System</p>
                <p className="ips-sec-des">The only way to maintain pace in the digital economy is to embrace a culture of continuous evolution. To that end, we offer a game-changing framework that equips your team to unify its vision, build a culture of innovation, and reinvent your future through transformation</p>
                <Button variant="outline-dark" className="ips-btn">EXPLORE</Button>
                </div>
            </div>
        </div>
    );
  }
}
export default IPSSection;