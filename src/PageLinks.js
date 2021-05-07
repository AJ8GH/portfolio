import React from 'react'
import './styles/PageLinks.css'

export default function PageLinks () {
  return (
    <div className="pageLinks">
      <a href="#about" className="aboutLink">About</a>
      <a href="#projects" className="projectsLink">Projects</a>
      <a href="#contact" className="contactLink">Contact</a>
    </div>
  )
}
