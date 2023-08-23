import { KeyCode, keyCodeDef } from "../KeyCodes";
import { Behavior, BehaviorType } from "./Behavior";
import { Binding, Labels } from "./Binding";

export const KeyToggleBehavior: Behavior = {
  name: "Key Toggle",
  reference: "&kt",
  type: BehaviorType.KeyToggle,
  description: `
    <p>The key toggle behavior toggles the press of a key. If the key is not currently pressed,
    key toggle will press it, holding it until the key toggle is pressed again or the key is released in some other way.
    If the key is currently pressed, key toggle will release it.</p>

    <p>Example uses for key toggle include shift lock,
    or ALT-TAB window switching without holding down the ALT modifier.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/key-toggle">documentation</a></p>
  `,
};

export class KeyPressBinding implements Binding {
  readonly keyCode: KeyCode;
  readonly behavior = KeyToggleBehavior;
  constructor(keyCode: KeyCode) {
    this.keyCode = keyCode;
  }
  get labels(): Labels {
    const def = keyCodeDef(this.keyCode);
    return { main: def.char || def.name, lb: "T" };
  }
  export(): string {
    return `${this.behavior.reference} ${this.keyCode}`;
  }
}
