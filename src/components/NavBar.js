import React from 'react'
import { useSelector } from 'react-redux'
const NavBar = () => {
    const {color} = useSelector(state=>state.quotes)
    const {indexC} = useSelector(state=>state.quotes)
  return (
    <div className='NavBar'>
        <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className='container-fluid'>
                <h2  style={color[indexC]}>Random Quote Machine</h2>
                <ul className='navbar-nav '>
                <li className="nav-item">
                    <a href="/"><i className='fa fa-twitter' style={{color:color[indexC].color}}></i></a>
                </li>
                <li className="nav-item">
                    <a  href="https://www.instagram.com/fer_cp7/" rel="noreferrer"  target="_blank"><i className='fa fa-instagram' style={{color:color[indexC].color }}></i></a>
                </li>
                </ul>
            </div>
        </nav>
        
    </div>
  )
}

export default NavBar