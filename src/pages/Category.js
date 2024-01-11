import React from 'react'
import './Category.css'


export default function Category(props) {
  return (
    <div>
      <div className="Category-box">
          <div className="Category-photo">
            <img src={props.url} alt="" />
          </div>
        <div className="Category-type">
            <h1>{props.CategoryName} </h1>
            <div className="category-btn">
                <button>Shop Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}
