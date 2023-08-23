import { KeyCodeDef } from "./def";

export const international = [
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
] as const satisfies readonly KeyCodeDef[];
