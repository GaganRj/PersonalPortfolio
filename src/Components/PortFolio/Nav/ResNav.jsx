import { FaBars, FaTimes } from "react-icons/fa";
import { Box } from "@mui/material";
import { useRef } from "react";
import './resnav.css'
import Style from './navhome.module.css'



const ResNav = () => {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <header>
        <span className="image-container">
          <div className={Style.logo} style={{ userSelect: "none" }}>
            <p className={Style.logohead}><h3>G</h3></p>
            <p className={Style.logosub}>agan</p>
            <p className={Style.logohead}><h3>R</h3></p>
            <p className={Style.logosub}>aj</p>
          </div>
        </span>
        <nav ref={navRef}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 0 },
            }}
            noValidate
            autoComplete="off"
          >
          </Box>
          <a href='#home' className='page-scroll' onClick={showNavbar}>HOME</a>
          <a href="#aboutme" className='page-scroll' onClick={showNavbar}>ABOUT</a>
          <a href="#techstack" className='page-scroll' onClick={showNavbar}>TECHSTACK</a>
          <a href="#mywork" className='page-scroll' onClick={showNavbar}>MYWORKS</a>
          <a href="#contactme" className='page-scroll' onClick={showNavbar}>CONTACT</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>

        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  )
}

export default ResNav
