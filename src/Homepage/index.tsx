import React, { useState } from 'react'
import './HomeStyled.css'

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

const gitbookLink = 'https://teritori.gitbook.io'
const whitepaperLink = `${gitbookLink}/teritori-whitepaper`
const testnetLink = `${whitepaperLink}/join-teritori-testnet`

function Home () {
  return (
    <div className="Home">
        <img src="logo.svg" alt="Logo" className="Logo" />
        <div className="CenterElem">
          <h1 className="Title TextGradient">TERITORI</h1>
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
  )
}

export default Home
