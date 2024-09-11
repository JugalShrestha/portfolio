import React from "react"
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

  return (
    <div ref={ref} className="navbar">
        <div onClick={handleClick(scrollToComponent.homePageRef)} className="logo">
          <img src="/images/logo.webp"/>
        </div>
        <div className="nav-options">
            <div onClick={handleClick(scrollToComponent.homePageRef)} className="nav-option">about</div>
            <div onClick={handleClick(scrollToComponent.workPageRef)} className="nav-option">works</div>
            <div onClick={handleClick(scrollToComponent.contactPageRef)} className="nav-option">contact</div>
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