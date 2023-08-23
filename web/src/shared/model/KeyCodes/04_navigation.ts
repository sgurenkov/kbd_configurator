import { KeyCodeDef } from "./def";

export const navigation = [
  {
    name: "HOME",
    char: "↖",
    description: "Home",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "END",
    char: "↘",
    description: "End",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PG_UP",
    char: "⇞",
    description: "Page Up",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PG_DN",
    char: "⇟",
    description: "Page Down",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "UP",
    description: "UP ARROW",
    char: "↑",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "DOWN",
    description: "DOWN ARROW",
    char: "↓",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LEFT",
    description: "LEFT ARROW",
    char: "←",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RIGHT",
    description: "RIGHT ARROW",
    char: "→",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "K_APP",
    description: "Application (Context Menu)",
    char: "☰",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: false,
    },
  },
] as const satisfies readonly KeyCodeDef[];
