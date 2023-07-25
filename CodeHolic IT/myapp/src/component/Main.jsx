
import img1 from '../img/logo.png';
import img2 from '../../src/img/logo2.png';
import img3 from '../../src/img/111.png';
import img4 from '../../src/img/222.png';
import img5 from '../../src/img/333.png'
import img6 from '../../src/img/444.png';
import img7 from '../../src/img/samsung.png'
import img8 from '../../src/img/high.png'
import img9 from '../../src/img/latest.png'
import img10 from '../../src/img/native.png'
import img11 from '../../src/img/secure.png'
import img12 from '../../src/img/latestapi.png'
import img13 from '../../src/img/custom.png'
import img14 from '../../src/img/afterback.png'
import img15 from '../../src/img/codeo.jpg';
import img36 from '../../src/img/blue.png'
import img37 from '../../src/img/face.png'
import img38 from '../../src/img/lovee.png'
import img39 from '../../src/img/call.png'




// import Slider from '../../src/component/Slider';
import { NavLink } from 'react-router-dom';
import Countup from 'react-countup';
import { FaHandsHelping,FaClock,FaSuitcase,FaHeart,FaCoffee,FaSmileWink}  from 'react-icons/fa'


const Main = () => {
  return (
    <>
        <div className='navbar' >
          <div>
            <img src={img1} className='img1'/>
          </div>
          <div className='navv'>
               <ul>
                <li><a>
                    <NavLink to={'/'}>HOME</NavLink>
                </a></li>
                <li><a>
                    <NavLink to={'/portfolio'} >PORTFOLIO</NavLink>
                </a></li>
                <li><a>
                    <NavLink to={'/career'}>CAREER</NavLink>
                </a></li>
                <li><a>
                    <NavLink  to={'/blog'}>BLOG</NavLink>
                </a></li>
                <li><a>
                    <NavLink to={'/contact'}>CONTACT</NavLink>
                </a></li>
                 <li><a  className='quick popup'><NavLink to={'/popup'} style={{color:'white'}}>QUICK ENQUIERY</NavLink>
                </a></li>
            </ul>
          </div>
        </div>

         <div className='maincontent'>
            <div className='cont1'>
               <h1>Why You Should<br/>Choose Us?</h1>
               <p>We create the best products which are creating noise in the market. Recently some of our creation got funded Homefans, Foodraju, Kotumb and many more.</p>
               <div className='btn'>
               <a href="/contact" className='contactb'>CONTACT US</a>

               </div>
            </div>
            <div className='cont2'>
              <img src={img2} width={'1250px'} height={'700px'} />
            </div>        
     </div>

     
          <div className='content2'>
            <div className='sec2'>
              <div className="sec3 mdsec1">
                 <div className="sec4">
                  <img src={img3} className='contimg' />
                  <h1>Website Development</h1>
                  <p>We deliver best solutions to fit both your business requirements and budget.
                     Our skills and expertise around this technology is undisput.</p>
                 </div>
              </div>
              <div className="sec3 mdsec">
                 <div className="sec4 ">
                  <img src={img4} className='contimg' />
                  <h1>Mobile  Application</h1>
                  <p>We create customized applications which is scalable for any android devices.
                     We provides application development service globally.</p>
                 </div>
              </div>

              <div className="sec3 mdsec">
                 <div className="sec4 ">
                  <img src={img5} className='contimg' />
                  <h1>Desktop Application</h1>
                  <p>We offer platform specific and cross-platform desktop app development se
                    rvices to help you turn a solid software idea into a market sensation..</p>
                 </div>
              </div>

              <div className="sec3 mdsec">
                 <div className="sec4 ">
                  <img src={img6} className='contimg' />
                  <h1>Speed Optimization</h1>
                  <p>We can help you make your website open up faster by optimizing 
                    your site factors that affect the performance of your website.</p>
                 </div>
              </div>
            </div>
          </div>


         <div className='countup'>

             <div className='counthead'>
             <h1 className='countheader'>
                <Countup start={0} end={200} delay={0}/>+
               </h1>
               <p>Happy Clients</p>
               <FaSmileWink className='font'/>
               
             </div>


             <div className='counthead count'>
             <h1 className='countheader'>
                <Countup start={0} end={350} delay={0}/>+
               </h1>
               <p>Project Submitted</p>
               <FaHandsHelping className='font'/>
             </div>


             <div className='counthead'>
             <h1 className='countheader'>
                <Countup start={0} end={5000} delay={0}/>+
               </h1>
               <p>Working Hours</p>
               <FaClock className='font'/>
             </div>


             <div className='counthead count1 patis'>
             <h1 className='countheader'>
                <Countup start={0} end={5} delay={0}/>+
               </h1>
               <p>Years Of Experience </p>
               <FaSuitcase className='font'/>
             </div>


             <div className='counthead count1 satis'>
             <h1 className='countheader'>
                <Countup start={0} end={100} delay={0}/>%
               </h1>
               <p>Satisfaction</p>
               <FaHeart className='font'/>
             </div>


             <div className='counthead connt1'>
             <h1 className='countheader'>
                <Countup start={0} end={200} delay={0}/>+
               </h1>
               <p>Cups Of Coffee</p>
               < FaCoffee   className='font'/>
             </div>
          </div>


          {/* FEATURED SECTION  */}
          <div className='feature_head'>
            <h1>Get Featured In The App Store</h1>
             <p>We love taking ideas and turning them into real apps. We are passionate, creative,
                 and have <br/> experience developing products as entrepreneurs.</p>
          </div>

          <div className="feature">
             <div className="web_feat left">
               <div className="web_feature">
                     <div className="feautureed1">
                        <h1>High-Performance</h1>
                        <p>We develop high-performance mobile app, as performance is very important.</p>
                    </div>
                    <div className="featureed">
                     <img src={img8} alt="" width={'100px'} height={'100px'} className='featimg'/>    
                    </div>                     
                </div>  
                <div className="web_feature">
                     <div className="feautureed1">
                        <h1>Latest Design/UI</h1>
                        <p>We give your app latest and user friendly design for good impression</p>
                    </div>
                    <div className="featureed ">
                     <img src={img9} alt="" width={'100px'} height={'100px'} className='featimg' />    
                    </div>                     
                </div>  
                <div className="web_feature ">
                     <div className="feautureed1">
                        <h1>Native app</h1>
                        <p>Get 100% compatibility with Native mobile app.</p>
                    </div>
                    <div className="featureed">
                     <img src={img10} alt="" width={'100px'} height={'100px'} className='featimg'/>    
                    </div>                     
                </div>  
            
             </div>
             <div className="web_feat samsung" >
               <img src={img7} width={'450px'} height={'450px'} className='samsunggalaxy'/>

             </div>
             <div className="web_feat right">
              
                <div className="web_feature fafdu">
                    <div className="featureed">
                     <img src={img11} alt="" width={'100px'} height={'100px'} className='featimg'/>    
                    </div>  
                    <div className="feautureed2">
                         <h1>  Secure App</h1>
                        <p>Get 100% compatibility with Native mobile app.</p>
                    </div>
                                       
                </div>  
                <div className="web_feature fafdu">
                    <div className="featureed">
                     <img src={img12} alt="" width={'100px'} height={'100px'} className='featimg'/>    
                    </div>  
                    <div className="feautureed2">
                        <h1>Latest API</h1>
                        <p>We work with latest API’s to build updated mobile app.</p>
                    </div>
                                       
                </div> 
                <div className="web_feature fafdu">
                    <div className="featureed">
                     <img src={img13} alt="" width={'100px'} height={'100px'} className='featimg'/>    
                    </div>  
                    <div className="feautureed2">
                        <h1>Custom Features</h1>
                        <p>We develop custom featured mobile app according to your requirement..</p>
                    </div>
                                       
                </div>       
             </div>
          </div>

          <div className="aftersection">
            <div className="items">
                  <div className='div1'>
                    <h1>Our Team Is Here For Your Pleasure</h1>
                     <p>We understand that not everyone is a web aficionado, that’s why we
                         take complete responsibility of getting your website Up and Running.</p>
                   </div>
                   <div className='div1'>
                       <img src={img14}  className='imgback' />
                   </div>
    
            </div>
          </div>


          {/* ANOTHER SECTION */}
          <div className="sec6">
             <div className="sec7 section6">
                <h1>We love our clients and makes <br/> them happy</h1>
                <p>Codeholic offer a well defined knowledge base assuring clients that you have made the right choice. We seek to build long term relationships with our clients & to partner them in mutual business success. Our goal is to achieve customer satisfaction by striving to expand our capabilities & continuity to heighten the standard of 
                   excellence by completing tasks responsibly and efficiently.</p>
                 <p>Our goal is to achieve customer satisfaction by striving to expand our capabilities & continuity to heighten the standard of excellence by completing tasks responsibly and efficiently.</p>  
             </div>
             <div className="sec8 img15">
                  <img src={img15} width={'560'} height={'550'} className='img155'/>
             </div>

          </div>
          {/* BLUE SECTION */}
          <div className='blue'>
            <h1>Meet Us</h1>
            <p>Let the world know who you are!</p>
          </div>




          {/* Address */}
          <div className='address'>
             <div className="location1">
                 <div className='logus'>
                   <img src={img37} alt="face"  width={'60px'} height={'60px'}/>
                    <h1>Face to face</h1>
                    <p>3rd Floor, Baza Plaza Building,
                       Next to Global Hospital, Ukhri Rd, Shatabdipuram Phase 1, Jabalpur
                      , Madhya Pradesh 482002</p>
                 </div>
               </div>
               <div className="location2">
                 <div className='logus'>
                   <img src={img38} alt="face"  width={'60px'} height={'60px'}/>
                    <h1>We love emails</h1>
                    <p><b>For Job & Internship:</b><br /> hr@codeholic.in, hello@codeholic.inFor Business</p>
                    <p><b>For Business</b><br /> gunjan@codeholic.in, shashank@codeholic.in</p>
                 </div>
               </div>
               <div className="location1 surj">
                 <div className='logus'>
                   <img src={img39} alt="face"  width={'60px'} height={'60px'}/>
                    <h1>Calling is passion</h1>
                    <p>      0761-4038442 <br />
                       (+91) 9926565586   <br />
                       (+91) 9303083033</p>
                 </div>
               </div>

          </div>
          


          <div className='footer'>
        <p>
         Copyright ©  <span>Codeholic IT Services PVT.</span>Ltd. All Rights Reserved
        </p>
        </div>
    </>
    
    )
};

export default Main;