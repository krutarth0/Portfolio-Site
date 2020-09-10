import React from 'react';
import '../static/contactUS.css';



function ContactUS() {
    return (
    <div className= "main">

      <div className="page-bg">
        <form className="page">
          <label>
            Name::
            <div><input className="text-box"  type="text" name="name" required/></div>     
          </label>
          <label>
            Email::
            <div><input className="text-box"  type="email" name="email" required/></div>     
          </label>
          <label>
            Text Message::
            <div><textarea className="text-area" name="textarea" rows="4" cols="30" required/></div>     
          </label>
          <div><input className="button" type="submit" value="Submit" /></div>        
        </form>

        <div>
       </div>

      </div>

    </div>
   
    );
  }
  
  export default ContactUS;