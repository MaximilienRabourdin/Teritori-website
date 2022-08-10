import React, { useState } from 'react'
import './HeaderStyled.css'

// Link for routes
import { Link } from 'react-router-dom';

// import extern link
import { discordLink, whitepaperLink, ecosystemLink, testnetLink } from '../../utils/const';


const NavElem: React.FC<{ title: string; link: string }> = ({
  title,
  link
}) => (
      <a href={link} className="NavElem" target="_blank" rel="noreferrer">
        {title}
      </a>
)

const EnterTheDApp: React.FC = () => {
  const baseContent = 'ENTER THE DAPP'
  const [content, setContent] = useState(baseContent)
  const comingSoon = 'COMING SOON'
  return (
      <div
        className="Enter_TextGradient"
        onMouseEnter={() => setContent(comingSoon)}
        onMouseLeave={() => setContent(baseContent)}
      >
        {content}
      </div>
  )
}

const Header: React.FC = () => {
  return (
    <div className='header'>
      <div className="Nav">
        <Link to='/' className='NavElem' target="_blank" rel="noreferrer"> Home </Link>
        <NavElem title="ECOSYSTEM" link={ecosystemLink} />
        <NavElem title="TESTNET" link={testnetLink} />
        <NavElem title="COMMUNITY" link= {discordLink} />
        <NavElem title="DOCS" link= {whitepaperLink} />
        <Link to='/grants' className='NavElem' target="_blank" rel="noreferrer"> Hiring </Link>
      </div>
      <EnterTheDApp />
    </div>
  )
}

export default Header
