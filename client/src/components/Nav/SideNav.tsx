import {getIconComponent, navData} from "@/data/NavData";
import React from "react";
import {BsTwitter} from "react-icons/bs";
import {FiMoreHorizontal} from "react-icons/fi";
import styles from "@/styles/left/SideNav.module.scss";
import {FaFeatherAlt} from "react-icons/fa";
type Props = {};

const SideNav = (props: Props) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.home_twitter}>
        <div>
          <BsTwitter fontSize={24} />
        </div>
      </div>
      <div className={styles.nav_list}>
        {navData.map((item) => {
          let icon;
          if (item.state) {
            icon = getIconComponent(item.icon);
          }
          if (!item.state) {
            icon = getIconComponent(item.icon2);
          }

          return (
            <div
              className={`${styles.list_item} ${
                item.state ? styles.active : ""
              }`}
              key={item.id}
            >
              <span className={styles.icon}>{icon}</span>
              <span className={styles.desc}>{item.head}</span>
            </div>
          );
        })}
        <div className={`${styles.list_item} ${styles.tweet_btn}`}>
          <span className={styles.icon}>
            <FaFeatherAlt fontSize={22} />
          </span>
          <span className={styles.desc}>Tweet</span>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
