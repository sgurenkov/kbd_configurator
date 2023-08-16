import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const LayerMomentaryBehavior: Behavior = {
  name: "Layer Momentary",
  reference: "&mo",
  type: BehaviorType.LayerMomentary,
  description: `
    <p>The "momentary layer" behavior enables a layer while a certain key is pressed.
    Immediately upon activation of the key, the layer is enabled, and immediately upon release of the key,
    the layer is disabled again.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/layers">documentation</a></p>
  `,
};

export class LayerMomentaryBinding implements BindingInterface {
  readonly layerIndex: number;
  readonly behavior = LayerMomentaryBehavior;
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
