import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper"

import {FaFolder} from 'react-icons/fa'
import img35 from '../../src/img/blogger.png'

const Blog = () => {
  return (
    <>
    <div className='blog'>
    <div className='headerr'>
         <div className='header'>
            <h1>Blog</h1>
            <a href="/" className='anchor'>Home <p>/Blog</p></a>
        </div>   
        <div className='header'>
        <img src={img35} alt="setting" className='settingg set' />
        </div>  
        </div>  
     

     
        <div>
        <Swiper
        slidesPerView={3}
        // spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>   <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Economic reform 1991</h1>
              <h6><FaFolder/>    India,Economic,History</h6>
              <p>Economic reform 1991Economic reform 1991 Once a
                famous French poet Victor Hugo said, “ There is no power on e
                arth that can stop an idea whose time has come”.
                There was a time in India when only brands were
                present. Ambassador and Fiat are the only vehicles
                that could be seen on the roads, only
                Doordarshan was telecast on the television. 
                Then India was supposed to be a…
              </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>   <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Best movies for Entrepreneurs</h1>
              <h6><FaFolder/>    Reality,Success,Inspiration,Lessons,Movies</h6>
              <p>Best movies  for Entrepreneurs Movies left
                 a significant impact on society, especially on millennials. 
                 Patriotic movies like URI filled the empathetic emotion for the country and
                  army men. Se fiction from Hollywood like Aven
                  gers, Spiderman gives the emotions to connect with to save the world from…
              </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>   <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Voice Assistants: Friends or Foe</h1>
              <h6><FaFolder/>  Uncategorized</h6>
              <p>
              Voice Assistants: Friends or FoeVoice Assi
              stants: Friends or Foe Iron Man has its own personal
               assistant “J.A.R.V.I.S” as we saw in the many movies of M
               CU (Marvel Cinematic Universe). Generally, his voice assistant 
               “J.A.R.V.I.S” helps Iron man in difficult situations to rescue 
               
              happy by cracking jokes with tony stark like a real friend.… 
             </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>  Web Streaming services, have any censorship?</h1>
              <h6><FaFolder/>Technology,Reality,Popular,India</h6>
              <p>Web Streaming services, have any censorship? W
                eb Streaming Services – Entertainment these days move from
                 70mm large screen to 32-inch family screen to your private scree
                 ns. With the very cheap and easily available internet, these days 
                 allow growing video content streaming services like N
                 
                tc have a growing and emerging market in…
              </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Why We Celebrate Dussehra after Navratri</h1>
              <h6><FaFolder/>    Festival,India</h6>
              <p>Why We Celebrate Dussehra after NavratriDussehra is one of the mo
                st popular festival in India. Since our childhood, we use to celebrat
                e the Dussehra festival days of Navratri. The n
                ine days of Navratri for Durga puja dedicates to each form of the Goddes
                s Durga. The nine Goddess
                 worshipped are Shailputri, Brahmacharini, Chand
                 raghanta, Kushmanda,…
              </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Make WordPress Website Secure</h1>
              <h6><FaFolder/>    WordPress,Website,Beginner,Information</h6>
              <p>Make WordPress Website Secure Use Captcha with Wo
                rdPress login, Contact Form and Comment Form Admin login securit
                y is very important as admin can control all the website form the  What hackers do is they run a 
                script that hits the WordPress Admin login URL i.
                e. www.website-domain.com/wp-admin or
              </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Mobile App: Every hour need</h1>
              <h6><FaFolder/>  Business,Android Application,</h6>
              <p>Every hour need Today we all have got that one essen
                tial thing in our pockets that gives us access to everything acr
                oss the World. Yes! Smartphones are the most used gadget of this 
                time. And for a businessman they could be way more useful and profi
                table than just makin
                g calls. Over the time traditional businesses have shifted to…</p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
            <div className='bllog_content'>
           <div className='vvlog_content'>
              <h1>Online Grocery Delivery Apps</h1>
              <h6><FaFolder/> Business,Android Application,Mobile Application,Mobile Technology,
              Website,E-Commerce,IOS Application,Popular,Grocery</h6>
              <p>why Online Grocery Delivery Portals & Apps are trending 
                Making grocery lists and searching the shelves of supermarkets
                 are long gone.  a smart way to search fo
                r major everyday foodstuff. The basic Math
                 for a successful Online Grocery…
              </p>

              <a href="" className='bblog_read'>READ MORE</a>

           </div>
        </div>
        </SwiperSlide>

        
       
      </Swiper>
      
        </div>
        <div className='footer'>
        <p>
         Copyright ©  <span>Codeholic IT Services PVT.</span>Ltd. All Rights Reserved
        </p>
        </div>
    </div>
    
    </>
  )
}

export default Blog;