import React from "react";
import avatar from './../img/w5JLZ7E8FyA.png';
import InfoElement from "./InfoElement";

import styles from './../styles/HeaderResume/HeaderResume.module.css'
// import style from './styles/App.module/App.module.css'

export default function HeaderResume() {
    return (
        <div className={styles.HeaderWrap} >
            <div className={styles.wrapElem}>
                <InfoElement />
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
            </div>
        </div>
    );
}

