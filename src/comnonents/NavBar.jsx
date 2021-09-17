import React from "react";
import { Link } from "react-router-dom";


import style from './../styles/NavBarStyles/NavBar.module.css'

export default function NavBar() {


    const weightWindow = document.documentElement.clientWidth;

    return (
        <div className={style.centerWrap}>
            <div className={style.wrapNavBar}>
                {weightWindow > 420
                    ? <nav >
                        <div className={style.wrapLink}>
                            <Link to="/works">Works</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </nav>
                    : <nav className={style.container} onClick={(e) => e.target.classList.toggle(style.change)}>
                        <div className={style.bar1}></div>
                        <div className={style.bar2}></div>
                        <div className={style.bar3}></div>
                    </nav>}
            </div>
        </div>
    );
}


