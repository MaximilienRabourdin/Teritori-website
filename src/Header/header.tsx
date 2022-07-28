import React, { useState } from 'react'
import '../Header/HeaderStyled.css'

// LIEN POUR LES ROUTES
import { Link } from 'react-router-dom'

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

const gitbookLink = 'https://teritori.gitbook.io'
const whitepaperLink = `${gitbookLink}/teritori-whitepaper`
const testnetLink = `${whitepaperLink}/join-teritori-testnet`
const ecosystemLink = `${whitepaperLink}/laboratori/incentivized-developper-ecosystem`
const discordLink = 'https://discord.gg/teritori'

function Header () {
  return (
    <div className='header'>
      <div className="Nav">
        <Link to='/' className='NavElem' target="_blank" rel="noreferrer"> Home </Link>
        <NavElem title="ECOSYSTEM" link={ecosystemLink} />
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
