import React, { useContext } from "react";
import { WorkContext } from "./Context/WorkContext";


import styles from './../styles/WorkPageStyles/WorkPage.module.css'


function WorkPage() {

    const DBWork = useContext(WorkContext)

    return (
        <div className={styles.wrapWorkPage}>
            <h1>Work</h1>
            {DBWork.map(item => {
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
            <footer>Copyright ©2020 All rights reserved </footer>
        </div>
    );
}

export default WorkPage;
