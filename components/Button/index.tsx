import * as React from "react";

import styles from "./styles.module.css";

// Types
type ButtonProps = {
  type?: "submit" | "reset" | "button";
  text: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ text, type = "button", onClick }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      <span>{text}</span>
    </button>
  );
};

export default React.memo(Button);
