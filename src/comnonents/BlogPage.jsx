import React from "react";
import { useState } from "react";

import styles from './../styles/BlogPage/BlogPage.module.css'

function BlogPage() {

    const [BDPost, setBDPost] = useState([
        { title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { title: 'UI Interactions of the week', date: "12 Feb 2019", shrtDesk: "Express, Handlebars", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    ])


    return (
        <div className={styles.WrapPageBlog}>
            <h1>Blog</h1>
            {BDPost.map(item => {
                return (
                    <div>
                        <h2>{item.title}</h2>
                        <div>
                            <h3>{item.date}</h3>
                            <h3>{item.shrtDesk}</h3>
                        </div>
                        <span>{item.description}</span>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogPage;
