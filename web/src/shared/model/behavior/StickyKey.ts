import { KeyCode, keyCodeDef } from "../key-codes";
import { Behavior, BehaviorType } from "./Behavior";
import { Binding, Labels } from "./Binding";

export const StickyKeyBehavior: Behavior = {
  name: "Sticky Key",
  reference: "&sk",
  type: BehaviorType.StickyKey,
  description: `
    <p>A sticky key stays pressed until another key is pressed. It is often used for 'sticky shift'.
    By using a sticky shift, you don't have to hold the shift key to write a capital.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/sticky-key">documentation</a></p>
  `,
};

export class StickyKeyBinding implements Binding {
  readonly keyCode: KeyCode;
  readonly behavior = StickyKeyBehavior;
  constructor(keyCode: KeyCode) {
    this.keyCode = keyCode;
  }
  get labels(): Labels {
    const def = keyCodeDef(this.keyCode);
    return { main: def.char || def.name, lb: "S" };
  }
  export(): string {
    return `${this.behavior.reference} ${this.keyCode}`;
  }
}
