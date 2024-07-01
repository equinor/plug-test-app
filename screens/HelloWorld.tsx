import {
  Button,
  EDSStyleSheet,
  Typography,
  useStyles,
} from "@equinor/mad-components";
import { View } from "react-native";
import { VolumeButton } from "../components/VolumeButton/VolumeButton";
import { useDictionary } from "../language";
import { useAttenuationAppNavigation } from "../navigation/useAttenuationAppNavigation";

export const HelloWorld = () => {
  const styles = useStyles(themeStyles);
  const { navigate } = useAttenuationAppNavigation();
  const dictionary = useDictionary();
  return (
    <View style={styles.container}>
      <VolumeButton variant="+" onPress={() => undefined} />
      <View style={{ height: 16 }} />
      <VolumeButton variant="-" onPress={() => undefined} />
      <Typography>{dictionary.helloWorld}</Typography>
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
