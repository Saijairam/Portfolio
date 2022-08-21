import React, { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function Projects() {
  // const [like,setLike] = useState(0);
  // const increaseLike = ()=>{
  //   setLike(like + 1);
  // }
  return (
    <div>
        <Navbar/>
        <div className='container-fluid projects '>
            <div className='intro-projects container'>
                <blockquote> Project is big process in which you can do some innovative ideas to implement particular research on suitable specimen.<br/>
                      It signifies your efforts to show your exact potential whether you are handling problems in an effective way.<br/>
                      It involves your creative ideas and skills to be considered.<br/>
                      Doing project updates your profile at a faster rate.
                </blockquote>
            </div>
            <div className='box-1 mt-3'>
               <div className='card'>
                  <img className='img-fluid card-img-top' src='https://www.tailorbrands.com/wp-content/uploads/2020/11/starbucks-logo-2011.jpg' alt='..'/>
                  <div className='card-title'><h2 className='text-center pt-2'>STARBUCKS CLONE PAGE</h2></div>  
                  <div className='card-body'>
                    <p>This is a Starbucks Clone Page.</p>
                    <a href="https://saijairam.github.io/StarbucksClone/" target="_blank" className="btn btn-primary">View Project</a>
                  </div>
                  {/* <button className='btn bi bi-hand-thumbs-up' onClick={increaseLike}> Likes : {like}</button> */}
                </div>
                <div className='card'>
                  <img className='img-fluid card-img-top' src='https://www.thespruceeats.com/thmb/I_M3fmEbCeNceaPrOP5_xNZ2xko=/3160x2107/filters:fill(auto,1)/vegan-tofu-tikka-masala-recipe-3378484-hero-01-d676687a7b0a4640a55be669cba73095.jpg' alt='..'/>
                  <div className='card-title'>
                    <h2 className='text-center pt-2'>FOOD RECIPE API</h2>
                  </div>
                  <div className='card-body'>
                    <p>This is a Food recipe Website which extracts information from food api.</p>
                    <a href='https://food-recipe-api.vercel.app/' target="_blank" className='btn btn-primary'>View Project</a>
                  </div>
                </div>
              </div>
              <div className='box-1 mt-3'>
                <div className='card'>
                  <img className='img-fluid card-img-top' src='https://static.vecteezy.com/system/resources/previews/003/275/730/original/shopping-bag-store-logo-online-shopping-logo-design-free-vector.jpg' alt='..'/>
                  <div className='card-title'>
                    <h2 className='text-center pt-2'>ECOMMERCE WEBSITE</h2>
                  </div>
                  <div className='card-body'>
                    <p>This is a ecommerce website made with NEXTJS, Sanity and Stripe which are some latest technologies.</p>
                    <a href='https://ecommerce-sanity-stripe-website-c3kepo4lu-saijairam.vercel.app/' target="_blank" className='btn btn-primary'>View Project</a>
                  </div>
                </div>
             </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Projects
