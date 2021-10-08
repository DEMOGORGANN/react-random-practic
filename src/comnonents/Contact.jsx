import React from "react";


import styles from './../styles/ContactStyle/ContactPage.module.css'

function Contact() {
    return (
        <div className={styles.wrapContact}>
            <h1>Телефон:</h1>
            <a href="tel:+0714269021"> 0714269021 </ a>
            <h1>Вк:</h1>
            <a href="https://vk.com/xxxxxxxxxxn">Дмитрий Стребков</ a>
        </div>
    );
}

export default Contact;
