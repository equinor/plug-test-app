import {
  Button,
  EDSStyleSheet,
  Typography,
  useStyles,
} from "@equinor/mad-components";
import { useRef } from "react";
import { View } from "react-native";
import {
  SoundButton,
  SoundButtonProps,
} from "../components/VolumeButton/SoundButton";
import { SoundButtonControls } from "../components/VolumeButton/types";
import { useDictionary } from "../language";
import { useAttenuationAppNavigation } from "../navigation/useAttenuationAppNavigation";

export const HelloWorld = () => {
  const styles = useStyles(themeStyles);
  const { navigate } = useAttenuationAppNavigation();
  const dictionary = useDictionary();
  const soundButtonRef = useRef<SoundButtonControls>(null);
  const onPress: SoundButtonProps["onPress"] = (e) => {
    if (e.type === "play") {
      soundButtonRef.current?.setSoundButtonType("volume");
    } else {
      soundButtonRef.current?.setSoundButtonType("play");
    }
  };

  return (
    <View style={styles.container}>
      <Typography>{dictionary.helloWorld}</Typography>
      <SoundButton ref={soundButtonRef} onPress={onPress} />
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
