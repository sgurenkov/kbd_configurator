export interface KeyCodeDef {
  name: string;
  char?: string;
  char2?: string; // alternative label, ex: 1 and !
  meta?: string; // additional information, like L in Shift
  description: string;
  os: { w: boolean; l: boolean; m: boolean; i: boolean; a: boolean };
}
