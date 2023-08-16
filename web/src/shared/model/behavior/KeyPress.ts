import { KeyCode, keyCodeDef } from "../KeyCodes";
import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const KeyPressBehavior: Behavior = {
  name: "Key Press",
  reference: "&kp",
  type: BehaviorType.KeyPress,
  description: `<p>Send certain keyCode</p>
     <p><a target="_blank" href='https://zmk.dev/docs/behaviors/key-press'>documentation</a></p>`,
};

export class KeyPressBinding implements BindingInterface {
  readonly keyCode: KeyCode;
  readonly behavior = KeyPressBehavior;
  constructor(keyCode: KeyCode) {
    this.keyCode = keyCode;
  }
  get labels(): Labels {
    const def = keyCodeDef(this.keyCode);
    const main = def.char || def.name;
    return { main };
  }
  export(): string {
    return `${this.behavior.reference} ${this.keyCode}`;
  }
}
