import React, { useContext, useRef, useState } from "react";
import "./Contect.css";

import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();



  return (
    <div className="contact-form" id="contact">
   
      <div className="w-left">
        <div className="awesome">
         
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
          <span>Contact me</span>
        </div>
      </div>
   
      <div className="c-right">
        <form ref={form}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
