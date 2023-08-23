import React, { useState } from 'react'
import Style from './aboutme.module.css'
import { About, Skills, SkillHead } from './data'
import gagan from '../../Images/0Q8A0138.jpg'
import { useEffect } from 'react'
import 'aos/dist/aos.css'
import AOS from 'aos'

const AboutMe = () => {

    const [filter, setFilter] = useState("Skills")

    const filterData = Skills.filter((data) => data.status === filter).map((element) => {
        return element;
      },[]);

      useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
  
    return (
        <div className={Style.container} id='aboutme' data-aos="fade-up">
            <div>
                <img src={gagan} alt='gagan' style={{ width: "500px", height: "500px" }} />
            </div>
            <div style={{ width: "50%" }}>
                {
                    About.map((data) => {
                        return (
                            <div key={data.id}>
                                <h1 className={Style.title}>{data.title}</h1>
                                <p className={Style.desc}>{data.desc}</p>
                            </div>
                        )

                    })
                }
                <div className={Style.skills}>
                    {
                        SkillHead.map((skilllist) => {
                            return (

                                <div  key={skilllist.id}
                                onClick={() => {
                                  setFilter(skilllist.title);
                                }}>
                                    <li className={Style.nav}>{skilllist.title}</li>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    filterData.map((data) => {
                        return (
                            <div className={Style.skillcontainer}>
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
