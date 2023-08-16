import { Behavior } from "./Behavior";

enum Mod {
  MOD_LSFT = "MOD_LSFT",
  MOD_RSFT = "MOD_RSFT",
  MOD_LCTL = "MOD_LCTL",
  MOD_RCTL = "MOD_RCTL",
  MOD_LALT = "MOD_LALT",
  MOD_RALT = "MOD_RALT",
  MOD_LGUI = "MOD_LGUI",
  MOD_RGUI = "MOD_RGUI",
}

export interface Labels {
  main: string;
  lt?: string;
  rt?: string;
  lb?: string;
  rb?: string;
  sup?: string;
  sub?: string;
}

export interface BindingInterface {
  readonly behavior: Behavior;
  get labels(): Labels;
  export(): string;
}
