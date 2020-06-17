import React from 'react';
import sample from './icons/eva_final_cover.mp4'
import '../styles/eva_cover.css';



const EVA_cover = () => {
    return(
  <div>
      <video className="vid" autoPlay loop muted>
          <source src={sample} type="video/mp4"></source>
      </video>
  </div>
);
};


export default EVA_cover;