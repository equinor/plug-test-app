import { EDSStyleSheet, useStyles } from "@equinor/mad-components";
import { colors } from "@equinor/mad-components/dist/styling";
import * as Haptics from "expo-haptics";
import { Pressable, View } from "react-native";
import { VolumeSymbol } from "./VolumeSymbol";
import { Variant } from "./types";

const HEIGHT = 214;

export type VolumeButtonProps<V extends Variant> = {
  variant: V;
  onPress: (variant: V) => void;
};
export const VolumeButton = <V extends Variant>({
  variant,
  onPress,
}: VolumeButtonProps<V>) => {
  const styles = useStyles(volumeButtonStyles, variant);
  
  const haptics = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
  };

  const pressedInStyle = {...styles.pressable, backgroundColor: colors.interactive_primary_light_hover}
  
  return (
    <View style={styles.container}>
      <Pressable
        onPressIn={haptics}
        onPress={() => onPress(variant)}
        style={({pressed}) => pressed ? pressedInStyle : styles.pressable}
      >
        <View style={styles.symbolContainer}>
          <VolumeSymbol variant={variant} />
        </View>
      </Pressable>
    </View>
  );
};

const volumeButtonStyles = EDSStyleSheet.create((theme, variant: Variant) => {
  const marginTop = variant === "-" ? -HEIGHT / 2 : 0;
  const symbolContainerMarginTop = variant === "-" ? "50%" : undefined;

  return {
    container: { height: HEIGHT / 2, overflow: "hidden" },
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
