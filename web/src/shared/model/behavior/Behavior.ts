export interface WithBehavior {
  get type(): BehaviorType;
  get description(): string;
}

export enum BehaviorType {
  KeyPress = "&kp",
  KeyToggle = "&kt",
  ModMorph = "mod_morph",
  ModTap = "&mt",
  StickyKey = "&sk",

  // -----------------------------------------------

  LayerMomentary = "&mo",
  LayerTap = "&lt",
  LayerTo = "&to",
  LayerToggle = "&tog",
  LayerSticky = "&sl",

  // -----------------------------------------------

  Bluetooth = "&bt",
  Bootloader = "&bootloader",
  CapsWord = "&caps_word",
  Combo = "combo",
  KeyRepeat = "&key_repeat",
  Macro = "macro",
  None = "&none",
  Output = "&out",
  Power = "&ext_power",
  Reset = "&reset",
  TapDance = "tap_dance",
  Transparent = "&trans",
}
