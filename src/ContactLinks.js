import React from 'react'
import './styles/ContactLinks.css'
import Cv from './documents/AdamJonasCV.pdf'

export default function ContactLinks () {
  return (
    <div>
      <a href="https://www.linkedin.com/in/adamjonas1/" target="_blank" rel="noreferrer">
        <img src={process.env.PUBLIC_URL + '/linkedin.png'} className="linkedin" />
      </a>

      <a href="https://github.com/AJ8GH" target="_blank" rel="noreferrer">
        <img src={process.env.PUBLIC_URL + '/github.png'} className="github" />
      </a>

      <a href={Cv} target="_blank" rel="noreferrer">
        <img src={process.env.PUBLIC_URL + '/cv.png'} className="cv" />
      </a>
    </div>
  )
}
