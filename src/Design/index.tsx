import React, { useState } from 'react';

// Styled
import './DesignStyled.css';

const ButtonElem: React.FC<{
  title: string
  link: string
  noBlank?: true
  comingSoon?: true
}> = ({ title, link, noBlank, comingSoon }) => {
  const [content, setContent] = useState(title)
  return (
    <a
      href={link}
      onMouseEnter={comingSoon ? () => setContent('Coming soon') : undefined}
      onMouseLeave={comingSoon ? () => setContent(title) : undefined}
      className="ButtonElem"
      target={noBlank ? undefined : '_blank'}
      rel="noreferrer"
    >
      {content}
    </a>
  )
}

function Design () {
  return (
   <div className="design">
      <div className="title_background_block_design">
      <div className="blockText">
      <img src="logo.svg" alt="Logo" className="white_logo" />
      <h1 className="Title_White"> Teritori </h1>
      <h2 className="second_title">Community Contributors MicroDesign</h2>
      </div>
      </div>
      {/* Start Galerie */}
      <div className="design_system">
      <div className="menu_design_section">
      <ButtonElem title="Download Press Kit" link="#airdrop" noBlank comingSoon />;
      <ul className='menu_design'>
      <li className='menu_design_item'><a className='item_link' href="#">Colors</a></li>
      <li className='menu_design_item'><a className='item_link' href="#">Typography</a></li>
      <li className='menu_design_item'><a className='item_link' href="#">Logo</a></li>
      </ul>
      </div>
      </div>
      <div className="column_design_section">
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title'>Colors </p>
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
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
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
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Neutral </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Additional </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
        </div>
      </div>
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title'>Typography </p>
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

           <p className="bodyline1">Bodyline 1</p>
           <p className="bodyline2">Bodyline 2</p>
           <p className="bodyline3">Bodyline 3</p>
           <p className="bodyline4">Bodyline 4</p>
           <p className="bodyline5">Bodyline 5</p>
           <p className="bodyline6">Bodyline 6</p>
           <p className="bodyline7">Bodyline 7</p>
          </div>
          <div className="text_futurcommunities">
            <div className="textandsize">
            <p className="futurofcommunitietxt_medium">Futur of communities</p>
            <p className="size_txt_medium">48 / medium</p>
            </div>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Full logo </p>
        <img src="logo_title.png" alt="logo" className='logo_title' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="icon_teritori.png" alt="logo" className='icon_logo' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="text_teritori.png" alt="logo" className='text_logo' />
          </div>
          <div className="categorie_section" id='last_child_sectiontitle'>
          <p className='color_subtitle' id='last_child_sectiontitle'>Everything you need</p>
          <ButtonElem title="Download Press Kit" link="#airdrop" noBlank comingSoon />
          <a className="button_up">
            <img src="arrow_up.svg" alt="" />
          </a>
          </div>
        </div>
      </div>
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title'>Colors </p>
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
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
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
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Neutral </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Additional </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Full logo </p>
        <img src="logo_title.png" alt="logo" className='logo_title' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="icon_teritori.png" alt="logo" className='icon_logo' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="text_teritori.png" alt="logo" className='text_logo' />
          </div>
          <div className="categorie_section" id='last_child_sectiontitle'>
          <p className='color_subtitle' id='last_child_sectiontitle'>Everything you need</p>
          <ButtonElem title="Download Press Kit" link="#airdrop" noBlank comingSoon />
          <a className="button_up">
            <img src="arrow_up.svg" alt="" />
          </a>
          </div>
        </div>
      </div>
      <div className="column_design">
        <div className="left_column">
          <div className="left_column_text"> <p className='color_title'>Colors </p>
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
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
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
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Neutral </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Additional </p>
          <div className="color_section">
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Primary</p>
          <p className="color_code"> #16BBFF</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Secondary</p>
          <p className="color_code"> #5C26F5</p>
          </div>
          <div className="card_component">
          <div className="color_card">
          </div>
          <p className="color_name">Tertiary</p>
          <p className="color_code"> #2B0945</p>
          </div>
          </div>
          </div>
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

           <p className="bodyline1">Bodyline 1</p>
           <p className="bodyline2">Bodyline 2</p>
           <p className="bodyline3">Bodyline 3</p>
           <p className="bodyline4">Bodyline 4</p>
           <p className="bodyline5">Bodyline 5</p>
           <p className="bodyline6">Bodyline 6</p>
           <p className="bodyline7">Bodyline 7</p>
          </div>
          <div className="text_futurcommunities">
            <div className="textandsize">
            <p className="futurofcommunitietxt_medium">Futur of communities</p>
            <p className="size_txt_medium">48 / medium</p>
            </div>
          </div>
          </div>
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Full logo </p>
        <img src="logo_title.png" alt="logo" className='logo_title' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="icon_teritori.png" alt="logo" className='icon_logo' />
          </div>
          <div className="categorie_section">
          <p className='color_subtitle'>Brandmark </p>
          <img src="text_teritori.png" alt="logo" className='text_logo' />
          </div>
          <div className="categorie_section" id='last_child_sectiontitle'>
          <p className='color_subtitle' id='last_child_sectiontitle'>Everything you need</p>
          <ButtonElem title="Download Press Kit" link="#airdrop" noBlank comingSoon />
          <a className="button_up">
            <img src="arrow_up.svg" alt="" />
          </a>
          </div>
        </div>
      </div>
      </div>
   </div>
  );
};

export default Design;
