import { produce } from "immer";
import { BindingType, createLayer, Layer } from ".";

export interface Keyboard {
  /*
   * update keyboard key configuration
   */
  bindKey(layerOrder: number, keyOrder: number, binding: BindingType): Layer[];
  /*
   * Get all keyboard layers
   */
  layers(): Layer[];
  /*
   * Add a new layer
   */
  addLayer(): Layer[];
  /*
   * Serialize configuration into JSON
   */
  serialize(): string;
}

export class KeyboardConfigurator implements Keyboard {
  #layers: Layer[] = [];
  #keyCount: number;

  constructor(keyCount: number) {
    this.#keyCount = keyCount;
    const baseLayer = createLayer(this.#layers.length, this.#keyCount, "Base");
    this.#layers = [baseLayer];
  }

  bindKey(layerOrder: number, keyOrder: number, binding: BindingType): Layer[] {
    this.#layers = produce(this.#layers, (draft) => {
      draft[layerOrder].switches[keyOrder].binding = binding;
    });
    return this.#layers;
  }

  layers(): Layer[] {
    return this.#layers;
  }

  addLayer(): Layer[] {
    this.#layers = produce(this.#layers, (draft) => {
      draft.push(createLayer(this.#layers.length, this.#keyCount));
    });
    return this.#layers;
  }

  serialize(): string {
    throw new Error("Method not implemented.");
  }
}
