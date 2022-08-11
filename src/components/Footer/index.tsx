import React from 'react';
import './FooterStyled.css';

// import extern link
import { discordLink, gitbookLink, mediumLink, twitterLink } from '../../utils/const';

// import FooterData For column
import { columnFooter } from '../../utils/Data/data'

//import FooterCard component
import FooterCard from '../Cards/FooterCard'

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
 
{/* use .map for fetch data  */}
{columnFooter.map( item => {
  return(
  <FooterCard 
  title={item.title}
  listone={item.listone}
  listtwo={item.listtwo}
  listthree={item.listthree}
  listfour={item.listfour} />
  )
})}

</div>
<div className="bottom_section">
  <div className="leftside_bottom_section">
    <img className='logo_footer' src="logo_title.png" alt="logo" />
    <a className='term_privacy'> Terms & Privacy </a>
  </div>
  <div className="middle_bottom_section">
    <p className="teritori2022">
    Teritori.com © 2022
    </p>
  </div>
  <div className="right_bottom_section">
        <FooterButton image="gitbook.svg" alt="GitBook" link={gitbookLink} />
        <FooterButton image="medium.svg" alt="Medium" link={mediumLink} />
        <FooterButton image="twitter.svg" alt="Twitter" link={twitterLink} />
        <FooterButton image="discord.svg" alt="Discord" link={discordLink} />
  </div>
</div>
    </div>
  );
};

export default Footer;
