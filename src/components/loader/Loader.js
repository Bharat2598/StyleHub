import styles from "./Loader.module.css";
import loading from "../../assets/loading.gif";
import { createPortal } from "react-dom";

const Loader = () => {
  return createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src={loading} alt="loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
