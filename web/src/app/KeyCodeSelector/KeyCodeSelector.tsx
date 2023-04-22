import { createSignal, Show } from "solid-js";
import { KeyCodes, KeyCodeDefinition } from "../../shared/model/KeyCodes";

function Group(props: { kCodes: KeyCodeDefinition[]; label: string }) {
  return (
    <Show when={props.kCodes.length > 0}>
      <div class="key-code-selector-group">
        <h3>{props.label}</h3>
        {props.kCodes.map((key) => (
          <Switch key={key} />
        ))}
      </div>
    </Show>
  );
}
function Switch(props: { key: KeyCodeDefinition }) {
  const { key } = props;
  return (
    <button title={key.description} class="key-code-selector-button">
      <span class="key-code-selector-label">{key.char ?? key.name}</span>
      {key.char2 ? <sup class="key-code-selector-sup">{key.char2}</sup> : ""}
      {key.meta ? <span class="key-code-selector-meta">{key.meta}</span> : ""}
    </button>
  );
}

type OSFilter = Array<keyof KeyCodeDefinition["os"]>;

function filterKeyCodes(
  keyCodes: typeof KeyCodes,
  filter: OSFilter
): typeof KeyCodes {
  if (filter.length === 0) {
    return keyCodes;
  }
  const pairs = Object.entries(keyCodes).map(([key, item]) => {
    const newItem = item.filter((key) => filter.every((f) => key.os[f]));
    return [key, newItem];
  });
  return Object.fromEntries(pairs);
}

export function KeyCodeSelector() {
  let osFilterForm: HTMLFormElement;
  const [osFilter, setOSfilter] = createSignal<OSFilter>(["w", "l", "m"]);

  const applyOSfilter = () => {
    const data = new FormData(osFilterForm);
    const filter = data.getAll("osFilter");
    setOSfilter(filter as OSFilter);
  };

  const keyCodes = () => {
    const filter = osFilter();
    return filterKeyCodes(KeyCodes, filter);
  };

  return (
    <div class="key-code-selector">
      <div class="key-code-selector-keys">
        <Group label="Letters" kCodes={keyCodes().letters} />
        <Group label="Numbers" kCodes={keyCodes().numbers} />
        <Group label="Symbols" kCodes={keyCodes().symbols} />
        <Group label="Controls&Space" kCodes={keyCodes().controls} />
        <Group label="Navigation" kCodes={keyCodes().navigation} />
        <Group label="Modifiers" kCodes={keyCodes().modifiers} />
        <Group label="Locks" kCodes={keyCodes().locks} />
        <Group label="F Keys" kCodes={keyCodes().fkeys} />
        <Group label="International" kCodes={keyCodes().international} />
        <Group label="Language" kCodes={keyCodes().language} />
        <Group label="Miscellaneous" kCodes={keyCodes().miscellaneous} />
      </div>
      <form
        class="key-code-selector-filter"
        onChange={applyOSfilter}
        // @ts-ignore
        ref={osFilterForm}
      >
        <input
          type="checkbox"
          id="osFilter_w"
          name="osFilter"
          value="w"
          checked={osFilter().includes("w")}
        />
        <label for="osFilter_w">Windows</label>
        <input
          type="checkbox"
          id="osFilter_l"
          name="osFilter"
          value="l"
          checked={osFilter().includes("l")}
        />
        <label for="osFilter_l">Linux</label>
        <input
          type="checkbox"
          id="osFilter_m"
          name="osFilter"
          value="m"
          checked={osFilter().includes("m")}
        />
        <label for="osFilter_m">MacOS</label>
        <input
          type="checkbox"
          id="osFilter_a"
          name="osFilter"
          value="a"
          checked={osFilter().includes("a")}
        />
        <label for="osFilter_a">Android</label>
        <input
          type="checkbox"
          id="osFilter_i"
          name="osFilter"
          value="i"
          checked={osFilter().includes("i")}
        />
        <label for="osFilter_i">iOS</label>
      </form>
    </div>
  );
}
