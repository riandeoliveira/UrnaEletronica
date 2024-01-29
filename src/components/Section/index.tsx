import type { ReactElement, ReactNode } from "react";
import styles from "./styles.module.scss";

type SectionProps = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: SectionProps): ReactElement => {
  return (
    <section className={styles.section}>
      <div className={styles.section_box}>
        <div className={styles.title_box}>
          <h3 className={styles.title}>{title}</h3>
          <hr className={styles.bar} />
        </div>
        {children}
      </div>
    </section>
  );
};
