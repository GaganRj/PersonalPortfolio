import { useTranslation } from 'react-i18next'
import './text.css'

const Textani = () => {

   const {t} = useTranslation()

    return (
        <div className="textcontainer">
            <p>Hello 👋 I`m</p>
            <div className="animation">
                <div className="first"><div style={{color:"#FF007A"}}>{t("greeting")}</div></div>
                <div className="second"><div style={{color:"#FF007A"}}>Web Developer</div></div>
                <div className="third"><div style={{color:"#FF007A"}}>From Bengaluru</div></div>
            </div>
        </div>
    )
}

export default Textani
