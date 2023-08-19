import { nav } from './data'
import Style from './navhome.module.css'

const Navhome = () => {
    return (
            <div className={Style.container} id='home'>
                <nav className={Style.navhead}>
                    <div className={Style.logo} style={{userSelect:"none"}}>
                        <p className={Style.logohead}><h3>G</h3></p>
                        <p className={Style.logosub}>agan</p>
                        <p className={Style.logohead}><h3>R</h3></p>
                        <p className={Style.logosub}>aj</p>
                    </div>
                    <div className={Style.subcontain}>
                        {
                            nav.map((data) => {
                                return (
                                    <ul className={Style.navcontainer} key={data.id}>
                                        <li className={Style.nav}>{data.tittle}</li>
                                    </ul>
                                )
                            })}
                    </div>
                </nav>
            </div>
    )
}

export default Navhome
