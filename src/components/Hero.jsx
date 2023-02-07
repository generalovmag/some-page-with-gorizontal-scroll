import styles from "../CSS/hero/hero.module.css";
import imgFirst from "../img/hero/julia.jpg";
import imgSecond from "../img/hero/taisiia-2.jpg";

function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>UT ALIQUIP EX EA COMMODO CONSEQUAT</h1>
        <div className={styles.hero_container + " flex"}>
          <div className={styles.hero_items + " flex"}>
            <div className={styles.first_img_container}>
              <img
                src={imgFirst}
                alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                className={styles.first_img}
              />
            </div>
            <div className={styles.text_block + " flex"}>
              <h3 className={styles.hero_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className={styles.text}>
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
          <div className={styles.hero_items + " flex"}>
            <div className={styles.text_block + " flex"}>
              <h3 className={styles.hero_title}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </h3>
              <p className={styles.text}>
                Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
            <div className={styles.second_img_container}>
              <img
                src={imgSecond}
                alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
                className={styles.second_img}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
