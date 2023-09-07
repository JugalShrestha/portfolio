import React,{ useEffect, useState } from "react"
import PropTypes from "prop-types"

const Navbar = React.forwardRef(({scrollToComponent},ref) => {
  const handleClick = (componentRef) => {
    return () => {
      // Check if componentRef is defined before calling scrollIntoView
      if (componentRef && componentRef.current) {
        componentRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  const handleDarkMode = () =>{
    setDarkMode(!isDarkMode);
    if(isDarkMode)
    {
      document.documentElement.style.setProperty('--p1-color', '#0D0D0D');
      document.documentElement.style.setProperty('--p2-color', '#262626');
      document.documentElement.style.setProperty('--s1-color', '#F2F2F2');
      document.documentElement.style.setProperty('--s2-color', '#D9D9D9');
    }
    else
    {
      document.documentElement.style.setProperty('--s1-color', '#0D0D0D');
      document.documentElement.style.setProperty('--s2-color', '#262626');
      document.documentElement.style.setProperty('--p1-color', '#F2F2F2');
      document.documentElement.style.setProperty('--p2-color', '#D9D9D9');
    }
  }

  useEffect(()=>{

    let isScrolling = false;

    const checkScroll = () => {
      if (!isScrolling) {
        // Add a buffer of a few pixels around 99 scrollY
        if (window.scrollY >= 200) {
          setScrolled(true);
        }
        else {
          setScrolled(false);
        }
        isScrolling = true;
        setTimeout(() => {
          isScrolling = false;
        }, 100);
      }
    };

    window.addEventListener('scroll',checkScroll)
    
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };

  },[])

  return (
    <div ref={ref} className={scrolled?"navbar scrolled": "navbar"}>
        <div onClick={handleClick(scrollToComponent.homePageRef)} className="logo">jugal s.</div>
        <div className="nav-options">
            <div onClick={handleClick(scrollToComponent.workPageRef)} className="nav-option">works</div>
            <div onClick={handleClick(scrollToComponent.contactPageRef)} className="nav-option">contact</div>
            <div onClick={handleDarkMode} className="nav-option"> <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 312.999 312.999"><g><path d="M305.6 178.053c-3.2-.8-6.4 0-9.2 2-10.4 8.8-22.4 16-35.6 20.8-12.4 4.8-26 7.2-40.4 7.2-32.4 0-62-13.2-83.2-34.4-21.2-21.2-34.4-50.8-34.4-83.2 0-13.6 2.4-26.8 6.4-38.8 4.4-12.8 10.8-24.4 19.2-34.4 3.6-4.4 2.8-10.8-1.6-14.4-2.8-2-6-2.8-9.2-2-34 9.2-63.6 29.6-84.8 56.8-20.4 26.8-32.8 60-32.8 96.4 0 43.6 17.6 83.2 46.4 112s68.4 46.4 112 46.4c36.8 0 70.8-12.8 98-34 27.6-21.6 47.6-52.4 56-87.6 2-6-1.2-11.6-6.8-12.8zm-61.2 83.6c-23.2 18.4-52.8 29.6-85.2 29.6-38 0-72.4-15.6-97.2-40.4-24.8-24.8-40.4-59.2-40.4-97.2 0-31.6 10.4-60.4 28.4-83.6 12.4-16 28-29.2 46-38.4-2 4.4-4 8.8-5.6 13.6-5.2 14.4-7.6 29.6-7.6 45.6 0 38 15.6 72.8 40.4 97.6s59.6 40.4 97.6 40.4c16.8 0 32.8-2.8 47.6-8.4 5.2-2 10.4-4 15.2-6.4-9.6 18.4-22.8 34.8-39.2 47.6z" ></path></g></svg></div>    
        </div>
    </div>
  )
})

Navbar.propTypes = {
  scrollToComponent: PropTypes.shape({
    homePageRef: PropTypes.object.isRequired,
    workPageRef: PropTypes.object.isRequired,
    contactPageRef: PropTypes.object.isRequired,
  }).isRequired,

}

Navbar.displayName = "Navbar"

export default Navbar