import React, {useState } from 'react'
import  './Navbar.css'

export default function Navbar() {
    const [islistvisible,setIslistvisible]=useState(false)

    const handellist=()=>{
        setIslistvisible(!islistvisible)
    }
  return (
    <div>
        <nav>
            <div className="hamburger" onClick={handellist}  >
                <div className="lines"></div>
                <div className="lines"></div>
                <div className="lines"></div>
            </div>
            <div className="mainnavbar"></div>
            <div className="logo">STAY REAL</div>
                <div className="navbar">
                    <div className="search">
                        <img src="/images/magnifying-glass.png" alt="" />
                        <div className="">
                        <input className='search' type="input" name="" id="" placeholder='Search Item' />
                        </div>
                    </div>
                        <div className={`navlinks ${islistvisible ? 'show':''}`}>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">New</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Men</a></li>
                                <li><a href="/">Women</a></li>
                            </ul>
                        </div>
                        <div className="icons">
                            <div className="profile">
                                <a href="/"><img src="/images/user.png" alt="" /></a>
                                <div className="profile-text">
                                    <a href="/">Log In</a>
                                </div>
                            </div>
                            <div className="bag">
                                <a href="/"><img src="/images/shopping-bag.png" alt="" /></a>
                            </div>
                        </div>
                </div>
        </nav>
    </div>
  )
}
