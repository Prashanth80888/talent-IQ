import './Home.css'
import { useState, useEffect } from 'react'

export default function Navbar(){

  const [scroll,setScroll]=useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      window.scrollY>50?setScroll(true):setScroll(false)
    })
  },[])

  return(
    <nav className={scroll?"navbar active":"navbar"}>
      <h2 className='logo'>TransitGuard</h2>

      <ul className='navLinks'>
        <li>Home</li>
        <li>Features</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
