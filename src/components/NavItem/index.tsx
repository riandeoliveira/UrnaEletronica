import { observer } from "mobx-react-lite";
import type { ReactElement, ReactNode } from "react";
import type { SectionNameType } from "types";
import styles from "./styles.module.scss";
import { tabStore } from "stores/tab.store";

type NavItemProps = {
  section: SectionNameType;
  children: ReactNode;
};

export const NavItem = observer(({ section, children }: NavItemProps): ReactElement => {
  const selectedButton: boolean = tabStore.tabName === section;

  return (
    <li className={styles.item}>
      <button
        type="button"
        onClick={() => tabStore.setTabName(section)}
        data-selected={selectedButton}
        className={styles.button}
      >
        {children}
      </button>
    </li>
  );
});
