export interface WithBehavior {
  get type(): BehaviorType;
  get description(): string;
}

export interface Behavior {
  description: string;
  name: string;
  reference: string;
  type: BehaviorType;
}

export enum BehaviorType {
  Bluetooth,
  Bootloader,
  CapsWord,
  Combo,
  KeyPress,
  KeyRepeat,
  KeyToggle,
  LayerMomentary,
  LayerSticky,
  LayerTap,
  LayerTo,
  LayerToggle,
  Macro,
  ModMorph,
  ModTap,
  None,
  Output,
  Power,
  Reset,
  StickyKey,
  TapDance,
  Transparent,
}
