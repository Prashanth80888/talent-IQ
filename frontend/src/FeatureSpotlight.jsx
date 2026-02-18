import './Home.css'
import {useState,useEffect} from 'react'
import {ScanFace,MapPin,Bell,AlertTriangle,LayoutDashboard} from 'lucide-react'

const data=[
 {icon:<ScanFace size={60}/>,t:"Face Recognition",d:"AI Attendance"},
 {icon:<MapPin size={60}/>,t:"GPS Tracking",d:"Live Bus Location"},
 {icon:<Bell size={60}/>,t:"Parent Alerts",d:"Instant SMS"},
 {icon:<AlertTriangle size={60}/>,t:"Emergency Button",d:"Immediate Alert"},
 {icon:<LayoutDashboard size={60}/>,t:"Admin Panel",d:"Monitoring"}
]

export default function FeatureSpotlight(){

 const [i,setI]=useState(0)

 useEffect(()=>{
  const x=setInterval(()=>{
   setI(p=>(p+1)%data.length)
  },3000)
  return()=>clearInterval(x)
 },[])

 return(
  <section className='spotlight'>
    <div className='spotBox'>
      {data[i].icon}
      <h2>{data[i].t}</h2>
      <p>{data[i].d}</p>
      <div className='progress'></div>
    </div>
  </section>
 )
}
