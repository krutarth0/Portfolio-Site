import React from 'react';
import '../static/contactUs.css';
import emailjs from 'emailjs-com';


export default function ContactUS() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('696969', 'template_3xmjfxp', e.target, 'user_yB4FNUm4pdA21nHuyOUTQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return (
    <div className= "main" id="contact_us">

      <div className="page-bg">
        <form className="page" onSubmit={sendEmail}>
          <label>
            Name::
            <div><input className="text-box" placeholder="___________________________________________________________________________" type="text" name="name" required/></div>     
          </label>
          <label>
            Email::
            <div><input className="text-box" placeholder="___________________________________________________________________________" type="email" name="email" required/></div>     
          </label>
          <label>
            Text Message::
            <div><textarea className="text-area" placeholder="___________________________________________________________________________"name="textarea" rows="4" cols="30" required/></div>     
          </label>
          <div><input className="button" type="submit" value="Submit" /></div>        
        </form>

        <div>
       </div>

      </div>

    </div>
   
    );
  }
  
