import React from 'react'
import ContactLinks from './components/ContactLinks'
import PageLinks from './components/PageLinks'
import About from './components/About'
import Introduction from './components/Introduction'
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
        <Introduction className="intro" />
        <img src={process.env.PUBLIC_URL + '/portrait.JPG'} className="portrait" alt="Image of Adam" />
      </div>

        <About className="about" id="about"/>
      </div>
    </div>
  )
}
