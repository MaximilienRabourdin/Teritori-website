import React, { useState, useEffect } from 'react';
import './GrantStyled.css';

//import card component 
import CardGrant from '../Cards/CardGrants';

//import Header and Footer
import Navbar from '../Navbar';
import Footer from '../Footer';


// Data for cardGrant
import { info } from '../../utils/data';

const Grants: React.FC = () => {
  
  return (
   <div className="grant">
     <Navbar />
     <div className="all_grant">
      <div className="title_background_block_grant">
      <div className="blockText">
      <img src="logo.svg" alt="Logo" className="white_logo" />
      <h1 className="Title_White"> Teritori </h1>
      <h2 className="second_title">Community Contributors Microgrants</h2>
      </div>
      </div>
      <div className="galerie">
        <div className="all_container">
        {/* To have clip path border we need to have container which encompasses our div  */}
       {info.map(item => {
         return (
          <CardGrant 
          title={item.title} 
          list1={item.list1} 
          list2={item.list2} 
          list3={item.list3} 
          list4={item.list4}
          icon={item.icon}/>
         )
       })}
        </div>
      </div>
      </div>
      <Footer />
   </div>
  );
};

export default Grants;
