import { produce } from "immer";
import { Layer } from ".";

export interface Keyboard {
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
    const baseLayer = new Layer(this.#layers.length, this.#keyCount, "Base");
    this.#layers = [baseLayer];
  }

  layers(): Layer[] {
    return this.#layers;
  }

  addLayer(): Layer[] {
    this.#layers = produce(this.#layers, (draft) => {
      draft.push(new Layer(this.#layers.length, this.#keyCount));
    });
    return this.#layers;
  }

  serialize(): string {
    throw new Error("Method not implemented.");
  }
}
