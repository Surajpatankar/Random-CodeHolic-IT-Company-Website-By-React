import React from 'react'
import imgs from '../../src/img/cccc.png'
import {FaMailBulk,FaMobile, FaMapMarkerAlt} from 'react-icons/fa'
import Map from './Map'


const Contact = () => {
  return (
    <div className='contact'>
        <div className='headerr'>
         <div className='header'>
            <h1>Contact</h1>
            <a href="/" className='anchor'>Home <p>/Contact</p></a>
        </div>   
        <div className='header'>
        <img src={imgs} alt="setting" className='settingg call' />
        </div>  
        </div> 



         <div className='contact_heading'>
            <h1>Get In Touch</h1>
            <p>We are a group of YOUNG, BOLD & CREATIVE folks full of ideas and 
              visions which we bring to LIFE every single day & night.</p>
            
         </div>

         <div className="contact_page">
                   <div className="contact_info1">
                    <form >
                          <p>Name </p>
                          <input type="text" name='name' placeholder='Name' pattern='[a-z && A-Z]*' />  
                          <br />
                          <p>Number </p>
                          <input type="text" pattern='[0-9]*' inputMode='numeric ' name='Number' placeholder='Number' />  
                          <br />
                          <p>Email </p>
                          <input type="text" name='email' placeholder='Email' />  
                          <br />
                          <p>Subject </p>
                          <input type="text" name='name' placeholder='Subject' />  
                          <br />
                          <p>Message</p>
                           <textarea name="name"  cols="30" rows="10" placeholder='Type here'></textarea>
                        <input type="Submit" className='submit' />
                      
                    </form> 
                    
                  
                
                 </div>
                 <div className="contact_info">
                        <div className='locate'>
                            <h1>Location</h1>
                             <p><FaMobile className='iconss'/> 0761 403 8442</p>
                             <p className='gmail'><FaMailBulk className='iconss'/> hello@codeholic.in</p>
                             <p><FaMapMarkerAlt className='iconss'/> 3rd Floor, Baza Plaza Building,
                                Next to Global Hospital, Ukhri Rd,
                                Shatabdipuram Phase 1, Jabalpur,
                                Madhya Pradesh 482002</p>
                      

                        </div>
                  
                 </div>

         </div>
         <div className='map'>
               <Map />
         </div>
         <div className='footer'>
        <p>
         Copyright ©  <span>Codeholic IT Services PVT.</span>Ltd. All Rights Reserved
        </p>
        </div>

    </div>
  )
}

export default Contact;