const ContactPage = () => {
    
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

  return (
    <div className='page' id='contact-page'>
        <div className="social-links">
            <a rel="noreferrer" target="_blank" href="https://github.com/JugalShrestha" className="social-link">github</a>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/jugal_baucha/" className="social-link">instagram</a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/jugal-shrestha-8870b8226/" className="social-link">linkedIn</a>
        </div>
        <form onSubmit={handleSubmit} action="https://formspree.io/f/xaykbdoj" method="POST">
            <input required autoComplete="on" type="text" name="name" placeholder="name:" id="name" />
            <input required autoComplete="on" type="text" name="email" placeholder="email:" id="email" />
            <textarea required placeholder="write your message here!" name="message" id="email-message"></textarea>
            <button type="submit">Send</button>
        </form>
    </div>
  )
}

export default ContactPage