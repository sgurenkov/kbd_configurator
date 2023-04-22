export class KeyboardButton implements Bindable {
  readonly index: number;
  private _binding: KeyPressBehavior;

  constructor(index: number) {
    this.index = index;
    this._binding = {
      behavior: Behavior.Transparent,
    };
  }
  get binding(): Binding {
    throw new Error("Method not implemented.");
  }
  set binding(binding: Binding) {
    this._binding = binding;
  }
}

export interface SwitchLabel {
  main: string;
  shifted?: string;
  description: string;
}

export function createSwitch(key: number): KeyboardButton {
  return { index: key, binding: { behavior: Behavior.Transparent } };
}
