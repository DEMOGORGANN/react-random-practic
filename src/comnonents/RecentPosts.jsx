import React from "react";


import styles from './../styles/RecentPosts/RecentPostsStyles.module.css'

export default function RecentPosts({ title, date, description }) {
    return (
        <div className={styles.WrapRecentPosts}>
            <div className={styles.TitleStyle}>{title}f</div>
            <div className={styles.dateRecentPost}>{date}</div>
            <div className={styles.descriptionRecentPost}>{description}</div>
        </div>
    );
}
