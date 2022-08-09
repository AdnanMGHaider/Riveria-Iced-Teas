import styles from "./MobileNavBar.module.css";
import ExitCrossIcon from "../../Assets/SVGComponents/ExitCrossIcon";

const MobileNavBar = ({ toggle, mobileNavBarIsOpen }) => {
  return (
    <aside
      onClick={toggle}
      className={`${styles.componentContainer} ${
        mobileNavBarIsOpen && styles.opened
      }`}
    >
      <ExitCrossIcon onClick={toggle} className={styles.exitCrossIcon} />
      <ul className={styles.menuItemsWrapper}>
        <li onClick={toggle} className={styles.menuItem}>
          ABOUT US
        </li>
        <li onClick={toggle} className={styles.menuItem}>
          OUR TEAS
        </li>
        <li onClick={toggle} className={styles.menuItem}>
          TESTIMONIALS
        </li>
        <li onClick={toggle} className={styles.menuItem}>
          LOCATIONS
        </li>
      </ul>
    </aside>
  );
};

export default MobileNavBar;
