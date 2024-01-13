import { mainProvider } from "providers";
import { votingMachineStore } from "stores/voting-machine.store";

export const handleKeyButtonPress = (keyPress: string): void => {
  const { isBlankVote, keyInput, stage, isFinishedVote } = votingMachineStore;

  mainProvider.playKeyPressSound();

  if (!isBlankVote && keyInput.length !== stage.campo_digitos.length && !isFinishedVote) {
    votingMachineStore.setKeyInput([...keyInput, keyPress]);
  }
};
