import './App.css'
import AboutMe from './Components/PortFolio/Aboutme/AboutMe'
import ContactMe from './Components/PortFolio/Contact/ContactMe'
import Home from './Components/PortFolio/HomePage/Home'
import MyWorks from './Components/PortFolio/Myworks/MyWorks'
// import Navhome from './Components/PortFolio/Nav/Navhome'
import ResNav from './Components/PortFolio/Nav/ResNav'
import Techstack from './Components/PortFolio/Techstack/Techstack'

function App() {

  return (
    <>
    {/* <Navhome /> */}
    <ResNav />
    <Home />
    <AboutMe />
    <Techstack />
    <MyWorks />
    <ContactMe />
    </>
  )
}

export default App
