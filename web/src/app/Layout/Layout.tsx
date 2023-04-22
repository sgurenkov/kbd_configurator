//		RC(0,0)  RC(0,1)  RC(0,2)  RC(0,3)  RC(0,4)    RC(0,21) RC(0,20) RC(0,19) RC(0,18) RC(0,17)
//		RC(0,5)  RC(0,6)  RC(0,7)  RC(0,8)  RC(0,9)    RC(0,26) RC(0,25) RC(0,24) RC(0,23) RC(0,22)
//		RC(0,10) RC(0,11) RC(0,12) RC(0,13) RC(0,14)   RC(0,31) RC(0,30) RC(0,29) RC(0,28) RC(0,27)
//		                           RC(0,15) RC(0,16)   RC(0,33) RC(0,32)
//
// Keys 0 - 33
//

import { Layer, SwitchKey } from "../../model";
import { SwitchKey as SwitchCmp } from "../../shared/ui/SwitchKey";
import "./style.css";

interface Props {
  layer: Layer;
  onConfigureSwitch: (switchIndex: number) => void;
}

export function Layout(props: Props) {
  const switchKey = (index: number) => {
    const def = props.layer.switches[index];
    return (
      <SwitchCmp
        index={index}
        label={def.binding.behavior}
        action={props.onConfigureSwitch}
      />
    );
  };
  return (
    <>
      <div class="flex gap-4 flex-col items-center lg:flex-row lg:justify-center">
        <div class="relative">
          <img
            class="w-full max-w-2xl"
            style={{
              filter:
                "sepia(1) hue-rotate(180deg) drop-shadow(2px 2px 6px #333)",
            }}
            src="./ferris_sweep_l.png"
            alt="kb"
          />
          <div class="h-full absolute top-0 w-full h-full">
            {Array.from({ length: 17 }).map((_, i) => switchKey(i))}
          </div>
        </div>
        <div class="relative">
          <img
            class="w-full max-w-2xl"
            style={{
              filter:
                "sepia(1) hue-rotate(180deg) drop-shadow(2px 2px 6px #333)",
            }}
            src="./ferris_sweep_r.png"
            alt="kb"
          />
          <div class="h-full absolute top-0 w-full h-full right-panel">
            {Array.from({ length: 17 }).map((_, i) => switchKey(i + 17))}
          </div>
        </div>
      </div>
    </>
  );
}
