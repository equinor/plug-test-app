import { Button, IconButtonProps, alert } from "@equinor/mad-components";
import { useDictionary } from "../../language";
import { useAttenuationAppNavigation } from "../../navigation/useAttenuationAppNavigation";

export const ExitButton = (props: Omit<IconButtonProps, "onPress" | "name" | "variant">) => {
  const navigation = useAttenuationAppNavigation();
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
