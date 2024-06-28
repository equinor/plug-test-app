import { Typography } from "@equinor/mad-components";
import * as Haptics from "expo-haptics";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { BigButtonContainer } from "./BigButtonContainer";
import { VolumeButton } from "./VolumeButton";
import { SPACE_BETWEEN_VOLUME_BUTTONS, VOLUME_BUTTON_KEY } from "./constants";
import { Variant } from "./types";

type PlayButtonProps = {
  type: "play";
  onPress: () => void;
};
type VolumeButtonsProps = {
  type: "volume";
  onPress: (variant: Variant) => void;
};
export type SoundButtonProps = PlayButtonProps | VolumeButtonsProps;

export const SoundButton = ({ type, onPress }: SoundButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const onPressIn = () => {
    haptics();
    setIsPressed(true);
  };
  const onPressOut = () => setIsPressed(false);

  const haptics = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  const getIsPressed = () => {
    if (type === "volume") return undefined;
    return isPressed;
  };
  return (
    <BigButtonContainer key="BIG_BUTTON_CONTAINER">
      <VolumeButton
        key={VOLUME_BUTTON_KEY.UP}
        variant="+"
        displaySymbol={type === "volume"}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        isPressed={getIsPressed()}
        onPress={onPress}
      />
      {type === "volume" && (
        <View style={{ height: SPACE_BETWEEN_VOLUME_BUTTONS }} />
      )}
      <VolumeButton
        key={VOLUME_BUTTON_KEY.DOWN}
        variant="-"
        displaySymbol={type === "volume"}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        isPressed={getIsPressed()}
        onPress={onPress}
      />
      {type === "play" && (
        <Pressable
          style={{ position: "absolute", alignSelf: "center" }}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          onPress={onPress}
        >
          <Typography color="textInverted">Spill av</Typography>
        </Pressable>
      )}
    </BigButtonContainer>
  );
};
