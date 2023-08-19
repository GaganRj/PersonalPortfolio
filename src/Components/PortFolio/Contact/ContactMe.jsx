import Style from './contactme.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import './button.css'
import { Github, Linkedin } from 'lucide-react';

const ContactMe = () => {
    return (
        <div className={Style.container} id='contactme'>
            <div className={Style.subcontain1}>
                <h1 className={Style.head}>Contact Me</h1>
                <p style={{ color: "white", display: "flex" }}>Don`t be shy! Hit me up <ArrowDownwardIcon style={{ color: "#FF007A" }} /></p>
                <div className={Style.iconcontact}>
                    <MailOutlineIcon style={{ color: "#FF007A" }} />
                    <a href="mailto: Gaganraj844@gmail.com"><span style={{ color: "white" }}>Gaganraj844@gmail.com</span></a>
                </div>
                <div className={Style.iconcontact}>
                    <PhoneOutlinedIcon style={{ color: "#FF007A" }} />
                    <a href="tel:+919148525489"><span style={{ color: "white" }}>+91 9148525489</span></a>
                </div>
                <a target="blank" href='https://drive.google.com/file/d/1dlFbQt7W78O7yyYFmbh5qnJWWtU74AbO/view?usp=drive_link' >
                    <div className="box">
                        <div className="bt btn-three">
                            <span style={{ color: "white", fontWeight: "600" }}>Download CV</span>
                        </div>
                    </div>
                </a>
                <div className={Style.iconlink}>
                    <br />
                    <a target="blank" href="https://github.com/GaganRj"><Github color="#FF007A" /></a>
                    <a target="blank" href="http://www.linkedin.com/in/gagan-raj-a45579240"><Linkedin color="#FF007A" /></a>
                </div>
            </div>
            <div className={Style.subcontain1}>
            </div>
        </div>
    )
}

export default ContactMe
