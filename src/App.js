import React from 'react'
import ContactLinks from './ContactLinks'
import './styles/App.css'

export default function App () {
  return (
    <div className="App">
      <div className="container">
        <ContactLinks />
        <header className="App-header">
          <h1>Adam Jonas</h1>

          <div className="intro">
            <p>Welcome to my portfolio</p>
            <p>I am a passionate and curious engineer, excited by building products with high quality code</p>
            <p>Please enjoy looking through my work and contact me if you have any questions at all!</p>
          </div>
        </header>

        <img src={process.env.PUBLIC_URL + '/portrait.JPG'} className="portrait" alt="Image of Adam" />
      </div>
    </div>
  )
}
