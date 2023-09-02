const ContactPage = () => {
  return (
    <div className='page' id='contact-page'>
        <div className="social-links">
            <a rel="noreferrer" target="_blank" href="https://github.com/JugalShrestha" className="social-link">github</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jugal-shrestha-8870b8226/" className="social-link">linkedIn</a>
        </div>
        <form action="" method="get">
            <input autoComplete="on" type="text" name="name" placeholder="name:" id="name" />
            <input autoComplete="on" type="text" name="email" placeholder="email:" id="email" />
            <textarea placeholder="write your message here!" name="message" id="email-message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default ContactPage