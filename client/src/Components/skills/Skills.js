import React from 'react'
import "./skills.css" 
import Frontend from './Frontend'  
// import Backend from './Backend'
import 'boxicons'



const Skills = () => {
  return (
    
   <div className='allcontent'> 
    <section className='skills_section' id='skills '>
    
    <h2 className='skill'>Skills</h2>
    <span className='tech'>My Technical level</span>

    <div className='table'>
     
     
     <Frontend />
     
     {/* <Backend /> */}
     </div>
     </section> 
     </div>
    
    
  )
}

export default Skills
