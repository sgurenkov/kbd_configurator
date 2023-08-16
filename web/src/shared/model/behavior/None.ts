import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const NoneBehavior: Behavior = {
  name: "None",
  reference: "&trans",
  type: BehaviorType.None,
  description: `<p>Send certain keyCode</p>
     <p><a target="_blank" href='https://zmk.dev/docs/behaviors/misc'>documentation</a></p>`,
};

export class NoneBinding implements BindingInterface {
  readonly behavior = NoneBehavior;

  get labels(): Labels {
    return { main: "×" };
  }
  export(): string {
    return `${this.behavior.reference}`;
  }
}
