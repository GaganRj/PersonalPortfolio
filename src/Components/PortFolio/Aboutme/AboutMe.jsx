import { useState } from 'react'
import Style from './aboutme.module.css'
import { Skills } from './data'
import gagan from '../../Images/0Q8A0138.jpg'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useTranslation } from 'react-i18next'

const AboutMe = () => {

    const [filter, setFilter] = useState("Skills")

    const filterData = Skills.filter((data) => data.status === filter).map((element) => {
        return element;
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    const { t } = useTranslation()

    const SkillHead = t("SkillHead")


    console.log(SkillHead)

    return (
        <div className={Style.container} id='aboutme' data-aos="fade-up">
            <div>
                <img className={Style.aboutimg} src={gagan} alt='gagan' />
            </div>
            <div className={Style.aboutskills}>
                {/* {
                    About.map((data) => {
                        return ( */}
                <div>
                    <h1 className={Style.title}>{t("about")}</h1>
                    <p className={Style.desc}>{t("aboutDetail")}</p>
                </div>
                {/* )

                    })
                } */}
                <br />
                <div className={Style.skills}>
                    {
                        SkillHead.map((skilllist) => {
                            return (

                                <div className={Style.dotparent} key={skilllist.id}
                                    onClick={() => {
                                        setFilter(skilllist.value);
                                    }}>
                                    <li className={Style.nav}>{skilllist.title}</li>
                                    <span className={Style.dot}></span>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    filterData.map((data) => {
                        return (
                            <div className={Style.skillcontainer} key={data.id}>
                                <div className={Style.skill}>{data.skill}</div>
                                <div className={Style.about}>{data.technica}</div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    )
}

export default AboutMe
