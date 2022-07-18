import React from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import User from '../Images/User.jpg'
import Rocket from '../Images/Rocket.png';

// import College from '../Images/College.jpg';
// import IIT from '../Images/BHU.jpg'
function Home() {
  const date = new Date();
  return (
    <div>
      <Navbar/>
      {/* Section1 */}
      <div className='section1 '>
         <div className='container-fluid pt-3  intro'>
           <div className='intro-text'>
             <h1>Hello Everyone!!</h1><h2><i>Let's go into my portfolio..</i><br/>
             {`You are watching my portfolio on ${date.getDate()}-${date.getMonth()+1}- ${date.getFullYear()}`}</h2>  
           </div>
           <div className='blob'>
            <img src={Rocket} className='img-fluid rocket'/> 
            </div>      
         </div>
      </div>
      {/* Section2 */}
      <div className='section2'>
        <div className='container pt-2 user'>
           <div className='details mt-3'>
             <p>
               My name is <b>KANDUKURI SAIJAIRAM</b>. Present, I am studying in Indian Institute of Technology(BHU),Varanasi.<br/>I am working as a Web Developer. I am eager to learn new skills and to develop myself in this developing world.<br/>
               My motto is <b>"There is still glory on other side and Hard Work beats Talent."</b><br/>
               If u have any doubts feel free to contact me. I can solve your doubts upon my strength.
             </p>
           </div>
           {/* <div className='user-image'>
             <img src={User} alt='..User Iamge' className='img-fluid'/>
           </div> */}
        </div>
      </div>
      {/* Section3 */}
      <div className='section3'>
         <div className='container mt-2 pt-2 education'>
            <div className='card' style={{width:'18rem',height:"auto"}}>
                <div className='card-header'>SSC Education - Sun School</div>
                <div className='card-body'>
                   I completed my SSC Education in this school.In this school,I had completed SSC with 10/10 points.
                   And I spend a good and happy life with my parents,teachers and friends. My teachers guidance me for further education.
                </div> 
            </div>
            <div className='card' style={{width:'18rem',height:"auto"}}>
                 {/* <div className='card-img-top'>
                   <img src={College} alt='..' className='img-fluid'/>
                 </div> */}
                <div className='card-header bg-warning'>Higher Secondary Education - Ascent Classes</div>
                <div className='card-body'>
                   I completed my Intermediate Education in this college.In this college,I had completed MPC with 982/1000 marks.And I prepare for JEE-MAINS and JEE-ADVANCE preparation exams.
                   
                   I got 4457 OBC-NCL rank in JEE ADVANCE exam.This rank helps me to get into IIT BHU.
                </div> 
            </div>
            <div className='card' style={{width:'18rem',height:"auto"}}>
            {/* <div className='card-img-top'>
                   <img src={IIT} alt='..' className='img-fluid'/>
                 </div> */}
                <div className='card-header bg-info'>Bachelor of Technology - Indian Institute of Technology(BHU),Varanasi</div>
                <div className='card-body'>
                   Present I am pursuing Civil Engineering,B.Tech. in this college.
                   And I am experiencing new environment and new friends and upgrading new skills. Hope I will lead happy life during graduation.
                </div> 
            </div>
         </div>
      </div>
      
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home