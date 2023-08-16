import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const CapsWordBehavior: Behavior = {
  name: "Caps Word",
  reference: "&caps_word",
  type: BehaviorType.CapsWord,
  description: `
  <p>The caps word behavior behaves similar to a caps lock, but will automatically deactivate when
    any key not in a continue list is pressed, or if the caps word key is pressed again.
    For smaller keyboards using mod-taps, this can help avoid repeated alternating holds when
    typing words in all caps.</p>

    <p>The modifiers are applied only to to the alphabetic (A to Z) keycodes, to avoid automatically appliying
    them to numeric values, etc.</p>
    <p><a target="_blank" href='https://zmk.dev/docs/behaviors/caps-word'>documentation</a></p>`,
};

export class CapsWordBinding implements BindingInterface {
  readonly behavior = CapsWordBehavior;

  get labels(): Labels {
    return { main: "", lt: "C", rt: "W" };
  }
  export(): string {
    return `${this.behavior.reference}`;
  }
}
