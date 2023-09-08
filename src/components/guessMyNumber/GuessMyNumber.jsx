import { useReducer, useEffect, useState, useRef } from "react";
import styles from "../../assets/styles/guessMyNumber/GuessMyNumber.module.scss";

const initialGuess = {
  score: 20,
  msg: "Start guessing ...",
  statusGuess: false,
};
const reducer = (state, action) => {
  switch (action) {
    case "down":
      return { ...state, score: state.score - 1, msg: "to high", statusGuess: false };
    case "up":
      return { ...state, score: state.score - 1, msg: "to low", statusGuess: false };
    case "true":
      return { ...state, score: state.score, msg: "you win ! current number", statusGuess: true };
    case "false":
      return { ...state, score: state.score - 1, msg: "you lose , try again !", statusGuess: true };
    default:
      return initialGuess;
  }
};

function GuessMyNumber() {
  const guessInput = useRef(null);
  const highScore = useRef(null);
  const body = useRef(null);

  const [number, dispatch] = useReducer(reducer, initialGuess);
  // eslint-disable-next-line no-unused-vars
  const [randomNumber, setRandomNumber] = useState(0);
  useEffect(() => {
    setRandomNumber(() => Math.floor(Math.random() * 21));
  }, []);

  const handleGuess = () => {
    const input = Number(guessInput.current.value);
    if (number.score == 1) {
      body.current.style = "background:#850000";
      dispatch("false");
      return;
    }

    if (input > randomNumber) {
      dispatch("down");
    } else if (input < randomNumber) {
      dispatch("up");
    } else {
      dispatch("true");
      let setHighPoint = highScore.current.innerHTML;
      body.current.style.backgroundColor = "greenyellow";
      if (Number(setHighPoint) > Number(number.score)) return;
      highScore.current.innerHTML = number.score;
    }
  };

  const handleReset = () => {
    body.current.style.backgroundColor = "white";
    setRandomNumber(() => Math.floor(Math.random() * 21));
    dispatch({ ...initialGuess });
  };

  return (
    <div ref={body}>
      <header>
        <h1>Guess My Number!</h1>
        <p className={styles.between}>(Between 0 and 20)</p>
        <button onClick={handleReset} className={`${styles.btn} ${styles.again}`}>
          Again!
        </button>
        <div className={styles.number}>{number.statusGuess ? randomNumber : "?"}</div>
      </header>
      <main>
        <section className={styles.left}>
          <input ref={guessInput} type="number" className={styles.guess} />
          <button onClick={handleGuess} disabled={number.statusGuess} className={`${styles.btn} ${styles.check}`}>
            Check!
          </button>
        </section>
        <section className={styles.right}>
          <p className={styles.message}>{number.msg}</p>
          <p className={styles.label_score}>
            💯 Score: <span className={styles.score}>{number.score}</span>
          </p>
          <p className={styles.label_highscore}>
            🥇 Highscore:
            <span ref={highScore} className={styles.highscore}>
              0
            </span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default GuessMyNumber;
