import React from "react";
import MyButton from "./UI/MyButton";

import styles from './../styles/InfoElement/InfoElementStyle.module.css'

export default function InfoElement() {
    return (
        <div className={styles.infoResume}>
            <h1>Hi, I am John,<br />
                Creative Technologist</h1>
            <span>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</span>
            <MyButton>Download Resume</MyButton>
        </div>
    );
}

