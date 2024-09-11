import React from "react";
import { motion } from "framer-motion"

const ContactPage = React.forwardRef((props,ref) => {
    
  async function handleSubmit(event) {
    event.preventDefault();

    // Get the form data
    const data = new FormData(event.target);

    // Define the URL where you want to send the form data
    const url = 'https://formspree.io/f/xaykbdoj';

    try {
      // Send a POST request with the form data
      const response = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // If the response is okay, reset the form
        event.target.reset();
        alert('Message sent successfully!');
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          // If there are errors in the response, display them to the user
          alert(responseData.errors.map(error => error.message).join(', '));
        } else {
          alert('There was an error. Please try again.');
        }
      }
    } catch (error) {
      // If there's an error in the fetch operation, show an error message
      alert('There was an error. Please try again.');
    }
  }

   
  const fromLeftVairants = {
    initial:{
        x: 100,
        opacity: 0,
    },
    animation:{
        x: "-50%",
        opacity: 1,
    }
  }
  const fromBottomVairants = {
    initial:{
        y: 100,
        opacity: 0,
    },
    animation:{
        y: 0,
        opacity: 1,
    }
  }

  return (
    <div ref={ref} className='contact-page'>
      <div className="overlay"></div>
      <div className="header">
      <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="text">CONNECT WITH ME</motion.div>
        <div className="line"></div>
      </div>
        <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="social-links">
            <a rel="noreferrer" target="_blank" href="https://github.com/JugalShrestha" className="social-link">github</a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/jugal_baucha/" className="social-link">instagram</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jugal-shrestha-8870b8226/" className="social-link">linkedIn</a>
        </motion.div>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xaykbdoj" method="POST">
            <motion.input variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}}  required autoComplete="on" type="text" name="name" placeholder="name:" id="name" />
            <motion.input variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.3,type:"spring"}}  required autoComplete="on" type="text" name="email" placeholder="email:" id="email" />
            <motion.textarea variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}}  required placeholder="write your message here!" name="message" id="email-message"></motion.textarea>
            <motion.button variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.3,type:"spring"}}  type="submit">Send</motion.button>
        </form>
    </div>
  )
})

ContactPage.displayName="ContactPage";

export default ContactPage