import { logo } from './data'
import Style from './techstack.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useTranslation } from 'react-i18next';



const Techstack = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: false,
        prevArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])

    const {t} = useTranslation()

    return (
        <div  className={Style.maincontainer} id="techstack" data-aos="fade-up">
            <div className={Style.container}>
                <div className={Style.header}>
                    <h1 className={Style.stackheading}>{t("techstack")}</h1>
                    <div className={Style.techsubcontain}>
                        <Slider {...settings} >

                            {
                                logo.map((img, index) => {
                                    return (
                                        <div key={index}>
                                            <img className={Style.img} src={img.imgUrl} style={{ width: "100px", height: "100px" }} alt='html' />
                                        </div>

                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Techstack
