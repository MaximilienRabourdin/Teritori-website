import React from 'react';

// Styled
import './DesignStyled.css';

//import Header and Footer
import Navbar from '../../Navbar';
// import Footer from '../../Footer';

import ColorCard from '../../Cards/ColorCard';
import 
{ 
  colorCardMain, 
  colorCardGradients, 
  colorCardNeutral, 
  colorCardAdditional 
} 
  from '../../../utils/Data/data';

const Design: React.FC = () => {
  return (
   <div className="design">
     <Navbar />
      <div className="title_background_block_design">
      <div className="blockText"id='menu'>
      <img src="logo.svg" alt="Logo" className="white_logo" />
      <h1 className="Title_White"> Teritori </h1>
      <h2 className="second_title">Community Contributors MicroDesign</h2>
      </div>
      </div>
      {/* Start Galerie */}
      <div className="design_system">
      <div className="menu_design_section">
      <ul className='menu_design'>
      <li className='menu_design_item'><a className='item_link' href="#colors">Colors</a></li>
      <li className='menu_design_item'><a className='item_link' href="#typography">Typography</a></li>
      <li className='menu_design_item'><a className='item_link' href="#logo">Logo</a></li>
      </ul>
      </div>
      </div>
      <span className="ancres" id="colors" ></span>
      <div className="column_design_section">
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title' id='colors'>Colors </p>
          <p className='color_description'> These are all of the core brand colors we use for Teritori projects. They are labeled and displayed with hex color values.</p>
        </div>
        </div>
        <div className="right_column">
          <div className="categorie_section">
          <p className='color_subtitle'>Main </p>
          <div className="color_section">
          {colorCardMain.map(item => {
            return(
              <ColorCard
              title={item.title}
              describtion={item.description}
              style={item.style} />
            )
          })}
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Gradients </p>
          <div className="color_section">
          {colorCardGradients.map(item => {
            return(
              <ColorCard
              title={item.title}
              describtion={item.description}
              style={item.style} />
            )
          })}
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Neutral </p>
          <div className="color_section">
          {colorCardNeutral.map(item => {
            return(
              <ColorCard
              title={item.title}
              describtion={item.description}
              style={item.style} />
            )
          })}
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Additional </p>
          <div className="color_section">
          {colorCardAdditional.map(item => {
            return(
              <ColorCard
              title={item.title}
              describtion={item.description}
              style={item.style} />
            )
          })}
          </div>
          </div>
        </div>
      </div>
      {/* Color section end */}
      <span className="ancres" id="typography" ></span>
      <div className="column_design" id='typography'>
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title' >Typography </p>
          <p className='color_description'> These are all of the core brand colors we use for Teritori projects. They are labeled and displayed with hex color values.</p>
        </div>
        </div>
        <div className="right_column">
          <div className="categorie_section">
          <p className='color_subtitle'>EXO font family </p>
          <div className="fontfamily_section">
          <div className="text_fontfamily_section">
           <p className="headline1">Headline 1</p>
           <p className="headline2">Headline 2</p>
           <p className="headline3">Headline 3</p>
           <p className="headline4">Headline 4</p>
           <p className="headline5">Headline 5</p>
           <p className="headline6">Headline 6</p>

           <p className="bodyline1">Body 1</p>
           <p className="bodyline2">Body 2</p>
           <p className="bodyline3">Body 3</p>
           <p className="bodyline4">Body 4</p>
           <p className="bodyline5">BODY 5</p>
           <p className="bodyline6">Body 6</p>
           <p className="bodyline7">Body 7</p>
          </div>
          <div className="text_futurcommunities">
            <div className="textandsize">
            <p className="futurofcommunitietxt_medium">Future of communities</p>
            <p className="size_txt_medium" id='subtext_fourtyeight_medium'>48 / medium</p>
            <p className="futurofcommunitietxt_medium" id='thirtytwo_medium'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_thirtytwo_medium'>32 / medium</p>
            <p className="futurofcommunitietxt_medium" id='twentytwoheight_medium'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_twentytwo_medium'>28 / semibold</p>
            <p className="futurofcommunitietxt_medium" id='twenty_medium'>Future of communities</p>
            <p className="size_txt_medium"id='subtext_twenty_medium'>20 / semibold</p>
            <p className="futurofcommunitietxt_medium" id='sixteen_bold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_sixteen_bold'>16 / bold</p>
            <p className="futurofcommunitietxt_medium" id='sixteen_semibold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_sixteen_semibold'>16 / semibold</p>
            <p className="futurofcommunitietxt_medium" id='fourteen_semibold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_fourteen_semibold'>14 / semibold</p>
            <p className="futurofcommunitietxt_medium" id='fourteen_medium'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_fourteen_medium'>14 / medium </p>
            <p className="futurofcommunitietxt_medium" id='thirteen_semibold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_thirteen_semibold'>13 / semibold </p>
            <p className="futurofcommunitietxt_medium" id='thirteen_medium'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_thirteen_medium'>13 / medium </p>
            <p className="futurofcommunitietxt_medium" id='twelve_bold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_twelve_bold'>12 / bold </p>
            <p className="futurofcommunitietxt_medium" id='twelve_semibold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_twelve_semibold'>12 / semibold </p>
            <p className="futurofcommunitietxt_medium" id='ten_semibold'>Future of communities</p>
            <p className="size_txt_medium" id='subtext_ten_semibold'>10 / bold </p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      <span className="ancres" id="design" ></span>
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title' id='logo'>Logo, Mark </p>
          <p className='color_description'> Full logo, brandmark, wordmark</p>
        </div>
        </div>
        <div className="right_column">
          <div className="categorie_section">
          <p className='color_subtitle'>Full logo </p>
          <img src="logo_title.png" alt="logo" className='logo_title' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'> Brandmark </p>
          <img src="icon_teritori.png" alt="logo" className='icon_logo' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="text_teritori.png" alt="logo" className='text_logo' />
          </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
   </div>
  );
};

export default Design;
