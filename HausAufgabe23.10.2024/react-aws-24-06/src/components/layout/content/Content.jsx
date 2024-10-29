import StandardBtn from "../../common/standard-btn/StandardBtn";
import styles from "./Content.module.css";

function Content({ children }) {
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <StandardBtn />
    </div>
  );
}

export default Content;
