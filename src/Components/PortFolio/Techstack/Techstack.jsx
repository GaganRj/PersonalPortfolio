import { logo } from './data'
import Style from './techstack.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




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

    return (
        <div  className={Style.maincontainer} id="techstack">
            <div className={Style.container}>
                <div className={Style.header}>
                    <h1 className={Style.stackheading}>Teck Stack</h1>
                    <div className="kavki" style={{marginTop:"4%"}}>
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
