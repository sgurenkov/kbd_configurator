import { createSignal, Show } from "solid-js";
import { Layout } from "../Layout";
import { Keyboard, Binding } from "../../shared/model";
import { SwitchConfigurator } from "../SwitchConfigurator";
import { LayerSelector } from "../LayerSelector";

interface Props {
  keyboard: Keyboard;
}

export function KeyboardComponent({ keyboard }: Props) {
  const [layers, setLayers] = createSignal(keyboard.layers());
  const [currentLayer, setCurrentLayer] = createSignal(0);
  const [selectedKeyIndex, setSelectedKeyIndex] = createSignal<number>();

  const addLayer = () => {
    setLayers(keyboard.addLayer());
  };

  const startSwitchConfiguration = (keyIndex: number): void => {
    setSelectedKeyIndex(keyIndex);
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
      <Show when={selectedKeyIndex() !== undefined}>
        <SwitchConfigurator
          onBind={console.info}
          currentBinding={layers()[currentLayer()].behaviorByKeyIndex(
            selectedKeyIndex()!,
          )}
        />
      </Show>
      <Layout
        layer={layers()[currentLayer()]}
        onStartConfiguring={startSwitchConfiguration}
      />
    </div>
  );
}
