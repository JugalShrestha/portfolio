import HeroPage from "./assets/pages/HeroPage"
import Navbar from "./assets/components/Navbar"
import ProjectPage from "./assets/pages/ProjectPage"
import PageHeader from "./assets/components/PageHeader"
import ContactPage from "./assets/pages/ContactPage"
import { useRef } from "react"

const App = () => {

  const homePageRef = useRef(null);
  const workPageRef = useRef(null);
  const contactPageRef = useRef(null);

  return (
    <>
      <Navbar scrollToComponent={{homePageRef,workPageRef,contactPageRef}}/>
      <HeroPage ref={homePageRef}/>
      <PageHeader ref={workPageRef} header="works:"/>
      <ProjectPage />
      <PageHeader ref={contactPageRef} header="contact:"/>
      <ContactPage/>
    </>
  )
}

export default App