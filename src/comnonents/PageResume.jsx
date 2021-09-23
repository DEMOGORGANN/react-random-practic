import React from "react";
import RecentPosts from './RecentPosts'
import FeaturWorks from "./FeaturWorks";
import HeaderResume from "./HeaderResume";
import { Link } from "react-router-dom";

import styles from './../styles/PageResumeStyles/PageResume.module.css'

export default function PageResume() {

    const DBRecentPost = [
        { id: 1, title: "Making a design system from scratch", date: "12 Feb 2020  |   Figma, Icon Design", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
        { id: 2, title: "Creating pixel perfect icons in Figma", date: "12 Feb 2020  |   Design, Pattern", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    ]

    return (
        <div>
            <HeaderResume />
            <div className={styles.wrapHead}>
                <div className={styles.linkToAllPost}>
                    <span className={styles.mySelfPosts}>Recent posts </span>
                    <Link to="allPost" className={styles.LinkPost}>View all</Link>
                </div>
                <div className={styles.wrapPostInFull}>
                    {
                        DBRecentPost.map(item => {
                            return <RecentPosts title={item.title} date={item.date} description={item.description} key={item.id} />
                        })
                    }
                </div>
                <div className={styles.titleWork}>
                    <span>Featured works</span>

                    <FeaturWorks />

                </div>
                <footer>Copyright ©2020 All rights reserved </footer>
            </div>
        </div>
    );
}


