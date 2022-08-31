import React from "react";

//import styled
import './ButtonStyled.css'

const Button: React.FC = () => {
    return ( 
    <div className="card_button">
    <div className="container_button">
    <a className="card_button_link" href="#">Apply</a>
    </div>
    </div>

   
    );
  };
  
  export default Button;