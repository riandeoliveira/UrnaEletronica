import { useVotingMachine } from "hooks/useVotingMachine";

export const BlankButton = (): JSX.Element => {
  const { onBlankButtonPress } = useVotingMachine();

  return (
    <button
      type="button"
      onClick={onBlankButtonPress}
      className="w-[94px] h-[35px] bg-white text-[#262626] rounded-md shadow-white-btn active:shadow-active-white-btn transition-all duration-100 flex pl-[3px] active:pl-[6px] active:pt-[2px]"
    >
      BRANCO
    </button>
  );
};