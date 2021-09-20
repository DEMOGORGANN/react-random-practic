import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import HeaderResume from "./comnonents/HeaderResume";
import NavBar from "./comnonents/NavBar";
import RecentPosts from './comnonents/RecentPosts'
import FeaturWorks from "./comnonents/FeaturWorks";


import styles from './styles/AppStyles/App.module.css'

function App() {

  const DBRecentPost = [
    { id: 1, title: "Making a design system from scratch", date: "12 Feb 2020  |   Figma, Icon Design", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
    { id: 2, title: "Creating pixel perfect icons in Figma", date: "12 Feb 2020  |   Design, Pattern", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." },
  ]



  return (
    <div>
      <BrowserRouter>
        <NavBar />
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

      </BrowserRouter>

    </div>
  );
}

export default App;
