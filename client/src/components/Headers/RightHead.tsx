import React from "react";
import styles from "@/styles/right/RightHead.module.scss";
import {FiSearch} from "react-icons/fi";
type Props = {};

const RightHead = (props: Props) => {
  return (
    <nav className={styles.head_block}>
      <div className={styles.search_block}>
        <div>
          <FiSearch />
        </div>
        <input type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default RightHead;
