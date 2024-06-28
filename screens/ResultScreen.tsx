import { EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components"
import { SafeAreaView } from "react-native-safe-area-context"

export const ResultScreen = () => {
    const styles = useStyles(themeStyles)
    return (
        <SafeAreaView style={styles.container}>
            <Typography>Resultater</Typography>
        </SafeAreaView>
    );
}

const themeStyles = EDSStyleSheet.create((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.container.background,
        alignItems: 'center',
        justifyContent: "center"
    }
}))