import React, { useState } from 'react'
import './App.css'

const NavElem: React.FC<{ title: string; link: string }> = ({
  title,
  link
}) => (
  <a href={link} className="NavElem" target="_blank" rel="noreferrer">
    {title}
  </a>
)

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

const gitbookLink = 'https://teritori.gitbook.io'
const whitepaperLink = `${gitbookLink}/teritori-whitepaper`
const testnetLink = `${whitepaperLink}/join-teritori-testnet`
const ecosystemLink = `${whitepaperLink}/laboratori/incentivized-developper-ecosystem`
const discordLink = 'https://discord.gg/teritori'
const mediumLink = 'https://medium.com/teritori/'
const twitterLink = 'https://twitter.com/TeritoriNetwork'

function App () {
  return (
    <div className="App">
      <div className="Nav">
        <NavElem title="ECOSYSTEM" link={ecosystemLink} />
        <NavElem title="TESTNET" link={testnetLink} />
        <NavElem title="COMMUNITY" link={discordLink} />
        <NavElem title="DOCS" link={whitepaperLink} />
      </div>
      <EnterTheDApp />

      <div>
        <img src="logo.png" alt="Logo" className="Logo" />

        <div className="CenterElem">
          <span className="Title TextGradient">TERITORI</span>
        </div>
        <div className="CenterElem">
          <span className="SubTitle TextGradient">FUTURE OF COMMUNITIES</span>
        </div>
        <div className="CenterElem">
          <span className="SubSubTitle TextGradient">
            Let’s build together.
          </span>
        </div>

        <div className="MainButtons">
          <ButtonElem title="Airdrop" link="#airdrop" noBlank comingSoon />
          <ButtonElem title="Whitepaper" link={whitepaperLink} />
          <ButtonElem title="Join Validators" link={testnetLink} />
        </div>
      </div>

      <div className="FooterBar">
        <FooterButton image="gitbook.svg" alt="GitBook" link={gitbookLink} />
        <FooterButton image="medium.svg" alt="Medium" link={mediumLink} />
        <FooterButton image="twitter.svg" alt="Twitter" link={twitterLink} />
        <FooterButton image="discord.svg" alt="Discord" link={discordLink} />
      </div>
    </div>
  )
}

export default App
