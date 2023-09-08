import { KeyCode, keyCodeDef } from "../key-codes";
import { Behavior, BehaviorType } from "./Behavior";
import { Binding, Labels } from "./Binding";

export class ModMorphBehaviorClass implements Behavior {
  name: string;
  type = BehaviorType.ModMorph;
  description = `
    <p>The Mod-Tap behavior sends a different keypress, depending on whether it's held or tapped.</p>
    <ul>
      <li>If you hold the key for longer than 200ms, the first keycode ("mod") is sent.</li>
      <li>If you tap the key (release before 200ms), the second keycode ("tap") is sent.</li>
    </ul>
    <p>If you press another key within the 200ms, the 'mod' behavior is also activated.</p>
    <p><a target="_blank" href="https://zmk.dev/docs/behaviors/mod-morph">documentation</a></p>
    `;
  reference: string;

  constructor(reference: string, name: string) {
    this.reference = reference;
    this.name = name;
  }
}
export const GraveEscapeModMorphBehavior = new ModMorphBehaviorClass(
  "&gresc",
  "Grave Escape",
);
/**
 * emits ESC without modified key and emits ` with any modifier key
 */
export class GraveEscapeModMorphBinding implements Binding {
  readonly keyCode: KeyCode;
  readonly behavior = GraveEscapeModMorphBehavior;
  constructor(keyCode: KeyCode) {
    this.keyCode = keyCode;
  }
  get labels(): Labels {
    return { main: keyCodeDef("ESC").char ?? "ESC", sup: "`" };
  }
  export(): string {
    return `${this.behavior.reference}`;
  }
}
