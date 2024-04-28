import Style from './home.module.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import img from '../../Images/0Q8A0138-transformed.png'
import { Github, Linkedin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const {t} = useTranslation()

    return (
        <div className={Style.container} id='home' data-aos="fade-up">
            <div className={Style.content}>
                <div className={Style.imgcont}>
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                <stop id="stop1" stopColor="rgba(255, 81.917, 0, 1)" offset="0%"></stop>
                                <stop id="stop2" stopColor="rgba(251, 168, 31, 1)" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <mask id='mask1'>
                            <path fill="url(#sw-gradient)" d="M27.2,-32.6C34.9,-26,40.5,-17.1,41.3,-8C42,1.2,38.1,10.4,32.8,18.3C27.5,26.2,20.9,32.7,13,35.4C5.2,38.1,-4,37,-12,33.8C-20,30.5,-27,25,-31.9,17.8C-36.8,10.6,-39.6,1.6,-38,-6.6C-36.5,-14.8,-30.6,-22.1,-23.5,-28.7C-16.4,-35.4,-8.2,-41.5,0.8,-42.4C9.8,-43.4,19.6,-39.2,27.2,-32.6Z" width="00%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }}></path>
                        </mask>
                        <g mask='url(#mask1)'><path fill="url(#sw-gradient)" d="M27.2,-32.6C34.9,-26,40.5,-17.1,41.3,-8C42,1.2,38.1,10.4,32.8,18.3C27.5,26.2,20.9,32.7,13,35.4C5.2,38.1,-4,37,-12,33.8C-20,30.5,-27,25,-31.9,17.8C-36.8,10.6,-39.6,1.6,-38,-6.6C-36.5,-14.8,-30.6,-22.1,-23.5,-28.7C-16.4,-35.4,-8.2,-41.5,0.8,-42.4C9.8,-43.4,19.6,-39.2,27.2,-32.6Z" width="100%" height="100%" transform="translate(50 50)" strokeWidth="0" style={{ transition: 'all 0.3s ease 0s' }}></path>
                            <image href={img} x="5" y="-10" width="100" height="100" /></g>
                    </svg>


                </div>

                <div className={Style.headcont}>
                    <div className={Style.headcont1}>{t("homeh1")}</div>
                    <span className={Style.headcont1}>{t("homeiam")} <span style={{color:"#FBA81F"}}>Gaganraj</span></span>
                    <div className={Style.subcont}>{t("homecontent")}</div>
                    <div className={Style.iconlink}>
                        <br />
                        <a target="blank" href="https://github.com/GaganRj"><Github color="#FF007A" /></a>
                        <a target="blank" href="http://www.linkedin.com/in/gagan-raj-a45579240"><Linkedin color="#FF007A" /></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home
