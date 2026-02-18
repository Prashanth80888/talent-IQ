import './Home.css'
import {useState,useEffect} from 'react'

const t=[
 {n:"Parent",txt:"Very safe system"},
 {n:"Driver",txt:"Easy monitoring"},
 {n:"Admin",txt:"Highly effective"},
 {n:"Student",txt:"Smart attendance"}
]

export default function Testimonials(){

 const [i,setI]=useState(0)

 useEffect(()=>{
  const z=setInterval(()=>{
   setI(p=>(p+1)%t.length)
  },3000)
  return()=>clearInterval(z)
 },[])

 return(
  <section className='test'>
   <div className='testCard'>
     <div className='dp'></div>
     <h3>{t[i].n}</h3>
     <p>{t[i].txt}</p>
   </div>
  </section>
 )
}
