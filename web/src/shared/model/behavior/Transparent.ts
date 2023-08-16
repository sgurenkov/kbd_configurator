import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const TransparentBehavior: Behavior = {
  name: "Transparent",
  reference: "&trans",
  type: BehaviorType.Transparent,
  description: `<p>Send certain keyCode</p>
     <p><a target="_blank" href='https://zmk.dev/docs/behaviors/misc'>documentation</a></p>`,
};

export class TransparentBinding implements BindingInterface {
  readonly behavior = TransparentBehavior;

  get labels(): Labels {
    return { main: "" };
  }
  export(): string {
    return `${this.behavior.reference}`;
  }
}
