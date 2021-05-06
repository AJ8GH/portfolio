import React from 'react'
import ContactLinks from './ContactLinks'
import './styles/App.css'

export default function App () {
  return (
    <div className="app">
      <div className="container">
        <header className="App-header">
          <div className="links">
            <ContactLinks />
          </div>
          <h1>Adam Jonas</h1>

          <div className="intro">
            <p>Welcome to my portfolio</p><br></br>
            <p>I am a Junior Software Engineer with passion, curioristy and a strong desire to learn. I get excited about writing high quality code, practiscing test driven development, and building awesome apps and products.</p><br></br>
            <p>Enjoy looking through my work and please feel free to contact me, download my CV or checkout my Github and linkedIn profiles</p>
          </div>
        </header>

        <img src={process.env.PUBLIC_URL + '/portrait.JPG'} className="portrait" alt="Image of Adam" />
      </div>
    </div>
  )
}
