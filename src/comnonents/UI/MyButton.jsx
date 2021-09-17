import React from "react";

import styles from './../../styles/MyButton/MyButtonStyle.module.css'

export default function MyButton(props) {
    return (
        <button {...props} className={styles.but}>{props.children}</button>
    )
}