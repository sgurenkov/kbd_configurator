import { createSwitch, KeyboardButton } from "./KeyboardButton";

export interface Layer {
  index: number;
  name: string;
  color: string;
  keyboardButtons: KeyboardButton[];
}

function color(order: number): string {
  const colors = [
    "#F9F9F9",
    "#C4D7E0",
    "#FAF4B7",
    "#FFCCB3",
    "#CDF0EA",
    "#ECE5C7",
    "#CDC2AE",
    "#92BA92",
    "#F4BFBF",
    "#F6C6EA",
  ];
  return colors[order % colors.length];
}

export function createLayer(
  index: number,
  keyCount: number,
  name?: string,
): Layer {
  return {
    index,
    name: name ?? `Layer ${index}`,
    color: color(index),
    keyboardButtons: Array(keyCount)
      .fill(null)
      .map((_, key) => {
        return createSwitch(key);
      }),
  };
}
