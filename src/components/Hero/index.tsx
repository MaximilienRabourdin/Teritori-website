import React from 'react';

// Styled
import './HeroStyled.css';

const Hero: React.FC = () => {
  return (
    <div className="title_background">
    <div className="blockText"id='menu'>
    <img src="logo.svg" alt="Logo" className="white_logo" />
    <h1 className="Title_White"> Teritori </h1>
    <h2 className="second_title">Community Contributors MicroDesign</h2>
    </div>
    </div>
 
  );
};

export default Hero;
