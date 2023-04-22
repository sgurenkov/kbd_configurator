export interface KeyCodeDef {
  name: string;
  char?: string;
  char2?: string; // alternative label, ex: 1 and !
  meta?: string; // additional information, like L in Shift
  description: string;
  os: { w: boolean; l: boolean; m: boolean; i: boolean; a: boolean };
}

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

const letters = [
  {
    name: "A",
    char: "a",
    char2: "A",
    description: "a and A",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "B",
    char: "b",
    char2: "B",
    description: "b and B",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "C",
    char: "c",
    char2: "C",
    description: "c and C",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "D",
    char: "d",
    char2: "D",
    description: "d and D",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "E",
    char: "e",
    char2: "E",
    description: "e and E",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F",
    char: "f",
    char2: "F",
    description: "f and F",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "G",
    char: "g",
    char2: "G",
    description: "g and G",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "H",
    char: "h",
    char2: "H",
    description: "h and H",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "I",
    char: "i",
    char2: "I",
    description: "i and I",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "J",
    char: "j",
    char2: "J",
    description: "j and J",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "K",
    char: "k",
    char2: "K",
    description: "k and K",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "L",
    char: "l",
    char2: "L",
    description: "l and L",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "M",
    char: "m",
    char2: "M",
    description: "m and M",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N",
    char: "n",
    char2: "N",
    description: "n and N",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "O",
    char: "o",
    char2: "O",
    description: "o and O",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "P",
    char: "p",
    char2: "P",
    description: "p and P",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "Q",
    char: "q",
    char2: "Q",
    description: "q and Q",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "R",
    char: "r",
    char2: "R",
    description: "r and R",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "S",
    char: "s",
    char2: "S",
    description: "s and S",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "T",
    char: "t",
    char2: "T",
    description: "t and T",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "U",
    char: "u",
    char2: "U",
    description: "u and U",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "V",
    char: "v",
    char2: "V",
    description: "v and V",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "W",
    char: "w",
    char2: "W",
    description: "w and W",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "X",
    char: "x",
    char2: "X",
    description: "x and X",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "Y",
    char: "y",
    char2: "Y",
    description: "y and Y",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "Z",
    char: "z",
    char2: "Z",
    description: "z and Z",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
] as const satisfies readonly KeyCodeDef[];

const numbers = [
  {
    name: "N1",
    char: "1",
    char2: "!",
    description: "1 and ! (EXCLAMATION)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N2",
    char: "2",
    char2: "@",
    description: "2 and @ (AT SIGN)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N3",
    char: "3",
    char2: "#",
    description: "3 and # (HASH / POUND)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N4",
    char: "4",
    char2: "$",
    description: "4 and $ (DOLLAR)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N5",
    char: "5",
    char2: "%",
    description: "5 and % (PERCENT)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N6",
    char: "6",
    char2: "^",
    description: "6 and ^ (CARET)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N7",
    char: "7",
    char2: "&",
    description: "7 and & (AMPERSAND)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N8",
    char: "8",
    char2: "*",
    description: "8 and * (ASTERISK / STAR)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N9",
    char: "9",
    char2: "(",
    description: "9 and ( (LEFT PARENTHESIS)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "N0",
    char: "0",
    char2: ")",
    description: "0 and ) (RIGHT PARENTHESIS)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
] satisfies KeyCodeDef[];

const symbols = [
  {
    name: "EXCL",
    char: "!",
    description: "! (EXCLAMATION)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "AT",
    char: "@",
    description: "@ (AT SIGN)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "HASH",
    char: "#",
    description: "# (HASH / POUND)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "DLLR",
    char: "$",
    description: "$ (DOLLAR)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PRCNT",
    char: "%",
    description: "% (PERCENT)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "CARET",
    char: "^",
    description: "^ (CARET)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "AMPS",
    char: "&",
    description: "& (AMPERSAND)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "STAR",
    char: "*",
    description: "* (ASTERISK / STAR)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LPAR",
    char: "(",
    description: "( (LEFT PARENTHESIS)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RPAR",
    char: ")",
    description: "RIGHT PARENTHESIS",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "EQUAL",
    char: "=",
    char2: "+",
    description: "EQUAL and PLUS",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PLUS",
    char: "+",
    description: "PLUS",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "MINUS",
    char: "-",
    char2: "_",
    description: "MINUS and UNDERSCORE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "UNDER",
    char: "_",
    description: "UNDERSCORE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "SLASH",
    char: "/",
    char2: "?",
    description: "FORWARD SLASH and QUESTION MARK",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "QMARK",
    char: "?",
    description: "QUESTION MARK",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "BSLH",
    char: "\\",
    char2: "|",
    description: "BACKSLASH and PIPE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PIPE",
    char: "|",
    description: "PIPE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "NUBS",
    char: "\\",
    char2: "/",
    description: "Non-US BACKSLASH and PIPE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "PIPE2",
    char: "|",
    description: "PIPE 2",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "SEMI",
    char: ";",
    char2: ":",
    description: "SEMICOLON and COLON",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "COLON",
    char: ":",
    description: "COLON",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "SQT",
    char: "'",
    char2: '"',
    description: "SINGLE QUOTE and DOUBLE QUOTE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "DQT",
    char: '"',
    description: "DOUBLE QUOTE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "COMMA",
    char: ",",
    char2: "<",
    description: "COMMA and LESS THAN",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LT",
    char: "<",
    description: "LESS THAN",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "DOT",
    char: ".",
    char2: ">",
    description: "PERIOD and GREATER THAN",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "GT",
    char: ">",
    description: "GREATER THAN",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LBKT",
    char: "[",
    char2: "{",
    description: "LEFT BRACKET and LEFT BRACE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LBRC",
    char: "{",
    description: "LEFT BRACE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RBKT",
    char: "]",
    char2: "}",
    description: "RIGHT BRACKET and RIGHT BRACE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RBRC",
    char: "}",
    description: "RIGHT BRACE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "GRAVE",
    char: "`",
    char2: "~",
    description: "GRAVE ACCENT and TILDE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "TILDE",
    char: "~",
    description: "TILDE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "NUHS",
    char: "№",
    char2: "Ë",
    description: "Non-US HASH/POUND and TILDE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "TILDE2",
    char: "~",
    description: "TILDE",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
] satisfies KeyCodeDef[];

const controls = [
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
] satisfies KeyCodeDef[];

const navigation = [
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

const modifiers = [
  {
    name: "LSHIFT",
    char: "⇧",
    meta: "L",
    description: "Left Shift",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RSHIFT",
    char: "⇧",
    meta: "R",
    description: "Right Shift",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LCTRL",
    char: "^",
    meta: "L",
    description: "Left Control",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RCTRL",
    char: "^",
    meta: "R",
    description: "Right Control",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LALT",
    char: "⌥",
    meta: "L",
    description: "Left Alt",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RALT",
    char: "⌥",
    meta: "R",
    description: "Right Alt",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "LGUI",
    char: "⌘",
    meta: "L",
    description: "Left GUI (Windows / Command / Meta)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "RGUI",
    char: "⌘",
    meta: "R",
    description: "Right GUI (Windows / Command / Meta)",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
] as const satisfies readonly KeyCodeDef[];

const locks = [
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

const fkeys = [
  {
    name: "F1",
    description: "F1",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F2",
    description: "F2",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F3",
    description: "F3",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F4",
    description: "F4",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F5",
    description: "F5",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F6",
    description: "F6",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F7",
    description: "F7",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F8",
    description: "F8",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F9",
    description: "F9",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F10",
    description: "F10",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F11",
    description: "F11",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F12",
    description: "F12",
    os: {
      w: true,
      l: true,
      m: true,
      a: true,
      i: true,
    },
  },
  {
    name: "F13",
    description: "F13",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F14",
    description: "F14",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F15",
    description: "F15",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F16",
    description: "F16",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F17",
    description: "F17",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F18",
    description: "F18",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F19",
    description: "F19",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F20",
    description: "F20",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F21",
    description: "F21",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F22",
    description: "F22",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F23",
    description: "F23",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
  {
    name: "F24",
    description: "F24",
    os: {
      w: true,
      l: true,
      m: true,
      a: false,
      i: true,
    },
  },
] as const satisfies readonly KeyCodeDef[];

const international = [
  {
    name: "INT1",
    description: "ろ (International 1)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT2",
    description: "かな (International 2)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT3",
    description: "¥ (International 3)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT4",
    description: "変換 (International 4)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT5",
    description: "無変換 (International 5)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT6",
    description: ",\nカソマ\n (International 6)",
    os: {
      w: false,
      l: true,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT7",
    description: "International 7",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT8",
    description: "International 8",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
  {
    name: "INT9",
    description: "International 9",
    os: {
      w: false,
      l: false,
      m: false,
      a: false,
      i: false,
    },
  },
] satisfies KeyCodeDef[];

const language = [
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

const miscellaneous = [
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

export const keyCodesByName: { [k: KeyCode]: KeyCodeDef } = {};

Object.values(KeyCodes).forEach((list) =>
  list.forEach((item) => (keyCodesByName[item.name] = item))
);