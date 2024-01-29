import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <span className={styles.content}>✨ Made with much 💜 by Rian Oliveira ✨</span>
    </footer>
  );
};
