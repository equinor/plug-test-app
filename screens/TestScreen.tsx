import { Button, EDSStyleSheet, LinearProgress, Typography, useStyles } from "@equinor/mad-components";
import { useTestPlan } from "../contexts/TestPlanContext";
import { SafeAreaView } from "react-native-safe-area-context";

export const TestScreen = () => {
    const styles = useStyles(themeStyles);
    const {current: {title, Component}, navigateNext, progress} = useTestPlan();
    return (
        <SafeAreaView style={styles.container}>
            <LinearProgress value={progress}/>
            <Typography variant="h2" color="primary" style={styles.title}>{title}</Typography>
            <Typography>Progress {progress}</Typography>
            {Component}
            <Button title="Neste side" onPress={navigateNext}/>
        </SafeAreaView>)
}

const themeStyles = EDSStyleSheet.create((theme) => ({
    container: {
        flex: 1,
        gap: 24,
        paddingHorizontal: theme.spacing.container.paddingHorizontal,
        paddingVertical: theme.spacing.container.paddingVertical,
    },
    title: {
        textAlign: "center"
    }
}))