import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "./types";

export const useAttenuationAppNavigation = () =>
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export const useAttenuationAppRoute = () => useRoute<RouteProp<RootStackParamList>>();
