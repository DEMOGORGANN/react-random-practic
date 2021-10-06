import React from "react";
import { useState } from "react";

import styles from './../styles/BlogPage/BlogPage.module.css'

function BlogPage() {

    const [BDPost] = useState([
        { key: 1, title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { key: 2, title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { key: 3, title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { key: 4, title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    ])


    return (
        <div className={styles.WrapPageBlog}>
            <h1>Blog</h1>
            {BDPost.map(item => {
                return (
                    <div key={item.key} className={styles.wrapPostItems}>
                        <h2>{item.title}</h2>
                        <div className={styles.wrapDateAndDesk}>
                            <h3 className={styles.date}>{item.date}</h3>
                            <div className={styles.per}>|</div>
                            <h3 className={styles.shortDesk}>{item.shrtDesk}</h3>
                        </div>
                        <span>{item.description}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogPage;
