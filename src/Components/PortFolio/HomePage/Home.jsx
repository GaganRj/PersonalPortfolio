import Textani from '../Text/Textani'
import Style from './home.module.css'

const Home = () => {
    return (
        <div className={Style.container} id='home'>
            <div className={Style.content}>
                {/* <div className={Style.desc}>Web Developer</div>
                <div className={Style.textdesign}>Hi, I`m<span className={Style.name}>Gaganraj </span> </div>
                <div className={Style.textdesign}>from Bengaluru</div> */}
                <Textani />
            </div>
        </div>
    )
}

export default Home
