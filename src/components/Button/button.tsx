import React from "react";
import TertiaryBox from "../Boxes/TertiaryBox";

//import styled
import './ButtonStyled.css'

const Button: React.FC = () => {
    return ( 
      <TertiaryBox 
              squaresBackgroundColor="#000000" 
              mainContainerStyle={{padding: "0rem", width:"8", height:'14', left:'-1px', top:'-4px', border:'none'}} 
              style={{margin: "0rem 0rem 0rem 2rem", border:'none', width:"10"}}>
         <div className="card_button">
    <div className="container_button">
    <a className="card_button_link" href="https://airtable.com/shrZZw1yKCSXrp7SY"  target="_blank">Apply</a>
    </div>
    </div>
      </TertiaryBox>
   

   
    );
  };
  
  export default Button;