import React from 'react';
import '../styles/cover.css'
import logo_white from './icons/logo_white.png';
import Typical from 'react-typical'
import 'bootstrap/dist/css/bootstrap.min.css';
import bot_section from './icons/bot_section.png';
import '../styles/bot-section.css';
import Button from 'react-bootstrap/Button';



class BotSection extends React.Component {
  render() {
    
    return (
        <div>
            <div  className="bot-section">
                <img src={bot_section} className="bot-img"></img>
                <div>
                <p className="bot-sec-title">Create and Deploy Interface for Chatbots</p>
                <p className="bot-sec-des">The only way to maintain pace in the digital economy is to embrace a culture of continuous evolution. To that end, we offer a game-changing framework that equips your team to unify its vision, build a culture of innovation, and reinvent your future through transformation</p>
                <Button variant="outline-dark" className="bot-btn">EXPLORE</Button>
                </div>
            </div>
        </div>
    );
  }
}
export default BotSection;