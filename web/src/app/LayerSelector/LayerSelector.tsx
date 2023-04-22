import { Layer } from '../../model'

interface Props {
  layers: Layer[]
  currentLayer: number
  selectLayer: (layerOrder: number) => void
}
export function LayerSelector(props: Props) {
  return (
    <div>
      {props.layers.map((layer) => (
        <button
          onClick={() => props.selectLayer(layer.order)}
          disabled={layer.order == props.currentLayer}
          style={{ 'background-color': layer.color }}
        >
          {layer.order} {layer.name}
        </button>
      ))}
    </div>
  )
}
