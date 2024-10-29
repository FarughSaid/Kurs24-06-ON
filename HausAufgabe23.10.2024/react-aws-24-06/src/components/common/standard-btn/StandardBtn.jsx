import styles from "./StandardBtn.module.css";

function StandardBtn({ children, myOnClick }) {
  return (
    <button onClick={myOnClick} className={styles.btnContainer}>
      {children}
    </button>
  );
}

export default StandardBtn;
