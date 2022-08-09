import styles from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <button className={`${styles.linkButton} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default LinkButton;
