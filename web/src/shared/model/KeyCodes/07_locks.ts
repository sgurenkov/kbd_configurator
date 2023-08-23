import { KeyCodeDef } from "./def";

export const locks = [
  {
    name: "CAPS",
    description: "Caps Lock",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LCAPS",
    description: "Locking Caps Lock",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "SLCK",
    description: "Scroll Lock",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LSLCK",
    description: "Locking Scroll Lock",
    os: {
      w: true,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "LNLCK",
    description: "Locking Num Lock",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
] as const satisfies readonly KeyCodeDef[];
