import Style from './mywork.module.css'
// import { Myworks } from './data'
import './button.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const MyWorks = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const { t } = useTranslation();

    const myWorksData = t("myproject");

    const [readMore, setReadMore] = useState({});

    const toggleReadMore = (id) => {
        setReadMore(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    return (
        <div className={Style.container} id='mywork' data-aos="fade-up">
            <h1 className={Style.title}>{t("mywork")}</h1>
            <div className={Style.cardcontainer} style={{ marginTop: "3rem" }}>
                {myWorksData.map((data) => (
                    <div className={Style.card} key={data.id}>
                        <img src={data.imgUrl} alt="Avatar" className={Style.image} />
                        <div className={Style.overlay}>
                            <div className={Style.text}>{data.tittle}</div>
                            <p className={Style.subtitle}>
                                {readMore[data.id] ?
                                    data.subtittle :
                                    `${data.subtittle.substring(0, 100)}.....`}
                                <span className={Style.reml} onClick={() => toggleReadMore(data.id)}>
                                    {readMore[data.id] ? 'Show less' : 'Read more'}
                                </span>
                            </p>
                            <a target="_blank" rel="noopener noreferrer" href={data.href}>
                                <div className="box-3">
                                    <div className="btn btn-three">
                                        <span>{t("viewsite")}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyWorks;