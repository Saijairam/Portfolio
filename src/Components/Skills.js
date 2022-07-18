import React from 'react';

import Navbar from './Navbar.js';

function Skills() {
  return (
    <div className='skills-page'>
        <Navbar/>
        {/* Skillspage */}
        <div className='container-fluid skills'>
            <h1 className='pt-2 text-center'>Skills</h1>
            <p className='p-2 text-center'>My skills in web development are classified into Frontend and Backend Technology.</p>
            <div className='frontend container'>
                <>
                  <p className='name'>Frontend &rarr;
                  <span className='first-ball'></span>
                  <span className='second-ball'></span>
                  <span className='third-ball'></span>
                  </p>
                </>
                <div className='basic-lang'>
                   <div className='card-type'>
                       <a href='https://www.w3schools.com/html/' target='_blank' className='doc'>HTML</a>
                   </div>&rarr;
                   <div className='card-type'>
                   <a href='https://devdocs.io/css/' target='_blank' className='doc'>CSS</a> 
                   </div>&rarr;
                   <div className='card-type'>
                   <a href='https://devdocs.io/javascript/' target='_blank' className='doc'>JS</a>
                   </div>
                </div>
                <div className='basic-lang'>
                <div className='card-type'>
                <a href='https://getbootstrap.com/docs/4.1/getting-started/introduction/' target='_blank' className='doc'> Bootstrap</a>
                   </div>&rarr;
                   <div className='card-type'>
                   <a href='https://reactjs.org/docs/getting-started.html' target='_blank' className='doc'>ReactJS</a> 
                   </div>&rarr;
                   <div className='card-type'>  
                   <a href='https://nextjs.org/docs' target='_blank' className='doc'>NextJS</a>
                   </div>
                </div>
            </div>
            <div className='backend container'>
               <>
                  <p className='name'>Backend &rarr;
                  <span className='first-ball'></span>
                  <span className='second-ball'></span>
                  <span className='third-ball'></span>
                  </p>
               </>
               <div className='basic-lang'>
                   <div className='card-type'>
                      NodeJS
                   </div>&rarr;
                   <div className='card-type'>
                       ExpressJS
                   </div>&rarr;
                   <div className='card-type'>
                       PHP
                   </div>
                </div>
                <div className='basic-lang'>
                   <div className='card-type'>
                      MYSQL
                   </div>&rarr;
                   <div className='card-type'>
                      MongoDB
                   </div>
                   {/* <div className='card-type'>
                       *
                   </div> */}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Skills