import React from "react";
import styles from "@/styles/mid/Post.module.scss";
import {GoFileMedia} from "react-icons/go";
import {HiOutlineGif} from "react-icons/hi2";
import {createPostOptions, getIconComponent} from "@/data/NavData";
type Props = {};

const Post = (props: Props) => {
  return (
    <div className={`${styles.create_post_block}`}>
      <div className={`${styles.image_box}`}>
        {" "}
        <img src="/profileDummy.jpg" alt="" />
      </div>
      <div className={styles.post_box}>
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="What is happening?"
        ></textarea>
        <div className={styles.line_through} />
        <div className={`${styles.post_options}`}>
          <div className={`${styles.media_post}`}>
            {createPostOptions.map((option) => {
              const icon = getIconComponent(option.icon);

              return (
                <div key={option.id} className={styles.media}>
                  {icon}
                </div>
              );
            })}
          </div>
          <div className={styles.tweet_btn}>
            <button className={styles.btn}>Tweet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
