import { Button, IconButtonProps, alert } from "@equinor/mad-components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useDictionary } from "../../language";
import { RootStackParamList } from "../../navigation/types";

export const ExitButton = (props: Omit<IconButtonProps, "onPress" | "name" | "variant">) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dictionary = useDictionary();
  const onPress = () => {
    alert(
      dictionary["exitDialog.title"],
      dictionary["exitDialog.description"],
      [
          { text: dictionary["exitDialog.cancel"], onPress: () => undefined, style: "cancel" },
        { text: dictionary["exitDialog.confirm"], onPress: () => navigation.navigate("WelcomeScreen"), style: "destructive", isPreferred: true },
      ]
    );
  };
  return <Button.Icon variant="ghost" name="close" onPress={onPress} {...props} />;
};
