import React from 'react'
import './Product.css'

export default function Product(props) {
  return (
    <div>
      <div className="product-page">
        <div className="product-card">
          <div className="photo">
              <a href="/"><img src={props.url} alt="" /></a>
          </div>
          <h1>{props.producttitle} </h1>
          <p>{props.producttype} </p>
        </div>
      </div>
    </div>
  )
}
