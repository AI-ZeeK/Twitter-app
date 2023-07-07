import React from "react";
import styles from "@/styles/mid/MidHead.module.scss";
import {homeNav} from "@/data/NavData";
type Props = {};

const MidHead = (props: Props) => {
  return (
    <nav className={`${styles.head_block}`}>
      <div className={`${styles.head_top}`}>
        <h3>Home</h3>
      </div>
      <div className={`${styles.head_bottom}`}>
        {homeNav.map((item) => (
          <div
            key={item.id}
            className={`${styles.head_nav} ${item.state ? styles.active : ""}`}
          >
            {item.head}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MidHead;
