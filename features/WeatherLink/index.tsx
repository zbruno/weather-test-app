import * as React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

type WeatherLinkProps = {
  href: string;
  text: string;
};

export const WeatherLink = ({ href, text }: WeatherLinkProps) => {
  return (
    <div className={styles.linkContainer}>
      <Link href={href}>
        <a className={styles.link}>{text}</a>
      </Link>
    </div>
  );
};
