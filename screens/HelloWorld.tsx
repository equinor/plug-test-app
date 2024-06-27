import { Button, EDSStyleSheet, Typography, useStyles } from "@equinor/mad-components";
import { View } from "react-native";
import { useAttenuationAppNavigation } from "../navigation/useAttenuationAppNavigation";

export const HelloWorld = () => {
    const styles = useStyles(themeStyles);
    const { navigate } =useAttenuationAppNavigation()
    return <View style={styles.container}>
        <Typography>Hello world!</Typography>
        <Button title="Start testen" onPress={() => navigate("TestScreen")}/>
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