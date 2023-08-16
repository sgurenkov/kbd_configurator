import { createSignal, Show } from "solid-js";
import { BehaviorType, Layer, KeyboardButton } from "../../shared/model";
import { KeyCodeSelector } from "../KeyCodeSelector";
import { LayerSelector } from "../LayerSelector";

interface Props {
  switchKey: KeyboardButton;
  layers: Layer[];
}
export function SwitchConfigurator(props: Props) {
  const [behavior, setBehavior] = createSignal<BehaviorType>(
    props.switchKey.binding.behavior ?? BehaviorType.KeyPress,
  );
  const showKeyCodeSelector = () => {
    switch (behavior()) {
      case BehaviorType.KeyPress:
      case BehaviorType.LayerTap:
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
          onChange={(event) => setBehavior(event.target.value)}
        >
          <option
            value={BehaviorType.Transparent}
            selected={behavior() === BehaviorType.Transparent}
          >
            {BehaviorType.Transparent}
          </option>
          <option
            value={BehaviorType.KeyPress}
            selected={behavior() === BehaviorType.KeyPress}
          >
            {BehaviorType.KeyPress}
          </option>
          <option
            value={BehaviorType.LayerTo}
            selected={behavior() === BehaviorType.LayerTo}
          >
            {BehaviorType.LayerTo}
          </option>
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
