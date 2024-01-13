import type { PlayFunction } from "use-sound/dist/types";

export class MainProvider {
  public playKeyPressSound: PlayFunction;
  public playVoteConfirmationSound: PlayFunction;

  public constructor() {
    this.playKeyPressSound = (): void => {};
    this.playVoteConfirmationSound = (): void => {};
  }

  public registerPlayKeyPressSoundProvider(playKeyPressSound: PlayFunction): void {
    this.playKeyPressSound = playKeyPressSound;
  }

  public registerPlayVoteConfirmationSoundProvider(playVoteConfirmationSound: PlayFunction): void {
    this.playVoteConfirmationSound = playVoteConfirmationSound;
  }
}

export const mainProvider = new MainProvider();
