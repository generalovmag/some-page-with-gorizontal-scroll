import React, { useState } from "react";
import styles from "../CSS/slider/slider.module.css";
import imgFirst from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-1.jpg";
import imgSecond from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-2.jpg";
import imgThird from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-3.jpg";
import imgFourth from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-4.jpg";
import imgFifth from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-5.jpg";
import imgSixth from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-6.jpg";
import imgSeventh from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-7.jpg";
import imgEighth from "../img/slider/andres-vera-CmmYT6Mm948-unsplash-8.jpg";

import { enableBodyScroll } from "body-scroll-lock";

function Slider({ refList, setScrollable }) {
  const [scrollToRight, setLeftScroll] = useState(true);
  const [scrollToLeft, setRightScroll] = useState(false);

  const handleScroll = (e) => {
    const right =
      Math.abs(
        e.target.scrollWidth - e.target.scrollLeft - e.target.clientWidth
      ) < 2;
    const left = Math.abs(e.target.scrollLeft) < 2;

    if (scrollToRight) {
      if (right) {
        setLeftScroll(false);
        setRightScroll(true);
        enableBodyScroll(refList);
        setScrollable(false)
      }
    }
    if (scrollToLeft) {
      if (left) {
        setLeftScroll(true);
        setRightScroll(false);
        enableBodyScroll(refList);
        setScrollable(false)
      }
    }
  };

  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.title}>Lorem ipsum dolor sit amet</h2>
      </div>
      <div className={styles.slider_container + " flex"}>
        <div
          className={styles.img_items + " flex"}
          ref={refList}
          onScroll={handleScroll}
        >
          <div className={styles.img_item}>
            <img src={imgFirst} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgSecond} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgThird} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgFourth} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgFifth} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgSixth} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgSeventh} alt="" className={styles.img} />
          </div>
          <div className={styles.img_item}>
            <img src={imgEighth} alt="" className={styles.img} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
