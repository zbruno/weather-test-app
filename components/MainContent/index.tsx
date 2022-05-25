import * as React from "react";

import styles from "./styles.module.css";

type MainContentProps = {
  title: string;
  children: React.ReactNode;
};

const MainContent: React.FC<MainContentProps> = ({ title, children }) => {
  return (
    <div className="min-h-full">
      <div className={styles.headerBg}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
        </header>
      </div>

      <main>
        <div className={styles.content}>{children}</div>
      </main>
    </div>
  );
};

export default React.memo(MainContent);
