import { KeyCode, KeyCodeDef, keyCodesByName } from "../KeyCodes";
import { BehaviorType, WithBehavior } from "./Behavior";

export class KeyPressBehavior implements WithBehavior {
  private keyCodeDef: KeyCodeDef;
  private _type = BehaviorType.KeyPress;

  constructor(code: KeyCode) {
    this.keyCodeDef = keyCodesByName[code];
  }

  get type() {
    return this._type;
  }
  get description(): string {
    return this.keyCodeDef.description;
  }
}
