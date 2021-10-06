import React, { useContext } from "react";

import styles from './../styles/FeatyrWorks/FeaturWorkStyle.module.css'
import { WorkContext } from "./Context/WorkContext";

export default function FeaturWorks(props) {

    const DBFeaturWork = useContext(WorkContext)
    const DB = DBFeaturWork.filter(item => {
        return item.id < 4;
    })

    return (
        <div className={styles.wrapWork}>
            {DB.map(item => {
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