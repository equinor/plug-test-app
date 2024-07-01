import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { PropsWithChildren } from "react";
import {
  BIG_ROUND_BUTTON_DIAMETER,
  SPACE_BETWEEN_VOLUME_BUTTONS,
} from "./constants";
import { View } from "react-native";

export const BigButtonContainer = ({ children }: PropsWithChildren) => {
  const styles = useStyles(bigButtonContainerStyles);
  return <View style={styles.container}>{children}</View>;
};

const bigButtonContainerStyles = EDSStyleSheet.create(() => ({
  container: {
    height: BIG_ROUND_BUTTON_DIAMETER + SPACE_BETWEEN_VOLUME_BUTTONS,
    alignItems: "center",
    justifyContent: "center",
  },
}));
