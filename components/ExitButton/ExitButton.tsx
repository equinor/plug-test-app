import { Button, IconButtonProps, alert } from "@equinor/mad-components";
import { useNavigation } from "@react-navigation/native";

export const ExitButton = (props: Omit<IconButtonProps, "onPress" | "name" | "variant">) => {
  const navigation = useNavigation();
  const onPress = () => {
    alert(
      "Are you sure you want to exit the test?",
      "Exiting the test will erase all progess",
      [
        { text: "Yes", onPress: () => navigation.navigate("Hello World"), style: "destructive" },
        { text: "No", onPress: () => undefined, isPreferred: true, style: "cancel" },
      ]
    );
  };
  return <Button.Icon variant="ghost" name="close" onPress={onPress} {...props} />;
};
