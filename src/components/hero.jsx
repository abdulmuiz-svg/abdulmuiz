import React from 'react'
import "../hero.css";

import { AiFillAppstore } from "react-icons/ai";
import { LiaSmsSolid } from "react-icons/lia";
import { FaThumbsUp } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";





const Hero = () => {
  return (
    <div>
      <section className='me'>
    <div className='hero-wrapper'>
      <header className='navbar'>
      <nav className='logo'>
      
          <div className='logo'>
            <span className='logo-icon'></span>
            <h2>XTRA<p>business</p></h2>
        </div>
        </nav>
        
        
          
          <nav className='nav-links'>
          <a href='#'>home</a>
          <a href='#'>about </a>
          <a href="#">service</a>
          <a href="#">blog</a>
          <a href="">pages</a>
          <a href="#">contact</a>
          </nav>
          
      

        <button className='name'>FREE CONSULTAION</button>
      
      </header>
      </div>



      <section className='hero'>
        <div className='hero-content'>
              <h4 className='roar'>WE ARE EXPERET TEAMS</h4>
        <h1>We Creates products</h1>
        <h1>That makes people lives </h1>
        <h1>Easier and Better</h1>
        </div>
        </section>
        


      <button className='goat'>How it works?</button>
      <a href='#'>Read full line story</a>
      </section>
    
    <section className='service-section'>
      <div className='service-highlights'>

      <box> <h4>OUR SRVICE</h4>

       <h2>We will </h2>
        <h2>help your</h2>
        <h2>business</h2>
        <h2>growing</h2>
        </box>

       

      </div>
  
    <div className='service-card'>
 <LiaSmsSolid size={60} color='green' />


      <h4>SOCIAL MARKETING</h4>
      <h2>social marketing </h2>
      <h>is an approaxch</h>

      <h>used to develop</h>
      <h>activities aimed</h>
      

    </div>
    <div className='road'>
      <FcBusinessman size={60} color='green' style={{display :'flex',}}/>


      <h4>business ideas</h4>
      <h>Based on clients needs</h>
      <h>we will provide some</h>
      <h>good business solutions</h>
    </div>
    <div className='redd'>
      <FaThumbsUp size={60} color='blue' />

      <h4>Development</h4>
      <h>creating your own</h>
      <h>was never that</h>
      <h>easy. Come and check</h>
      <h2>it out</h2>
    </div>
    </section>
     <section className='hero1'>
        <div className='hero-content2'>
          <h4 className='roar'>ABOUT OUR COMPANY</h4>
        <h1>We Are Team Of Experts</h1>
        <h1>People with creativity ideas </h1>
        
        </div>
        
<div className='heo2'>
  <h2>as an example, lets take the content marketing process, its</h2>
  <h2>process you will find in every marketing department out there</h2>
</div>
</section>
    </div>
  )
}

export default Hero
