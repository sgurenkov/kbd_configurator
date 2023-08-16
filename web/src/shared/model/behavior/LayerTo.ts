import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const LayerToBehavior: Behavior = {
  name: "Layer To",
  reference: "&to",
  type: BehaviorType.LayerTo,
  description: `
    <p>The "to layer" behavior enables a layer and disables all other layers except the default layer.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/layers">documentation</a></p>
  `,
};

export class LayerToBinding implements BindingInterface {
  readonly layerIndex: number;
  readonly behavior = LayerToBehavior;
  constructor(layerIndex: number) {
    this.layerIndex = layerIndex;
  }
  get labels(): Labels {
    return {
      main: `${this.layerIndex}`,
      lb: this.behavior.reference,
    };
  }
  export(): string {
    return `${this.behavior.reference} ${this.layerIndex}`;
  }
}
