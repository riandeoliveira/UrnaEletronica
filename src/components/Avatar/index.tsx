import { Tooltip, Zoom } from "@mui/material";
import primaryAvatar from "assets/images/primary-avatar.svg";
import secondaryAvatar from "assets/images/secondary-avatar.svg";
import type { ReactElement } from "react";
import { useState } from "react";
import SVG from "react-inlinesvg";
import styles from "./styles.module.scss";

export const Avatar = (): ReactElement => {
  const [isRotating, setIsRotating] = useState<boolean | null>(null);

  const handleRotating = (): void => {
    setIsRotating((previousState) => !previousState);
  };

  return (
    <Tooltip title="Clique aqui!" placement="top" arrow TransitionComponent={Zoom}>
      <button
        type="button"
        onClick={handleRotating}
        data-rotating={isRotating}
        className={styles.box}
      >
        <SVG src={secondaryAvatar} data-rotating={isRotating} className={styles.secondary_avatar} />
        <SVG src={primaryAvatar} className={styles.primary_avatar} />
        <div className={styles.avatar_background} />
      </button>
    </Tooltip>
  );
};
