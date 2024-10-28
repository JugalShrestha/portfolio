import HeroPage from "./assets/pages/HeroPage"
import Navbar from "./assets/components/Navbar"
import { useEffect, useRef, useState } from "react"
import Loading from "./assets/components/Loading"
import ProjectPage from "./assets/pages/ProjectPage"
import ContactPage from "./assets/pages/ContactPage"
import AboutSection from "./assets/components/AboutSection"

const App = () => {

  const homePageRef = useRef(null);
  const workPageRef = useRef(null);
  const contactPageRef = useRef(null);
  const aboutPageRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>setIsLoading(false),100)
  },[])

  return (
    <>
    {isLoading ? 
      <Loading/>
      :
      <>
        <Navbar scrollToComponent={{homePageRef,workPageRef,contactPageRef,aboutPageRef}}/>
        <HeroPage ref={homePageRef}/>
        <ProjectPage ref={workPageRef}/>
        <AboutSection ref={aboutPageRef}/>
        <ContactPage ref={contactPageRef}/>
      </>
     }
    </>
  )
}

export default App