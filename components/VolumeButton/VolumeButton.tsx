import { Button, EDSStyleSheet, PressableHighlight, Typography, useStyles } from "@equinor/mad-components";
import { Pressable, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { SvgXml } from "react-native-svg";
import { Variant } from "./types";
import { VolumeSymbol } from "./VolumeSymbol";
import { colors } from "@equinor/mad-components/dist/styling";

const HEIGHT = 214;


export type VolumeButtonProps<V extends Variant> = {
  variant: V;
  onPress: (v: V) => void;
};
export const VolumeButton = <V extends Variant>({
  variant,
  onPress,
}: VolumeButtonProps<V>) => {
  const styles = useStyles(volumeButtonStyles, variant);
  return (
    <View style={{ height: HEIGHT / 2, overflow: "hidden" }}>
      <TouchableHighlight
        onPress={() => onPress(variant)}
        style={styles.pressable}
        underlayColor={colors.interactive_primary_light_hover}
        activeOpacity={1}
      >
        <View style={styles.symbolContainer}>
          <VolumeSymbol variant={variant} />
        </View>
      </TouchableHighlight>
    </View>
  );
};

const volumeButtonStyles = EDSStyleSheet.create((theme, variant: Variant) => {
    const marginTop = variant === "-" ? -HEIGHT/2 : 0
    const symbolContainerMarginTop = variant === "-" ? "50%" : undefined

    return {
        pressable: {
            height: 214,
            width: 214,
            backgroundColor: theme.colors.interactive.primary,
            borderRadius: 180,
            alignItems: "center",
            marginTop 
        },
        symbolContainer: {
          height: "50%",
          justifyContent: "center",
          marginTop: symbolContainerMarginTop
        }
    }
})
