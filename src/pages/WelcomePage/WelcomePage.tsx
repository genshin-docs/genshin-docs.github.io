import React from 'react';
import styles from './WelcomePage.module.scss';
import Test from "../Test/Test";

const WelcomePage = () => {

  return(
    <div className={styles.wrapper}>
      <div className={styles.block}>
        Некоторая информация может являться не точной, либо недосказанной и будет улучшаться со временем
      </div>

      <Test page={{ doc: "welcome.md" }} />
    </div>
  )
};

export default WelcomePage;