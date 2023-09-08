import { Show } from "solid-js";

export function SwitchKey(props: {
  index: number;
  label?: string;
  labelTL?: string;
  labelTR?: string;
  labelBL?: string;
  labelBR?: string;
  tooltip?: string;
  action: (index: number) => void;
}) {
  return (
    <button
      data-switch-key={props.index}
      class="pushable"
      title={props.tooltip}
      onClick={() => props.action(props.index)}
    >
      <span class="shadow"></span>
      <span class="edge"></span>
      <span class="front">
        <Show when={props.label} keyed={true}>
          <span>{props.label}</span>
        </Show>
      </span>
    </button>
  );
}
