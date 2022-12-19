import React from 'react'
import './Hero.css'
import cngicon from '../../img/cngicon.svg'
import herobg from '../../img/baan.png'

export default function Hero() {
  return (
    <div>
      <div className='container d-flex marginTB'>
        <div className='text-start my-auto '>
         <h1 className='fw-bold text-theme'>Voice Changer and Modifier</h1>
         <p>Turn your voice into different pitches automatically. It's funny and cool!</p>
         <button className='btn bg-theme px-5 rounded-pill'>
            <img src={cngicon} className="me-3" height='30px' width='30px' alt=""/>
         Change Voice Now
         </button>
        </div>
        <div className='my-5 '>
        <img src={herobg} className='' height="100%" width="100%" alt=""/>
        </div>
      </div>
    </div>
  )
}
