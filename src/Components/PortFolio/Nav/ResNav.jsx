import { FaBars, FaTimes } from "react-icons/fa";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import './resnav.css'
import Style from './navhome.module.css'
import { LanguagesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import german from '../../../assets/flag/germany.png'
import england from '../../../assets/flag/england.png'
import spain from '../../../assets/flag/spain.png'



const ResNav = () => {

  const navRef = useRef();

  const { i18n, t } = useTranslation()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const currentLang = localStorage.getItem("i18nextLng")

  const [langDisplay, setLangDisplay] = useState(currentLang)

  const languages = [
    { code: "en", lang: "English", img:england },
    { code: "es", lang: "Spanish", img:spain },
    { code: "de-DE", lang: "German", img:german  },
  ]

  const changeLanguage = (data) => {
    i18n.changeLanguage(data)
    localStorage.setItem('selectedLanguage', data); // Store the selected language in local storage
    setLangDisplay(data)

  }
  const details = t("navbar")

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
          {
            details.map((data) => {
              return (
                <a key={data.id} href={data.link} className='page-scroll' onClick={showNavbar}>{data.title}</a>
              )
            })
          }
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <div className="lan-dropdown"  >
          <span style={{ display: "flex", gap: "10px",textTransform:"uppercase" }}><LanguagesIcon /> {langDisplay}</span>
          <div className="dropdown-content">
            {
              languages.map((data) => {
                return (
                  <div className="subcontent" key={data.code} onClick={() => changeLanguage(data.code)}>{data.lang}<img src={data.img} style={{width:"20px"}}/></div>
                )
              })
            }
          </div>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  )
}

export default ResNav
