import React from "react";
import  rs from './img/rs.jpg';
import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          A <span>Resume</span> that stands out!
        </p>
        <p className={styles.heading}>
          Make your own resume. <span>Resume Maker</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={rs} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
