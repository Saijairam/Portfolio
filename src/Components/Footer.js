import React from 'react';
import Wave2 from '../Images/wave2.png';
function Footer() {
  return (
    <div className='footer'>
        <div className='wave'>
           <img src={Wave2} alt='..' className='img-fluid'/>
        </div>
        <div className='container-fluid contacts'>
          <div><a href='https://www.instagram.com/jairam_since2003/' target='_blank' style={{color:"#E1306C"}}><i className='bi bi-instagram'></i>Instagram</a></div>
          <div><a href='https://www.linkedin.com/in/kandukuri-saijairam-3823b9219/' target='_blank' style={{color:"blue"}}><i className='bi bi-linkedin'></i>Linkedin</a></div>
          <div><a href='https://github.com/Saijairam' target='_blank' style={{color:"black"}}><i className='bi bi-github'></i>Github</a></div>
        </div>
        <div className='copyright text-center mt-2'>
           <b><p> &copy; 2022,Kandukuri Saijairam</p></b>
        </div>
      </div>
  )
}

export default Footer