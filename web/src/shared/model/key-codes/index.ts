import { KeyCodeDef } from "./def";
import { letters } from "./01_letters";
import { controls } from "./02_controls";
import { modifiers } from "./03_modifiers";
import { navigation } from "./04_navigation";
import { numbers } from "./05_numbers";
import { symbols } from "./06_symbols";
import { locks } from "./07_locks";
import { fkeys } from "./08_fkeys";
import { international } from "./09_international";
import { language } from "./10_language";
import { miscellaneous } from "./11_miscellaneous";

export type KeyCode =
  | (typeof letters)[number]["name"]
  | (typeof controls)[number]["name"]
  | (typeof modifiers)[number]["name"]
  | (typeof navigation)[number]["name"]
  | (typeof numbers)[number]["name"]
  | (typeof symbols)[number]["name"]
  | (typeof locks)[number]["name"]
  | (typeof fkeys)[number]["name"]
  | (typeof international)[number]["name"]
  | (typeof language)[number]["name"]
  | (typeof miscellaneous)[number]["name"];

export const KeyCodes = {
  controls,
  letters,
  modifiers,
  navigation,
  numbers,
  symbols,
  locks,
  fkeys,
  international,
  language,
  miscellaneous,
};
export type { KeyCodeDef } from "./def";

export const keyCodesByName: { [k in KeyCode]: KeyCodeDef } = {} as {
  [k in KeyCode]: KeyCodeDef;
};

Object.values(KeyCodes).forEach((list) =>
  list.forEach((item) => (keyCodesByName[item.name] = item)),
);

export const keyCodeDef = (keyCode: KeyCode): KeyCodeDef => {
  return keyCodesByName[keyCode];
};
