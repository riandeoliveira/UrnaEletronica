import { useDispatch, useSelector } from "react-redux";
import {
  clearKeyInput,
  setCurrentCandidate,
  setIsBlankVote,
  setIsCheckingVote,
  setIsNullVote,
  setIsPartyVote,
  setKeyInput,
  setStage,
} from "redux/voting-machine/actions";
import {
  selectCandidateByNumber,
  selectCandidateParty,
  selectVotingMachineStates,
} from "redux/voting-machine/selectors";
import type { Candidato } from "types/candidato";
import useSound from "use-sound";

interface UseVotingMachine {
  handleVoteChecking: () => void;
  handleVoting: () => void;
  onBlankButtonPress: () => void;
  onConfirmButtonPress: () => void;
  onCorrectsButtonPress: () => void;
  onKeyButtonPress: (keyPress: string) => void;
}

export const useVotingMachine = (): UseVotingMachine => {
  const dispatch = useDispatch();
  const [playKeyPressSound] = useSound<string>(
    "/assets/audios/key-press-sound.mp3"
  );
  const [playConfirmVoteSound] = useSound<string>(
    "/assets/audios/confirm-vote-sound.mp3"
  );
  const {
    isBlankVote,
    keyInput,
    stage,
    isCheckingVote,
    isPartyVote,
    isNullVote,
  } = useSelector(selectVotingMachineStates);
  const candidateFound = useSelector(selectCandidateByNumber);
  const candidatePartyFound = useSelector(selectCandidateParty);

  const handleVoting = (): void => {
    const isAvailableToPartyVote: boolean =
      stage.cargo.tipo === "deputado_federal" ||
      stage.cargo.tipo === "deputado_estadual";

    console.log(stage);

    if (
      stage.cargo.tipo === "senador" &&
      keyInput.length === stage.campo_digitos.length
    ) {
      console.log("VOTO NULO");
      dispatch(setIsNullVote(true));
    }

    if (keyInput.length === 2 && isAvailableToPartyVote) {
      if (candidatePartyFound) {
        console.log("VOTO DE LEGENDA");
        console.log(candidatePartyFound);

        dispatch(setIsPartyVote(true));
      }

      if (!candidateFound && !candidatePartyFound) {
        console.log("VOTO NULO");
        dispatch(setIsNullVote(true));
      }

      if (!candidateFound && candidatePartyFound) {
        console.log("CANDIDATO INEXISTENTE");
        console.log(candidatePartyFound);

        dispatch(setIsPartyVote(true));
      }
    }

    if (keyInput.length === stage.campo_digitos.length) {
      if (candidateFound) {
        console.log("CANDIDATO ENCONTRADO");
        console.log(candidateFound);

        dispatch(setCurrentCandidate(candidateFound as Candidato));
      }
    }
  };

  const handleVoteChecking = (): void => {
    const MILLISECONDS: number = 1000;

    dispatch(setIsCheckingVote(true));

    setTimeout(() => dispatch(setIsCheckingVote(false)), MILLISECONDS);
  };

  const onKeyButtonPress = (keyPress: string): void => {
    playKeyPressSound();

    if (!isBlankVote && keyInput.length !== stage.campo_digitos.length) {
      dispatch(setKeyInput(keyPress));
    }
  };

  const onBlankButtonPress = (): void => {
    playKeyPressSound();

    if (keyInput.length === 0) {
      dispatch(setIsBlankVote(true));

      handleVoteChecking();
    }
  };

  const onCorrectsButtonPress = (): void => {
    playKeyPressSound();

    dispatch(clearKeyInput());
    dispatch(setCurrentCandidate({} as Candidato));
    dispatch(setIsBlankVote(false));
    dispatch(setIsCheckingVote(false));
    dispatch(setIsNullVote(false));
    dispatch(setIsPartyVote(false));
  };

  const onConfirmButtonPress = (): void => {
    if (keyInput.length === stage.campo_digitos.length && !isCheckingVote) {
      playConfirmVoteSound();
      dispatch(setStage());
    } else if (isPartyVote && keyInput.length >= 2 && !isCheckingVote) {
      playConfirmVoteSound();
      dispatch(setStage());
    } else if (isBlankVote && !isCheckingVote) {
      playConfirmVoteSound();
      dispatch(setStage());
    } else if (isNullVote && !isCheckingVote) {
      playConfirmVoteSound();
      dispatch(setStage());
    } else playKeyPressSound();
  };

  return {
    handleVoteChecking,
    handleVoting,
    onBlankButtonPress,
    onConfirmButtonPress,
    onCorrectsButtonPress,
    onKeyButtonPress,
  };
};
