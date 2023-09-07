import { useState } from "react";
import styles from "../../assets/styles/guessMyNumber/GuessMyNumber.module.scss";
function GuessMyNumber() {
  return (
    <>
      <header>
        <h1>Guess My Number!</h1>
        <p className={styles.between}>(Between 1 and 20)</p>
        <button className={`${styles.btn} ${styles.again}`}>Again!</button>
        <div className={styles.number}>?</div>
      </header>
      <main>
        <section className={styles.left}>
          <input type="number" className={styles.guess} />
          <button className={`${styles.btn} ${styles.check}`}>Check!</button>
        </section>
        <section className={styles.right}>
          <p className={styles.message}>Start guessing...</p>
          <p className={styles.label_score}>
            💯 Score: <span className={styles.score}>20</span>
          </p>
          <p className={styles.label_highscore}>
            🥇 Highscore: <span className={styles.highscore}>0</span>
          </p>
        </section>
      </main>
    </>
  );
}

export default GuessMyNumber;
