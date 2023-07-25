import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className='slideshow'>
              <div className='slideview'>
                <h1> Happy Client Says </h1>
                <h6>One of the best I've ever heard</h6>
                <br/>
                <br/>
                <h2>Tim Cook</h2>
            </div>
            </div>
           </SwiperSlide>

           <SwiperSlide>
           <div className='slideshow'>
              <div className='slideview'>
                <h6>I speak for the trolley district when I tell you h

                  ow pleased we are with the web site you designed for us.
                   The district needed a site that addressed varied aspects of our operation. You have met those needs and then some! We have had nothing but rave comments about the site from those who are closest to it and rely on it the most. I personally want to thank you and your staff for their patience and diligence in prom
                  ptly meeting each of our requests for the site during its development.</h6>
                <br/>
                <br/>
                <h2>Tim Cook</h2>
            </div>
            </div>
           </SwiperSlide>

           <SwiperSlide>
           <div className='slideshow'>
              <div className='slideview'>
                <h6>With Thrive’s help, we were able to increase the 
                  functionality of our website dramatically while cutt
                  ing our costs. Our website is much more easy to use, 
                  as tons of more features than before and is incredibly e
                  asy to maintain. We could not be more h
                  ppy with our new website! Thanks Thrive!</h6>
                <br/>
                <br/>
                <h2>Tim Cook</h2>
            </div>
            </div>
           </SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
          <svg ref={progressCircle}>
            
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
