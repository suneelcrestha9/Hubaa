import React from 'react'
import './Aboutus.css'

export default function Aboutus(props) {
  return (
    <div>
      <div className="aboutus">
        <div className="aboutus-card">
            <img src={props.url} alt="" />
        </div>
        <h1>{props.title} </h1>
        <p>{props.description} </p>
      </div>
    </div>
  )
}
