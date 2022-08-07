import React from 'react';

// Styled
import './DesignStyled.css';

const Design: React.FC = () => {
  return (
   <div className="design">
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
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='main_secondary'>
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='main_tertiary'>
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Gradients </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card" id="grey_gradients">
          </div>
          <p className="color_name">Grey</p>
          <p className="color_code">linear-gradient(90.12deg, #676767 2.11%, #B7B7B7 96.47%);</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="primary_gradients">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> linear-gradient(90deg, #5433FF 0%, #20BDFF 50%, #A5FECB 100%);</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="secondary_gradients">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> linear-gradient(105.66deg, #01B7C5 -0.8%, #782C96 104.84%);</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Neutral </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card" id="zerozero_neutral">
          </div>
          <p className="color_name">00</p>
          <p className="color_code"> #000000</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="seventeen_neutral">
          </div>
          <p className="color_name">17</p>
          <p className="color_code">#171717</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="twentytwo_neutral">
          </div>
          <p className="color_name">22</p>
          <p className="color_code"> #222222</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="thirtythree_neutral">
          </div>
          <p className="color_name">33</p>
          <p className="color_code"> #333333</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="fourtyfour_neutral">
          </div>
          <p className="color_name">44</p>
          <p className="color_code"> #444444</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="fiftyfive_neutral">
          </div>
          <p className="color_name">55</p>
          <p className="color_code"> #555555</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="seventyseven_neutral">
          </div>
          <p className="color_name">77</p>
          <p className="color_code"> #777777</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="atree_neutral">
          </div>
          <p className="color_name">A3</p>
          <p className="color_code"> #A3A3A3</p>
          </div>
          <div className="card_component">
          <div className="color_card" id="white_neutral">
          </div>
          <p className="color_name">White</p>
          <p className="color_code"> #FFFFFF</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Additional </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card" id='green_additional'>
          </div>
          <p className="color_name">green</p>
          <p className="color_code"> #C8FFAE</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='greentenpercent_additional'>
          </div>
          <p className="color_name">green 10%</p>
          <p className="color_code"> #C8FFAE</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='red_additional'>
          </div>
          <p className="color_name">red</p>
          <p className="color_code"> #FFAEAE</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='redtenpercent_additional'>
          </div>
          <p className="color_name">red 10%</p>
          <p className="color_code"> #FFAEAE</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='yellowdefault_additional'>
          </div>
          <p className="color_name">yellow / default</p>
          <p className="color_code"> #FFE768</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='yellowlight_additional'>
          </div>
          <p className="color_name">yellow / light</p>
          <p className="color_code"> #FFE768</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='orangedefault_additional'>
          </div>
          <p className="color_name">orange / default</p>
          <p className="color_code">#EAA54B</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='orangelight_additional'>
          </div>
          <p className="color_name">orange / light</p>
          <p className="color_code">#EAA54B</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='reddefault_additional'>
          </div>
          <p className="color_name">red / default</p>
          <p className="color_code">#F46F76</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='redlight_additional'>
          </div>
          <p className="color_name">red / light</p>
          <p className="color_code">#F46F76</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='pinkdefault_additional'>
          </div>
          <p className="color_name">pink / default</p>
          <p className="color_code">#F46FBF</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='pinklight_additional'>
          </div>
          <p className="color_name">pink / light</p>
          <p className="color_code">#F46FBF</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='purpledefault_additional'>
          </div>
          <p className="color_name">purple / default</p>
          <p className="color_code">#9990F5</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='purplelight_additional'>
          </div>
          <p className="color_name">purple / light</p>
          <p className="color_code">#9990F5</p>
          </div>
          <div className="card_component">
          <div className="color_card" id='darkbluedefault_additional'>
          </div>
          <p className="color_name">dark blue</p>
          <p className="color_code">#2B2B33</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      {/* Color section end */}
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title' id='typography'>Typography </p>
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
   </div>
  );
};

export default Design;
