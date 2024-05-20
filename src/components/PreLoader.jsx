import { useEffect, useState } from "react";
import styles from "./PreLoader.module.css";

export default function PreLoader() {
  const [hideIt, sethideIt] = useState(false);
  useEffect(() => {
    function hide() {
      setTimeout(() => {
        sethideIt(true);
      }, "2000");
    }
    hide();
  }, []);
  return (
    <div className={hideIt ? `${styles.hide}` : `${styles.preloader}`}>
      <div className={styles.left}>
        <h1> The Recipe</h1>
      </div>
      <div className={styles.right}>
        <h1> Book</h1>
      </div>
    </div>
  );
}
