import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

const Experience = () => {
  return (
    <div className='exp'>
     <Navbar/>
     <div className='container-fluid experience mt-2 p-2'>
        <h3 style={{"marginLeft":"15px"}}>&rarr; Experience : </h3>
        <div className='container' id='matter'>
           <p>
            A Project is made by me and it is a group project. This project is done under the guidance of our professor
            Ankit Gupta sir and NRDIA Team. We made a website for the International Conference Meeting using basic languages
            like HTML, CSS and Bootstrap which was accepted by NRDIA Team.<br/>
            I got the Letter of Appreciation from NRDIA Team.
           </p>
        </div>
        <div className='project-link container text-center'>
           <a href='https://pmgsy.nic.in/nrida/' target="_blank" rel="noreferrer" className='btn'>Project</a>   
        </div>
        <div className='container letter text-center mt-3'>
         <a href='https://drive.google.com/file/d/1nQIrLPLMdJKWAXkzToP3o46IxiANppwN/view?usp=sharing' rel="noreferrer" target="_blank" ><img src='https://i.pinimg.com/originals/98/7a/b7/987ab7e229d7ac7c3dec204b365e38eb.png' alt=".." className='img-fluid'/></a>
         <p><b><i>Letter</i></b></p>
        </div>
     </div>
     <Footer/>
    </div>
  )
}

export default Experience