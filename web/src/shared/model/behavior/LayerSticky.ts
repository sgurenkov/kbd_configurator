import { KeyCode, keyCodeDef } from "../KeyCodes";
import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const LayerStickyBehavior: Behavior = {
  name: "Layer Sticky",
  reference: "&sl",
  type: BehaviorType.LayerSticky,
  description: `
    <p>A sticky layer stays pressed until another key is pressed. By using a sticky layer,
    you don't have to hold the layer key to access a layer. Instead, tap the sticky layer key to activate
    the layer until the next keypress.

    By default, sticky layers stay pressed for a second if you don't press any other key. You can configure this
    with the release-after-ms setting (see below).</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/sticky-layer">documentation</a></p>
  `,
};

export class LayerStickyBinding implements BindingInterface {
  readonly layerIndex: number;
  readonly tapKey: KeyCode;
  readonly behavior = LayerStickyBehavior;
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
