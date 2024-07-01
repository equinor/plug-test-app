import { ForwardedRef } from "react";

export type Variant = "+" | "-";
export type SoundButtonType = "play" | "volume";
export type SoundButtonControls = {
  soundButtonType: SoundButtonType;
  setSoundButtonType: (type: SoundButtonType) => void;
};
export type SoundButtonRef = ForwardedRef<SoundButtonControls>;
