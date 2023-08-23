import { Binding } from "./behavior/Binding";
import { TransparentBinding } from "./behavior/Transparent";

export interface Layer {
  index: number;
  name: string;
  color: string;
  bindings: Binding[];
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
    bindings: Array(keyCount)
      .fill(null)
      .map(() => new TransparentBinding()),
  };
}
