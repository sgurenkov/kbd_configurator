import { Behavior, BehaviorType } from "./Behavior";
import { Binding, Labels } from "./Binding";

export const KeyRepeatBehavior: Behavior = {
  name: "Key Repeat",
  reference: "&key_repeat",
  type: BehaviorType.KeyRepeat,
  description: `
    <p>The key repeat behavior when triggered will send whatever keycode was last sent/triggered.</p>
    <p><a target="_blank" href='https://zmk.dev/docs/behaviors/key-repeat'>documentation</a></p>`,
};

export class KeyRepeatBinding implements Binding {
  readonly behavior = KeyRepeatBehavior;

  get labels(): Labels {
    return { main: "", lt: "K", rt: "R" };
  }
  export(): string {
    return `${this.behavior.reference}`;
  }
}
