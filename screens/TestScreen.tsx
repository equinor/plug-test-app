import {
  Button,
  EDSStyleSheet,
  LinearProgress,
  Typography,
  useStyles,
} from "@equinor/mad-components";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ExitButton } from "../components/ExitButton/ExitButton";
import { useTestPlan } from "../contexts/TestPlanContext";

export const TestScreen = () => {
  const styles = useStyles(themeStyles);
  const {
    current: { title, Component },
    navigateNext,
    progress,
  } = useTestPlan();
  return (
    <SafeAreaView style={styles.container}>
      <LinearProgress value={progress} />
      <View style={styles.exitButtonContainer}>
        <ExitButton />
      </View>
      <Typography variant="h2" color="primary" style={styles.title}>
        {title}
      </Typography>
      <Typography>Progress {progress}</Typography>
      {Component}
      <Button title="Neste side" onPress={navigateNext} />
    </SafeAreaView>
  );
};

const themeStyles = EDSStyleSheet.create((theme) => ({
  container: {
    flex: 1,
    gap: 24,
    paddingHorizontal: theme.spacing.container.paddingHorizontal,
    paddingVertical: theme.spacing.container.paddingVertical,
  },
  exitButtonContainer: { flexDirection: "row", justifyContent: "flex-end" },
  title: {
    textAlign: "center",
  },
}));
