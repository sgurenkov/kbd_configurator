import { Layer } from '../../shared/model'

interface Props {
  layers: Layer[]
  currentLayer: number
  selectLayer: (layerOrder: number) => void
}
export function LayerSelector(props: Props) {
  const active = (layer: Layer) => layer.index == props.currentLayer
  return (
    <div>
      {props.layers.map((layer) => (
        <button
          class={`p-2 m-2 rounded-sm ${active(layer) ? "font-bold" : ""}`}
          onClick={() => props.selectLayer(layer.index)}
          disabled={active(layer)}
          style={{ 'background-color': layer.color }}
        >
          {layer.index} {layer.name}
        </button>
      ))}
    </div>
  )
}
