import { BehaviorType, WithBehavior } from "./behavior/Behavior";
import { KeyCodeDef, keyCodesByName } from "./KeyCodes";
import { BindingType } from "./behavior/Binding";

/**
 * Each KeyboardButton has it's ascending number within a keyboard `index`
 * Binding defines behavior on a particular layer
 */
export class KeyboardButton implements WithBehavior {
  readonly index: number;
  private _binding: BindingType;

  constructor(index: number) {
    this.index = index;
    this._binding = {
      behavior: BehaviorType.Transparent,
    };
  }
  get type(): BehaviorType {
    return this._binding.behavior;
  }
  get binding(): BindingType {
    return this._binding;
  }
  set binding(binding: BindingType) {
    this._binding = binding;
  }
  // labels
  get description() {
    const b = this._binding;
    switch (b.behavior) {
      case BehaviorType.Transparent:
        return "";
      case BehaviorType.KeyPress:
        return this.keyDef(b.keyCode).description;
      default:
        return "todo";
    }
  }

  export(): string {
    const b = this._binding;
    switch (b.behavior) {
      case BehaviorType.Transparent:
        return b.behavior.toString();
      case BehaviorType.KeyPress:
        return `${b.behavior.toString()} ${this.keyName()}`;
      default:
        return "todo";
    }
  }

  private keyName(): string {
    if (this._binding.behavior === BehaviorType.KeyPress) {
      return this.keyDef(this._binding.keyCode).name;
    }
    return "";
  }

  private keyDef(keyCode: string): KeyCodeDef {
    return keyCodesByName[keyCode];
  }
}

export function createSwitch(key: number): KeyboardButton {
  return new KeyboardButton(key);
}
