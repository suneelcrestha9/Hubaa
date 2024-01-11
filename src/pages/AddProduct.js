import React from 'react'

export default function AddProduct() {
  return (
    <div>
      <div className="addproduct-box">
        <h1>Add Products</h1>
        <div className="Image url">
            <input type="text" placeholder='Image URL' />
        </div>
        <div className="">
            <label htmlFor="ProductName">
                <input type="text" placeholder='Product Name' />
            </label>
        </div>
        <div className="ProductDiscription">
            <label htmlFor="">
                <input type="text" placeholder='Product Discription' />
            </label>
        </div>
        <button>Submit</button>
      </div>
    </div>
  )
}
