import styles from "./HeroSection.module.css";
import LinkButton from "../../../../Components/LinkButton/LinkButton";

const HeroSection = () => {
  return (
    <div className={styles.lgScrBackground}>
      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.headingAndButtonContainer}>
            <h3>
              Life isn't all sunshine and rainbows.
              <br />
              Our <span className={styles.icedTeaTag}>ICED TEAS</span> are.
            </h3>
            <LinkButton className={styles.shopNowButton}>SHOP NOW!</LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
