import React from 'react'
import ContactLinks from './ContactLinks'
import PageLinks from './PageLinks'
import About from './About'
import './styles/App.css'

export default function App () {
  return (
    <div className="app">
      <div className="container">
        <header className="App-header">
          <div className="links">
            <PageLinks className="pageLinks"/>
            <ContactLinks className="contactLinks" />
          </div>
          <h1>Adam Jonas</h1>
        </header>

      <div className="introContainer">
        <div className="intro">
          <p>Welcome to my portfolio</p><br></br>
          <p>I am a Junior Software Engineer with passion, curiosity and a strong desire to learn. I get excited about writing high quality code, practising test driven development, and building awesome apps and products.</p><br></br>
          <p>Enjoy looking through my work and please feel free to contact me, download my CV or checkout my GitHub and linkedIn profiles</p>
        </div>
        <img src={process.env.PUBLIC_URL + '/portrait.JPG'} className="portrait" alt="Image of Adam" />
      </div>

        <About className="about" id="about"/>
      </div>
    </div>
  )
}
