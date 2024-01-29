//		RC(0,0)  RC(0,1)  RC(0,2)  RC(0,3)  RC(0,4)    RC(0,21) RC(0,20) RC(0,19) RC(0,18) RC(0,17)
//		RC(0,5)  RC(0,6)  RC(0,7)  RC(0,8)  RC(0,9)    RC(0,26) RC(0,25) RC(0,24) RC(0,23) RC(0,22)
//		RC(0,10) RC(0,11) RC(0,12) RC(0,13) RC(0,14)   RC(0,31) RC(0,30) RC(0,29) RC(0,28) RC(0,27)
//		                           RC(0,15) RC(0,16)   RC(0,33) RC(0,32)
//
// Keys 0 - 33
//

import { Layer } from "../../shared/model";
import { SwitchKey as SwitchCmp } from "../../shared/ui/SwitchKey";
import "./style.css";


const COLOR_MAP: Record<string, string> = {
    "#F9F9F9": "sepia(0%) saturate(7415%) hue-rotate(176deg) brightness(109%) contrast(95%)",
    "#C4D7E0": "sepia(21%) saturate(170%) hue-rotate(159deg) brightness(91%) contrast(93%)",
    "#FAF4B7": "sepia(11%) saturate(794%) hue-rotate(7deg) brightness(108%) contrast(96%)",
    "#FFCCB3": "sepia(54%) saturate(333%) hue-rotate(317deg) brightness(102%) contrast(103%)",
    "#CDF0EA": "sepia(3%) saturate(6621%) hue-rotate(188deg) brightness(132%) contrast(87%)",
    "#ECE5C7": "sepia(3%) saturate(2421%) hue-rotate(339deg) brightness(124%) contrast(85%)",
    "#CDC2AE": "sepia(14%) saturate(319%) hue-rotate(0deg) brightness(95%) contrast(87%)",
    "#92BA92": "sepia(7%) saturate(1181%) hue-rotate(71deg) brightness(81%) contrast(84%)",
    "#F4BFBF": "sepia(3%) saturate(1963%) hue-rotate(314deg) brightness(101%) contrast(103%)",
    "#F6C6EA": "sepia(38%) saturate(201%) hue-rotate(266deg) brightness(105%) contrast(93%)",
}

interface Props {
  layer: Layer;
  onStartConfiguring: (keyIndex: number) => void;
}

export function Layout(props: Props) {
  const switchKey = (index: number) => {
    const binding = props.layer.keyBindings[index];
    return (
      <SwitchCmp
        index={index}
        label={binding.labels.main}
        action={props.onStartConfiguring}
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
              filter: COLOR_MAP[props.layer.color]
            }}
            src="./ferris_sweep_l.png"
            alt="kb"
          />
          <div class="h-full absolute top-0 w-full h-full">
            {Array.from({ length: 17 }).map((_, i) => switchKey(i))}
          </div>
        </div>
        <div>{props.layer.name}</div>
        <div class="relative">
          <img
            class="w-full max-w-2xl"
            style={{
              filter: COLOR_MAP[props.layer.color]
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
