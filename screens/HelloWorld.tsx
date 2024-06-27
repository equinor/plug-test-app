import { EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { View } from "react-native";
import { VolumeButton } from "../components/VolumeButton/VolumeButton";
import { ExitButton } from "../components/ExitButton/ExitButton";

export const HelloWorld = () => {
    const styles = useStyles(themeStyles);
    return <View style={styles.container}>
        <VolumeButton variant="+" onPress={(v) => undefined} />
        <View style={{height:16}} />
        <VolumeButton variant="-" onPress={(v) => undefined} />
        <ExitButton />
        <Typography>Hello world!</Typography>
    </View>
}

const themeStyles = EDSStyleSheet.create((theme) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.container.background,
        alignItems: 'center',
        justifyContent: "center"
    }
}))