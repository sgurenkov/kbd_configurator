import { KeyCode, keyCodeDef } from "../key-codes";
import { Behavior, BehaviorType } from "./Behavior";
import { Binding, Labels } from "./Binding";

export const LayerTapBehavior: Behavior = {
  name: "Layer Tap",
  reference: "&lt",
  type: BehaviorType.LayerTap,
  description: `
    <p>The "layer-tap" behavior enables a layer when a key is held, and outputs a keypress when the key is only
    tapped for a short time.</p>
    <ul>
    <li>Reference: &lt</li>
    <li>Parameter: The layer number to enable when held, e.g. 1</li>
    <li>Parameter: The keycode to send when tapped, e.g. A</li>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/layers">documentation</a></p>
  `,
};

export class LayerTapBinding implements Binding {
  readonly layerIndex: number;
  readonly tapKey: KeyCode;
  readonly behavior = LayerTapBehavior;
  constructor(layerIndex: number, tapKey: KeyCode) {
    this.layerIndex = layerIndex;
    this.tapKey = tapKey;
  }
  get labels(): Labels {
    const tapDef = keyCodeDef(this.tapKey);
    return {
      main: tapDef.char || tapDef.name,
      sub: `${this.layerIndex}`,
      lb: this.behavior.reference,
    };
  }
  export(): string {
    return `${this.behavior.reference} ${this.layerIndex} ${this.tapKey}`;
  }
}
