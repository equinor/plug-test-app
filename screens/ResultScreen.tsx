import { EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { SafeAreaView } from "react-native-safe-area-context";
import { useResults } from "../contexts/ResultsContext";
import { useEffect } from "react";

export const ResultScreen = () => {
  const styles = useStyles(themeStyles);
  const { results, setResult } = useResults();
  useEffect(() => {
    setResult("left", "withPlugs", 20);
    setResult("left", "withoutPlugs", 40);
    setResult("right", "withPlugs", 60);
    setResult("right", "withoutPlugs", 80);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Typography>Resultater</Typography>
      <Typography>
        Venstre øre uten plugg: {results.left.withoutPlugs}
      </Typography>
      <Typography>Venstre øre med plugg: {results.left.withPlugs}</Typography>
      <Typography>
        Høyre øre uten plugg: {results.right.withoutPlugs}
      </Typography>
      <Typography>Høyre øre med plugg: {results.left.withPlugs}</Typography>
    </SafeAreaView>
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
