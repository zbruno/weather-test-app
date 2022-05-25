import * as React from "react";

import styles from "./styles.module.css";

// Types
type CardProps = {
  children: React.ReactNode;
  title?: React.ReactNode;
};

// React
const Card: React.FC<CardProps> = ({ children, title = "card" }) => {
  return (
    <section>
      <div className={styles.card}>
        {title}
        <div className={styles.cardContent}>{children}</div>
      </div>
    </section>
  );
};

export default React.memo(Card);
