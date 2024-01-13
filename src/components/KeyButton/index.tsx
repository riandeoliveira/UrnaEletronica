import { handleKeyButtonPress } from "handlers/handle-key-button-press";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

interface KeyButtonProps {
  keyPress: string;
}

export const KeyButton = observer(({ keyPress }: KeyButtonProps): ReactElement => {
  return (
    <button
      type="button"
      onClick={() => handleKeyButtonPress(keyPress)}
      className={styles.button}
      data-test-id={`key-button-${keyPress}`}
    >
      {keyPress}
    </button>
  );
});
