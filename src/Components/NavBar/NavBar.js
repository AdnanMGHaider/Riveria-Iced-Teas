import styles from "./NavBar.module.css";
import Logo from "../../Assets/SVGComponents/Logo";
import HamburgerMenuIcon from "../../Assets/SVGComponents/HamburgerMenuIcon";
import ShoppingCart from "../../Assets/SVGComponents/ShoppingCartIcon";

const NavBar = ({ toggle }) => {
  return (
    <nav className={styles.componentContainer}>
      <div className={styles.contentContainer}>
        <ShoppingCart className={styles.shoppingCart} />
        <Logo className={styles.logo} />
        <ul className={styles.menuItemsWrapper}>
          <li className={styles.menuItem}>ABOUT US</li>
          <li className={styles.menuItem}>OUR TEAS</li>
          <li className={styles.menuItem}>TESTIMONIALS</li>
          <li className={styles.menuItem}>LOCATIONS</li>
        </ul>
        <HamburgerMenuIcon
          toggle={toggle}
          className={styles.hamburgerMenuIcon}
        />
      </div>
    </nav>
  );
};

export default NavBar;
