import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { colors } from "@equinor/mad-components/dist/styling";
import { Pressable, View } from "react-native";
import { VolumeSymbol } from "./VolumeSymbol";
import { BIG_ROUND_BUTTON_DIAMETER } from "./constants";
import { Variant } from "./types";

export type VolumeButtonProps<V extends Variant> = {
  variant: V;
  onPress?: (variant: V) => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  isPressed?: boolean;
  displaySymbol?: boolean;
};
export const VolumeButton = <V extends Variant>({
  variant,
  onPress,
  onPressIn,
  onPressOut,
  isPressed,
  displaySymbol = true,
}: VolumeButtonProps<V>) => {
  const styles = useStyles(volumeButtonStyles, variant);

  const pressedInStyle = {
    ...styles.pressable,
    backgroundColor: colors.interactive_primary_light_hover,
  };

  const pressableStyle: React.ComponentProps<typeof Pressable>["style"] = ({
    pressed,
  }) => {
    const isPressedFinalValue = isPressed === undefined ? pressed : isPressed;
    if (isPressedFinalValue) return pressedInStyle;
    return styles.pressable;
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={() => onPress?.(variant)}
        style={pressableStyle}
      >
        {displaySymbol && (
          <View style={styles.symbolContainer}>
            <VolumeSymbol variant={variant} />
          </View>
        )}
      </Pressable>
    </View>
  );
};

const volumeButtonStyles = EDSStyleSheet.create((theme, variant: Variant) => {
  const marginTop = variant === "-" ? -BIG_ROUND_BUTTON_DIAMETER / 2 : 0;
  const symbolContainerMarginTop = variant === "-" ? "50%" : undefined;

  return {
    container: { height: BIG_ROUND_BUTTON_DIAMETER / 2, overflow: "hidden" },
    pressable: {
      height: 214,
      width: 214,
      backgroundColor: theme.colors.interactive.primary,
      borderRadius: 180,
      alignItems: "center",
      marginTop,
    },
    symbolContainer: {
      height: "50%",
      justifyContent: "center",
      marginTop: symbolContainerMarginTop,
    },
  };
});
