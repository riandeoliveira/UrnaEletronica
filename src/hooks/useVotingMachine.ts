import { mainProvider } from "providers";
import { candidatos } from "static";
import etapas from "static/etapas/etapas.json";
import { votingMachineStore } from "stores/voting-machine.store";
import type { Candidato } from "types/candidato";

export const useVotingMachine = () => {
  const getCandidate = () => {
    const candidates = candidatos.filter(
      (candidato) => candidato.cargo === votingMachineStore.stage.cargo.tipo,
    );

    return candidates.find(
      (candidate) => candidate.numero === votingMachineStore.keyInput.join(""),
    );
  };

  const getCandidateParty = () => {
    const candidates = candidatos.filter(
      (candidato) => candidato.cargo === votingMachineStore.stage.cargo.tipo,
    );

    return candidates.find(
      (candidate) => candidate.partido.numero === votingMachineStore.keyInput.join("").slice(0, 2),
    )?.partido;
  };

  const handleVoting = (): void => {
    const { stage, keyInput } = votingMachineStore;

    const candidateFound = getCandidate();
    const candidatePartyFound = getCandidateParty();

    const isAvailableToPartyVote: boolean =
      stage.cargo.tipo === "deputado_federal" || stage.cargo.tipo === "deputado_estadual";

    if (
      !isAvailableToPartyVote &&
      keyInput.length === stage.campo_digitos.length &&
      !candidateFound
    ) {
      votingMachineStore.setIsNullVote(true);
    }

    if (keyInput.length === 2 && isAvailableToPartyVote) {
      if (candidatePartyFound) {
        votingMachineStore.setIsPartyVote(true);
      }

      if (!candidateFound && !candidatePartyFound) {
        votingMachineStore.setIsNullVote(true);
      }

      if (!candidateFound && candidatePartyFound) {
        votingMachineStore.setIsPartyVote(true);
      }
    }

    if (keyInput.length === stage.campo_digitos.length) {
      if (candidateFound) {
        votingMachineStore.setCurrentCandidate(candidateFound as Candidato);
      }
    }
  };

  const handleVoteChecking = (): void => {
    const MILLISECONDS: number = 1000;

    votingMachineStore.setIsCheckingVote(true);

    setTimeout(() => votingMachineStore.setIsCheckingVote(false), MILLISECONDS);
  };

  const onBlankButtonPress = (): void => {
    const { keyInput } = votingMachineStore;

    mainProvider.playKeyPressSound();

    if (keyInput.length === 0) {
      votingMachineStore.setIsBlankVote(true);

      handleVoteChecking();
    }
  };

  const setAll = () => {
    votingMachineStore.setStageIndex(votingMachineStore.stageIndex + 1);
    votingMachineStore.setCurrentCandidate({} as Candidato);
    votingMachineStore.setIsBlankVote(false);
    votingMachineStore.setIsCheckingVote(false);
    votingMachineStore.setIsNullVote(false);
    votingMachineStore.setIsPartyVote(false);
    votingMachineStore.setKeyInput([]);
    votingMachineStore.setStage(etapas[votingMachineStore.stageIndex]);
  };

  const onCorrectsButtonPress = (): void => {
    mainProvider.playKeyPressSound();

    votingMachineStore.setKeyInput([]);
    votingMachineStore.setCurrentCandidate({} as Candidato);
    votingMachineStore.setIsBlankVote(false);
    votingMachineStore.setIsCheckingVote(false);
    votingMachineStore.setIsNullVote(false);
    votingMachineStore.setIsPartyVote(false);
  };

  const onConfirmButtonPress = (): void => {
    const { keyInput, isCheckingVote, stage, isPartyVote, isNullVote, isBlankVote } =
      votingMachineStore;

    if (keyInput.length === stage.campo_digitos.length && !isCheckingVote) {
      mainProvider.playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") votingMachineStore.setIsFinishedVote(true);
      else setAll();
    } else if (isPartyVote && keyInput.length >= 2 && !isCheckingVote) {
      mainProvider.playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") votingMachineStore.setIsFinishedVote(true);
      else setAll();
    } else if (isBlankVote && !isCheckingVote) {
      mainProvider.playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") votingMachineStore.setIsFinishedVote(true);
      else setAll();
    } else if (isNullVote && !isCheckingVote) {
      mainProvider.playVoteConfirmationSound();

      if (stage.cargo.tipo === "presidente") votingMachineStore.setIsFinishedVote(true);
      else setAll();
    } else mainProvider.playKeyPressSound();
  };

  return {
    handleVoteChecking,
    handleVoting,
    onBlankButtonPress,
    onConfirmButtonPress,
    onCorrectsButtonPress,
    getCandidate,
    getCandidateParty,
  };
};
