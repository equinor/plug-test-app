import { Dispatch, SetStateAction, useImperativeHandle } from "react";
import { LayoutAnimation } from "react-native";
import { SoundButtonRef, SoundButtonType } from "./types";

export const useSoundButtonHandle = (
  ref: SoundButtonRef,
  soundButtonType: SoundButtonType,
  setSoundButtonType: Dispatch<SetStateAction<SoundButtonType>>,
) => {
  return useImperativeHandle(
    ref,
    () => ({
      soundButtonType,
      setSoundButtonType: (type: SoundButtonType) => {
        LayoutAnimation.configureNext({
          ...LayoutAnimation.Presets.easeInEaseOut,
          duration: 150,
        });
        setSoundButtonType(type);
      },
    }),
    [soundButtonType, setSoundButtonType],
  );
};
