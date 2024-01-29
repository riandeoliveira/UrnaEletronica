import type { ReactElement } from "react";
import SVG from "react-inlinesvg";
import type { SkillType } from "types";
import styles from "./styles.module.scss";

type SkillProps = {
  skills: SkillType[];
};

export const Skill = ({ skills }: SkillProps): ReactElement => {
  return (
    <div className={styles.box}>
      {skills.map((skill) => {
        const { icon: Icon, title } = skill;

        return (
          <div className={styles.skill_box} key={skill.id}>
            <div className={styles.skill}>
              <div className={styles.icon}>
                <SVG src={Icon} />
              </div>
              <span className={styles.title}>{title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
