import { KeyCode, keyCodeDef } from "../KeyCodes";
import { Behavior, BehaviorType } from "./Behavior";
import { BindingInterface, Labels } from "./Binding";

export const ModTapBehavior: Behavior = {
  name: "Mod Tap",
  reference: "&mt",
  type: BehaviorType.ModTap,
  description: `
    <p>The Mod-Tap behavior sends a different keypress, depending on whether it's held or tapped.</p>
    <ul>
    <li>If you hold the key for longer than 200ms, the first keycode ("mod") is sent.</li>
    <li>If you tap the key (release before 200ms), the second keycode ("tap") is sent.</li>
    </ul>

    <p>If you press another key within the 200ms, the 'mod' behavior is also activated.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/mod-tap">documentation</a></p>
  `,
};

export class ModTapBinding implements BindingInterface {
  readonly modKey: KeyCode;
  readonly tapKey: KeyCode;
  readonly behavior = ModTapBehavior;
  constructor(modKey: KeyCode, tapKey: KeyCode) {
    this.modKey = modKey;
    this.tapKey = tapKey;
  }
  get labels(): Labels {
    const modDef = keyCodeDef(this.modKey);
    const tapDef = keyCodeDef(this.tapKey);
    return {
      main: tapDef.char || tapDef.name,
      sup: modDef.char || modDef.name,
      lb: this.behavior.reference,
    };
  }
  export(): string {
    return `${this.behavior.reference} ${this.modKey} ${this.tapKey}`;
  }
}
