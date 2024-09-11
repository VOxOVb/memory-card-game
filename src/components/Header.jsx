import Button from "./Button";
import styles from "./Header.module.css";
export default function Header({ status, level, timer, dispatch }) {
  return (
    <header
      className={`${styles.loading} ${status === "start" && styles.start}`}
    >
      <h1>Card Memory Game</h1>
      {status === "loading" && (
        <>
          <p>
            <span>Select the level</span>
            <Button className={level === "easy" ? styles.active : ""}  dispatch={dispatch} handleClickType={"handleSelectLevel"}>easy</Button>
            <Button className={level === "medium" ? styles.active : ""}  dispatch={dispatch} handleClickType={"handleSelectLevel"}>medium</Button>
            <Button className={level === "hard" ? styles.active : ""}  dispatch={dispatch} handleClickType={"handleSelectLevel"}>hard</Button>
          </p>
          {/* <p>
            <span>Select the timer</span>
            <Button className={timer === 3 ? styles.active : ""}  dispatch={dispatch} handleClickType={"handleSelectTimer"}>3:00</Button>
            <Button className={timer === 4 ? styles.active : ""}  dispatch={dispatch} handleClickType={"handleSelectTimer"}>4:00</Button>
            <Button className={timer === 5 ? styles.active : ""}  dispatch={dispatch} handleClickType={"handleSelectTimer"}>5:00</Button>
          </p> */}
          <button
            // disabled={level === "" || timer === 0 ? true : false}
            disabled={level === "" ? true : false}
            onClick={() => dispatch({ type: "start" })}
          >
            <span>Start</span>
          </button>
        </>
      )}
      {/* {status === "start" && (
        <p><span>time:</span></p>
      )} */}
    </header>
  );
}
