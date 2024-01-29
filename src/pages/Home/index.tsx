import { AboutMeSection } from "components/AboutMeSection";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { NavItem } from "components/NavItem";
import { ProjectsSection } from "components/ProjectsSection";
import { SkillsSection } from "components/SkillsSection";
import { sections } from "data/sections";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { tabStore } from "stores/tab.store";
import styles from "./styles.module.scss";

export const Home = observer((): ReactElement => {
  return (
    <div className={styles.page}>
      <div className={styles.page_box}>
        <Header />
        <nav>
          <ul className={styles.list}>
            {sections.map(({ name, id, label }) => (
              <NavItem section={name} key={id}>
                {label}
              </NavItem>
            ))}
          </ul>
        </nav>
        <main>
          {tabStore.tabName === "about_me" && <AboutMeSection />}
          {tabStore.tabName === "projects" && <ProjectsSection />}
          {tabStore.tabName === "skills" && <SkillsSection />}
        </main>
        <Footer />
      </div>
    </div>
  );
});
