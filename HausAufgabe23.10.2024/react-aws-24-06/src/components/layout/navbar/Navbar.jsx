import StandardBtn from "../../common/standard-btn/StandardBtn";
import styles from "./Navbar.module.css";

function Navbar() {
  function onClickHello() {
    alert("Hello");
  }

  function onClickHi() {
    alert("Hi");
  }

  return (
    <div className={styles.navbar}>
      <StandardBtn myOnClick={onClickHello}>{"Hello"}</StandardBtn>
      <StandardBtn myOnClick={onClickHi}>{"Hi"}</StandardBtn>
    </div>
  );
}

export default Navbar;
