import React, { useState } from 'react'
import '../Footer/FooterStyled.css'

const EnterTheDApp: React.FC = () => {
  const baseContent = 'ENTER THE DAPP'
  const [content, setContent] = useState(baseContent)
  const comingSoon = 'COMING SOON'
  return (
      <div
        className="Enter TextGradient"
        onMouseEnter={() => setContent(comingSoon)}
        onMouseLeave={() => setContent(baseContent)}
      >
        {content}
      </div>
  )
}

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
}

function Footer () {
  return (
    <div className='footer'>
     <div className="FooterBar">
        <FooterButton image="gitbook.svg" alt="GitBook" link={gitbookLink} />
        <FooterButton image="medium.svg" alt="Medium" link={mediumLink} />
        <FooterButton image="twitter.svg" alt="Twitter" link={twitterLink} />
        <FooterButton image="discord.svg" alt="Discord" link={discordLink} />
      </div>
      <EnterTheDApp />
    </div>
  )
}

export default Footer
