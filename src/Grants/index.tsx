import React from 'react';
import './GrantStyled.css';

function Grants () {
  return (
   <div className="grant">
      <div className="title_background_block">
      <div className="blockText">
      <img src="logo.svg" alt="Logo" className="white_logo" />
      <h1 className="Title_White"> Teritori </h1>
      <h2 className="second_title">Community Contributors Microgrants</h2>
      </div>
      </div>
      <div className="galerie">
        <div className="all_container">
        {/* Pour avoir des coins 'cassés' il faut avoir deux element l'un sur l'autre */}
        <div className="container_card">
        <div className="card">
          <div className="container_title">
          <div className="card_title">
            <img className='card_title_icon' src="../../build_icon.svg" alt="icon" />
            <p className='card_title_text'> Build something </p>
          </div>
          </div>
          <div className="cardList">
          <li className='listName'>Build an integration</li>
          <li className='listName'>Translate documentation</li>
          <li className='listName'>Create turorials</li>
          <li className='listName'>Other contributions</li>
          </div>

          <div className="card_button">
            <div className="container_button">
            <a className="card_button_link" href="">Apply</a>
            </div>
          </div>
        </div>
        </div>
        <div className="container_card">
        <div className="card">
          <div className="container_title">
          <div className="card_title">
            <img className='card_title_icon' src="../../event_icon.svg" alt="icon" />
            <p className='card_title_text'> Host an event </p>
          </div>
          </div>
          <div className="cardList">
          <li className='listName'>Host a meetup / workshop</li>
          <li className='listName'>Host a conference</li>
          <li className='listName'>Create a VR world</li>
          <li className='listName'>Other events</li>
          </div>

          <div className="card_button">
            <div className="container_button">
            <a className="card_button_link" href="">Apply</a>
            </div>
          </div>
        </div>
        </div>
        <div className="container_card">
        <div className="card">
          <div className="container_title">
          <div className="card_title">
            <img className='card_title_icon' src="../../media_icon.svg" alt="icon" />
            <p className='card_title_text'> Create media / content </p>
          </div>
          </div>
          <div className="cardList">
          <li className='listName'>Product / marketing video</li>
          <li className='listName'>GIF / animation</li>
          <li className='listName'>Technical blog post</li>
          <li className='listName'>Other media</li>
          </div>

          <div className="card_button">
            <div className="container_button">
            <a className="card_button_link" href="">Submit</a>
            </div>
          </div>
        </div>
        </div>
        <div className="container_card">
        <div className="card">
          <div className="container_title">
          <div className="card_title">
            <img className='card_title_icon' src="../..//event_icon.svg" alt="icon" />
            <p className='card_title_text'> Host an event </p>
          </div>
          </div>
          <div className="cardList">
          <li className='listName'>Host a meetup / workshop</li>
          <li className='listName'>Host a conference</li>
          <li className='listName'>Create a VR world</li>
          <li className='listName'>Other events</li>
          </div>

          <div className="card_button">
            <div className="container_button">
            <a className="card_button_link" href="">Apply</a>
            </div>
          </div>
        </div>
        </div>
        <div className="container_card">
        <div className="card">
          <div className="container_title">
          <div className="card_title">
            <img className='card_title_icon' src="../../media_icon.svg" alt="icon" />
            <p className='card_title_text'> Create media / content </p>
          </div>
          </div>
          <div className="cardList">
          <li className='listName'>Product / marketing video</li>
          <li className='listName'>GIF / animation</li>
          <li className='listName'>Technical blog post</li>
          <li className='listName'>Other media</li>
          </div>

           <div className="card_button">
            <div className="container_button">
            <a className="card_button_link" href="">Submit</a>
            </div>
          </div>
        </div>
        </div>
        <div className="container_card">
        <div className="card">
          <div className="container_title">
          <div className="card_title">
            <img className='card_title_icon' src="../../build_icon.svg" alt="icon" />
            <p className='card_title_text'> Build something </p>
          </div>
          </div>
          <div className="cardList">
          <li className='listName'>Build an integration</li>
          <li className='listName'>Translate documentation</li>
          <li className='listName'>Create tutorials</li>
          <li className='listName'>Other contributions</li>
          </div>

          <div className="card_button">
            <div className="container_button">
            <a className="card_button_link" href="">Apply</a>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>

   </div>
  );
};

export default Grants;
