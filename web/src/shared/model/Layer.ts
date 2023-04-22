import { createSwitch, KeyboardButton } from "./KeyboardButton.ts";

export interface Layer {
  name: string;
  order: number;
  color: string;
  switches: KeyboardButton[];
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
  order: number,
  keyCount: number,
  name?: string
): Layer {
  return {
    order,
    name: name ?? `Layer ${order}`,
    color: color(order),
    switches: Array(keyCount)
      .fill(null)
      .map((_, key) => {
        return createSwitch(key);
      }),
  };
}
