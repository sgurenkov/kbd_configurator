import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const LayerToggleBehavior: Behavior = {
  name: "Layer Toggle",
  reference: "&tog",
  type: BehaviorType.LayerToggle,
  description: `
    <p>The "toggle layer" behavior enables a layer until the layer is manually disabled.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/layers">documentation</a></p>
  `,
};

export class LayerToggleBinding implements BindingInterface {
  readonly layerIndex: number;
  readonly behavior = LayerToggleBehavior;
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
