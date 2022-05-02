import React from 'react'
import logo from './logo192.png'
import './index.css'
 export default function First() {
         return (
                 <div >
                         <nav className="navbar">
                                 <img src={logo } alt='logos' width='60px' className='image'></img>
                                 <h3 className='Reactfact'>ReactFacts</h3>
                                 <h4 className='reactcourse'>React Course-Project 1</h4>
                         </nav>
                 </div>
         )
}