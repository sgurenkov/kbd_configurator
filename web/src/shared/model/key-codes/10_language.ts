import { KeyCodeDef } from "./def";

export const language = [
  {
    name: "LANG1",
    description: "한/영 (Language 1)",
    os: {
      w: true,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG2",
    description: "한자 (Language 2)",
    os: {
      w: true,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG3",
    description: "カタカナ (Language 3)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG4",
    description: "ひらがな (Language 4)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG5",
    description: "半角/全角 (Language 5)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG6",
    description: "Language 6",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG7",
    description: "Language 7",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG8",
    description: "Language 8",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LANG9",
    description: "Language 9",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
] as const satisfies readonly KeyCodeDef[];
