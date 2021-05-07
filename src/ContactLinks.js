import React from 'react'
import Cv from './documents/AdamJonasCV.pdf'
import './styles/ContactLinks.css'

export default function ContactLinks () {
  return (
    <div>
      <a href="https://www.linkedin.com/in/adamjonas1/" target="_blank" rel="noreferrer" className="linkedinLink">
        <img src={process.env.PUBLIC_URL + '/linkedin.png'} className="linkedin" alt="LinkedIn logo" />
      </a>

      <a href="https://github.com/AJ8GH" target="_blank" rel="noreferrer" className="githubLink">
        <img src={process.env.PUBLIC_URL + '/github.png'} className="github" alt="GitHub logo" />
      </a>

      <a href={Cv} target="_blank" rel="noreferrer" className="cvLink">
        <img src={process.env.PUBLIC_URL + '/cv.png'} className="cv" alt="Link to Adam's CV"/>
      </a>
    </div>
  )
}
