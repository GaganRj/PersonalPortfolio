import Style from './mywork.module.css'
import { Myworks } from './data'
import './button.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

const MyWorks = () => {

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])

    return (
        <div className={Style.container}  id='mywork' data-aos="fade-up">
            <h1 className={Style.title}>My Works</h1>
            <div className={Style.cardcontainer} style={{ marginTop: "3rem" }}>
                {
                    Myworks.map((data) => {
                        return (
                            <div className={Style.card} key={data.id}>
                                <img src={data.imgUrl} alt="Avatar" className={Style.image} />
                                <div className={Style.overlay}>
                                    <div className={Style.text}>{data.tittle}</div>
                                    <p className={Style.subtitle}>{data.subtittle}</p>
                                    <a target="blank" href={data.href}>
                                        <div className="box-3">
                                            <div className="btn btn-three">
                                                <span>View Site</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default MyWorks
