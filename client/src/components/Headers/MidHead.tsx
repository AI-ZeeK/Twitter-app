import React from "react";
import styles from "@/styles/mid/MidHead.module.scss";
type Props = {};

const MidHead = (props: Props) => {
  return (
    <nav className={`${styles.head_block}`}>
      <div className={`${styles.head_top}`}>
        <h3>Home</h3>
      </div>
      <div className={`${styles.head_bottom}`}>
        <div className={`${styles.head_nav}`}>For You</div>
        <div className={`${styles.head_nav}`}>Following</div>
      </div>
    </nav>
  );
};

export default MidHead;
