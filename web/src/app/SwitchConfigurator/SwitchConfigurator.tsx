import { createSignal, Show, For } from "solid-js";
import { BehaviorType, Binding } from "../../shared/model";
import { KeyCodeSelector } from "../KeyCodeSelector";
import { LayerSelector } from "../LayerSelector";
import {
  CapsWordBehavior,
  GraveEscapeModMorphBehavior,
  KeyPressBehavior,
  KeyRepeatBehavior,
  KeyToggleBehavior,
  LayerMomentaryBehavior,
  LayerStickyBehavior,
  LayerTapBehavior,
  LayerToBehavior,
  LayerToggleBehavior,
  ModTapBehavior,
  NoneBehavior,
  StickyKeyBehavior,
  TransparentBehavior,
} from "../../shared/model";

interface Props {
  currentBinding: Binding;
  onBind(binding: Binding): void;
}

const behaviors = [
  CapsWordBehavior,
  GraveEscapeModMorphBehavior,
  KeyPressBehavior,
  KeyRepeatBehavior,
  KeyToggleBehavior,
  LayerMomentaryBehavior,
  LayerStickyBehavior,
  LayerTapBehavior,
  LayerToBehavior,
  LayerToggleBehavior,
  ModTapBehavior,
  NoneBehavior,
  StickyKeyBehavior,
  TransparentBehavior,
];

export function SwitchConfigurator(props: Props) {
  const [behavior, setBehavior] = createSignal<BehaviorType>(
    props.currentBinding.behavior.type ?? BehaviorType.KeyPress,
  );
  const showKeyCodeSelector = () => {
    switch (behavior()) {
      case BehaviorType.KeyPress:
      case BehaviorType.KeyToggle:
      case BehaviorType.StickyKey:
      case BehaviorType.ModTap:
        return true;
    }
    return false;
  };
  const showLayerSelector = () => {
    switch (behavior()) {
      case BehaviorType.LayerTap:
      case BehaviorType.LayerToggle:
      case BehaviorType.LayerSticky:
      case BehaviorType.LayerMomentary:
      case BehaviorType.LayerTo:
        return true;
    }
    return false;
  };
  return (
    <div class="switch-configurator">
      <div>
        <label for="behavior-selector" />
        <select
          name="behaviorSelector"
          id="behavior-selector"
          onChange={(event) => {
            setBehavior(Number(event.target.value) as BehaviorType);
          }}
        >
          {behaviors.map((b) => (
            <option value={b.type} selected={behavior() === b.type}>
              {b.name}
            </option>
          ))}
        </select>
      </div>
      <Show when={showKeyCodeSelector()}>
        <KeyCodeSelector />
      </Show>
      <Show when={showLayerSelector()}>
        <LayerSelector
          layers={props.layers}
          // @ts-ignore
          currentLayer={props.switchKey.binding.layer?.order}
          selectLayer={() => {}}
        />
      </Show>
    </div>
  );
}
