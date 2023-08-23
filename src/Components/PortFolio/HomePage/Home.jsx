import Textani from '../Text/Textani'
import Style from './home.module.css'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

const Home = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])

    return (
        <div className={Style.container} id='home' data-aos="fade-up">
            <div className={Style.content}>
                {/* <div className={Style.desc}>Web Developer</div>
                <div className={Style.textdesign}>Hi, I`m<span className={Style.name}>Gaganraj </span> </div>
                <div className={Style.textdesign}>from Bengaluru</div>  aos/dist/aos.css"*/}
                <Textani />
            </div>
        </div>
    )
}

export default Home
