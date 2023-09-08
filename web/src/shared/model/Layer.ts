import { Binding } from "./behavior/Binding";
import { TransparentBinding } from "./behavior/Transparent";

export class Layer {
  index: number;
  name: string;
  color: string;
  keyBindings: Binding[];

  constructor(index: number, keyCount: number, name?: string) {
    this.index = index;
    this.name = name ?? `Layer ${index}`;
    this.color = color(index);
    this.keyBindings = Array(keyCount)
      .fill(null)
      .map(() => new TransparentBinding());
  }
  bindKey(keyIndex: number, binding: Binding) {
    this.checkKeyIndex(keyIndex);
    this.keyBindings[keyIndex] = binding;
  }

  behaviorByKeyIndex(keyIndex: number) {
    this.checkKeyIndex(keyIndex);
    return this.keyBindings[keyIndex];
  }

  private checkKeyIndex(keyIndex: number) {
    if (keyIndex >= this.keyBindings.length) {
      throw new Error(`keyIndex ${keyIndex} is out of range`);
    }
  }
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
