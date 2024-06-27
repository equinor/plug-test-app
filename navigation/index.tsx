import { ColorSchemeName } from "react-native";
import {useToken} from "@equinor/mad-components"
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { TestScreen } from "../screens/TestScreen";
import { HelloWorld } from "../screens/HelloWorld";
import { ResultScreen } from "../screens/ResultScreen";

export type NavigationProps = { colorScheme: ColorSchemeName }

export function Navigation({ colorScheme }: NavigationProps) {
    const token = useToken();
    return (
        <NavigationContainer
            theme={{
                dark: colorScheme === "dark",
                colors: {
                    primary: token.colors.interactive.primary,
                    background: token.colors.container.background,
                    card: token.colors.container.default,
                    text: token.colors.text.primary,
                    border: token.colors.border.medium,
                    notification: token.colors.interactive.primary,
                },
            }}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return <Stack.Navigator>
        <Stack.Screen name="Hello World" component={HelloWorld} options={{headerShown: false}}/>
        <Stack.Screen name="TestScreen" component={TestScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ResultScreen" component={ResultScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
}