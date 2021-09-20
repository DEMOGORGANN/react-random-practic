import React from "react";
import img1 from './../img/6f359e2db24fc4e08bfd61cf50427139.png'
import img2 from './../img/a561b38768fbe6667854fc00641b25fb.png'
import img3 from './../img/e719e9d93c02a87ba51308ebb0297cdf.png'

import styles from './../styles/FeatyrWorks/FeaturWorkStyle.module.css'

export default function FeaturWorks(props) {

    const DBFeaturWork = [
        { id: 1, title: "Designing Dashboards", urlIMG: img1, date: "2020", typeWork: "Dashboard", body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { id: 2, title: "Vibrant Portraits of 2020", urlIMG: img2, date: "2018", typeWork: "Illustration", body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { id: 3, title: "36 Days of Malayalam type", urlIMG: img3, date: "2018", typeWork: "Typography", body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." }
    ]


    return (
        <div className={styles.wrapWork}>
            {DBFeaturWork.map(item => {
                return (
                    <div className={styles.work} key={item.id}>
                        <img src={item.urlIMG} alt="" />
                        <div className={styles.infoForWork}>
                            <h2>{item.title}</h2>
                            <div className={styles.dateWork}>
                                <strong>{item.date}</strong>
                                <div className={styles.TypeOfWork}>{item.typeWork}</div>
                            </div>
                            <h3>
                                {item.body}
                            </h3>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}