import { audios } from "assets";
import { observer } from "mobx-react-lite";
import { mainProvider } from "providers";
import type { ReactNode } from "react";
import { useEffect, type ReactElement } from "react";
import useSound from "use-sound";

interface AppProviderProps {
  children: ReactNode;
}

// BUG: Os áudios não estão funcionando

export const AppProvider = observer(({ children }: AppProviderProps): ReactElement => {
  const [playKeyPressSound] = useSound<string>(audios.keyPressSound);
  const [playVoteConfirmationSound] = useSound<string>(audios.voteConfirmationSound);

  useEffect(() => {
    mainProvider.registerPlayKeyPressSoundProvider(playKeyPressSound);
    mainProvider.registerPlayVoteConfirmationSoundProvider(playVoteConfirmationSound);
  }, []);

  return <>{children}</>;
});
