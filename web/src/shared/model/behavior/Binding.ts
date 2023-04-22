import { BehaviorType } from "./Behavior";
import { KeyCode } from "../KeyCodes";
import { Layer } from "../Layer";

export type Binding =
  // keypress
  | {
      behavior:
        | BehaviorType.KeyPress
        | BehaviorType.KeyToggle
        | BehaviorType.StickyKey;
      keyCode: KeyCode;
    }
  | {
      behavior: BehaviorType.ModTap;
      keyHold: KeyCode;
      keyTap: KeyCode;
    }
  | {
      behavior: BehaviorType.ModMorph;
      mod:
        | "MOD_LSFT"
        | "MOD_RSFT"
        | "MOD_LCTL"
        | "MOD_RCTL"
        | "MOD_LALT"
        | "MOD_RALT"
        | "MOD_LGUI"
        | "MOD_RGUI";
      keyCode: KeyCode;
      keyCodeMod: KeyCode;
    }
  // layers
  | {
      behavior: BehaviorType.LayerTap;
      layerIndex: number;
      keyCode: KeyCode;
    }
  | {
      behavior:
        | BehaviorType.LayerTo
        | BehaviorType.LayerMomentary
        | BehaviorType.LayerToggle
        | BehaviorType.LayerSticky;
      layer: Layer;
    }
  // specials
  | {
      behavior:
        | BehaviorType.Transparent
        | BehaviorType.None
        | BehaviorType.CapsWord
        | BehaviorType.KeyRepeat;
    };
