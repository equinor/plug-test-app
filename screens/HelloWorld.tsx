import {
    Button,
    EDSStyleSheet,
    Typography,
    useStyles,
} from "@equinor/mad-components";
import { useState } from "react";
import { LayoutAnimation, View } from "react-native";
import { SoundButton } from "../components/VolumeButton/SoundButton";
import { useDictionary } from "../language";
import { useAttenuationAppNavigation } from "../navigation/useAttenuationAppNavigation";

export const HelloWorld = () => {
  const styles = useStyles(themeStyles);
  const { navigate } = useAttenuationAppNavigation();
  const dictionary = useDictionary();
  const [buttonType, setButtonType] = useState<"play" | "volume">("play");
  const onPress = () => {
    if (buttonType === "play") {
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.easeInEaseOut,
        duration: 150,
      });
      setButtonType("volume");
    } else {
      LayoutAnimation.configureNext({
        ...LayoutAnimation.Presets.easeInEaseOut,
        duration: 150,
      });
      setButtonType("play");
    }
  };

  return (
    <View style={styles.container}>
      <Typography>{dictionary.helloWorld}</Typography>
      <SoundButton type={buttonType} onPress={onPress} />
      <Button title="Start testen" onPress={() => navigate("TestScreen")} />
    </View>
  );
};

const themeStyles = EDSStyleSheet.create((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.container.background,
    alignItems: "center",
    justifyContent: "center",
  },
}));
