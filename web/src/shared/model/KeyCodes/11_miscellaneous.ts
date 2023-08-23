import { KeyCodeDef } from "./def";

export const miscellaneous = [
  {
    name: "PSCRN",
    description: "Print Screen",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PAUSE_BREAK",
    description: "Pause / Break",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "ALT_ERASE",
    description: "Alternate Erase",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "SYSREQ",
    description: "SysReq / Attention",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "K_CANCEL",
    description: "Cancel Keyboard",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "CLEAR",
    description: "Clear",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "CLEAR_AGAIN",
    description: "Clear / Again",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "CRSEL",
    description: "CrSel / Props",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "PRIOR",
    description: "Prior",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "SEPARATOR",
    description: "Separator",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "OUT",
    description: "Out",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "OPER",
    description: "Oper",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "EXSEL",
    description: "ExSel",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "K_EDIT",
    description: "Edit Keyboard",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
] as const satisfies readonly KeyCodeDef[];
