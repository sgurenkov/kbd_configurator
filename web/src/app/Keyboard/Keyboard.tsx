import { createSignal, Show } from "solid-js";
import { Layout } from "../Layout";
import { Keyboard, KeyboardButton } from "../../shared/model";
import { SwitchConfigurator } from "../SwitchConfigurator";
import { LayerSelector } from "../LayerSelector";

interface Props {
  keyboard: Keyboard;
}

export function KeyboardComponent({ keyboard }: Props) {
  const [layers, setLayers] = createSignal(keyboard.layers());
  const [currentLayer, setCurrentLayer] = createSignal(0);
  const [configuringSwitch, setConfiguringSwitch] =
    createSignal<KeyboardButton>();

  const addLayer = () => {
    setLayers(keyboard.addLayer());
  };

  const startSwitchConfiguration = (switchKey: KeyboardButton): void => {
    setConfiguringSwitch(switchKey);
  };

  return (
    <div>
      <div>
        <LayerSelector
          layers={layers()}
          selectLayer={setCurrentLayer}
          currentLayer={currentLayer()}
        />
        <button onClick={addLayer}>+</button>
      </div>
      <Show when={!!configuringSwitch()}>
        <SwitchConfigurator
          switchKey={configuringSwitch()!}
          layers={layers()}
        />
      </Show>
      <Layout
        layer={layers()[currentLayer()]}
        onConfigureSwitch={startSwitchConfiguration}
      />
    </div>
  );
}
