import { KeyCodeDef } from "./def";

export const controls = [
  {
    name: "ESC",
    char: "⎋",
    description: "Escape",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "ENTER",
    char: "↩",
    description: "Return (Enter)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RETURN2",
    char: "⏎",
    description: "Return",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "SPACE",
    char: "␠",
    description: "Space",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "TAB",
    char: "↹",
    description: "Tab",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "BSPC",
    char: "⌫",
    description: "Backspace",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "DEL",
    char: "⌦",
    description: "Delete",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "INS",
    char: "⎀",
    description: "Insert",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
] as const satisfies readonly KeyCodeDef[];
