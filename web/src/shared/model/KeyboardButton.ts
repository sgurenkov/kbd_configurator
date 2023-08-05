import { BehaviorType, WithBehavior } from "./behavior/Behavior";
import { keyCodesByName } from "./KeyCodes";
import { Bindable, Binding } from "./behavior/Binding";

export class KeyboardButton implements Bindable, WithBehavior {
  readonly index: number;
  private _binding: Binding;

  constructor(index: number) {
    this.index = index;
    this._binding = {
      behavior: BehaviorType.Transparent,
    };
  }
  get type(): BehaviorType {
    return this._binding.behavior;
  }
  get binding(): Binding {
    return this._binding;
  }
  set binding(binding: Binding) {
    this._binding = binding;
  }
  // labels
  get description() {
    const b = this._binding;
    switch (b.behavior) {
      case BehaviorType.Transparent:
        return "";
      case BehaviorType.KeyPress:
        return this.keyDescription(b.keyCode);
      default:
        return "todo";
    }
  }
  private keyDescription(keyCode: string): string {
    return keyCodesByName[keyCode].description;
  }
}

export function createSwitch(key: number): KeyboardButton {
  return new KeyboardButton(key);
}
