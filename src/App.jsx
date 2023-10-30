import HeroPage from "./assets/pages/HeroPage"
import Navbar from "./assets/components/Navbar"
import ProjectPage from "./assets/pages/ProjectPage"
import PageHeader from "./assets/components/PageHeader"
import ContactPage from "./assets/pages/ContactPage"
import { useEffect, useRef, useState } from "react"
import Loading from "./assets/components/Loading"

const App = () => {

  const homePageRef = useRef(null);
  const workPageRef = useRef(null);
  const contactPageRef = useRef(null);

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
        <Navbar scrollToComponent={{homePageRef,workPageRef,contactPageRef}}/>
        <HeroPage ref={homePageRef}/>
        <PageHeader ref={workPageRef} header="works:"/>
        <ProjectPage />
        <PageHeader ref={contactPageRef} header="contact:"/>
        <ContactPage/>
      </>
     }
    </>
  )
}

export default App