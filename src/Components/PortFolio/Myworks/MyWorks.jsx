import Style from './mywork.module.css'
import { Myworks } from './data'
import './button.css'

const MyWorks = () => {
    return (
        <div className={Style.container}  id='mywork'>
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
