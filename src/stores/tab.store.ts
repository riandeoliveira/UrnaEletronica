import { makeAutoObservable } from "mobx";
import type { SectionNameType } from "types";

export class TabStore {
  public tabName: SectionNameType;

  public constructor() {
    this.tabName = "about_me";

    makeAutoObservable(this);
  }

  public setTabName(tabName: SectionNameType): void {
    this.tabName = tabName;
  }
}

export const tabStore = new TabStore();
