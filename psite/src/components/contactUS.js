import React from 'react';
import '../static/contactUS.css';



function ContactUS() {
    return (
    <div className= "ContactUS">
             
    <div className="container">
        <div className="row input-container">
      
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label> 
         
          </div>
          
            <div className="styled-input wide">
              <input type="text" required />
              <label>Email</label> 
            
          </div>
      
         
            <div className="styled-input wide">
              <textarea required defaultValue={""} />
              <label>Message</label>
           
          </div>
    
            <div className="btn-lrg submit-btn">Send Message</div>
          
        </div>
        </div>
        
      </div>
   
    );
  }
  
  export default ContactUS;