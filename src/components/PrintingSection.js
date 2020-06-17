import React from 'react';
import '../styles/cover.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import printing_img from './icons/3dprint.jpg';
import '../styles/printing-section.css';
import Button from 'react-bootstrap/Button';



class VisionSection extends React.Component {
  render() {
    
    return (
        <div>
            <div  className="printing-section">
                <div>
                  <p className="printing-sec-title">3D Printing Platform for Rapid Prototyping</p>
                  <p className="printing-sec-des">The only way to maintain pace in the digital economy is to embrace a culture of continuous evolution. To that end, we offer a game-changing framework that equips your team to unify its vision, build a culture of innovation, and reinvent your future through transformation.</p>
                  <Button variant="outline-dark" className="printing-btn">EXPLORE</Button>

                </div>
                <img src={printing_img} className="printing-img"></img>
            </div>
        </div>
    );
  }
}
export default VisionSection;