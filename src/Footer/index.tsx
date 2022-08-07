import React from 'react';
import '../Footer/FooterStyled.css';

const gitbookLink = 'https://teritori.gitbook.io'
const discordLink = 'https://discord.gg/teritori'
const mediumLink = 'https://medium.com/teritori/'
const twitterLink = 'https://twitter.com/TeritoriNetwork'

const FooterButton: React.FC<{ image: string; link: string; alt: string }> = ({
  image,
  link,
  alt
}) => {
  return (
    <a className="FooterButton" href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={alt} />
    </a>
  )
};

const Footer: React.FC = () => {
  return (
    <div className='footer'>
  <div className="allcolumn_section">
  <div className="column">
    <div className="title_column">
      <p>Learn</p>
    </div>
    <div className="list_column">
      <ul className='all_item_column'>
        <li ><a className='item_column' href="#">Introduction</a></li>
        <li ><a className='item_column' href="#">Features</a></li>
        <li ><a className='item_column' href="#">Staking</a></li>
        <li ><a className='item_column' href="#">FAQ</a></li>
      </ul>
    </div>
  </div>
  <div className="column">
    <div className="title_column">
      <p>Build</p>
    </div>
    <div className="list_column">
      <ul className='all_item_column'>
        <li >
          <a className='item_column' href="#">Developer Portal</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Teritori SDK</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Protocol</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">CLI</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
      </ul>
    </div>
  </div>
  <div className="column">
    <div className="title_column">
      <p>Explore</p>
    </div>
    <div className="list_column">
      <ul className='all_item_column'>
        <li >
          <a className='item_column' href="#">Tokens</a>
        </li>
        <li ><a className='item_column' href="#">Apps & Services</a></li>
        <li ><a className='item_column' href="#">Wallets</a></li>
        <li >
          <a className='item_column' href="#">Protocol</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
      </ul>
    </div>
  </div>
  <div className="column">
    <div className="title_column">
      <p>Participate</p>
    </div>
    <div className="list_column">
      <ul className='all_item_column'>
        <li >
          <a className='item_column' href="#">Community</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Contributors</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Events</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Newsletters</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
      </ul>
    </div>
  </div>
  <div className="column">
    <div className="title_column">
      <p>Resources</p>
    </div>
    <div className="list_column">
      <ul className='all_item_column'>
        <li >
          <a className='item_column' href="#">About</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Press kit</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Design</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
        <li >
          <a className='item_column' href="#">Resources</a>
          <img src="arrow_footer.svg" alt="icon" />
        </li>
      </ul>
    </div>
  </div>
</div>

     <div className="FooterBar">
        <FooterButton image="gitbook.svg" alt="GitBook" link={gitbookLink} />
        <FooterButton image="medium.svg" alt="Medium" link={mediumLink} />
        <FooterButton image="twitter.svg" alt="Twitter" link={twitterLink} />
        <FooterButton image="discord.svg" alt="Discord" link={discordLink} />
      </div>
    </div>
  );
};

export default Footer;
