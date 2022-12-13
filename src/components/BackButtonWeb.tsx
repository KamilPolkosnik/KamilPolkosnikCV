import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform, TouchableOpacity } from "react-native";
import theme from "../themes/theme";
import { Ionicons } from "@expo/vector-icons";

const BackButtonWeb = () => {
  const { colors } = theme;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Home")}
      style={{
        position: "absolute",
        top: Platform.OS === "web" ? 15 : 40,
        left: Platform.OS === "web" ? 10 : 20,
        zIndex: 1
      }}
    >
      <Ionicons
        name="md-arrow-back-circle-sharp"
        size={Platform.OS === "web" ? 65 : 45}
        color={colors.mainYellow}
      />
    </TouchableOpacity>
  );
};

export default BackButtonWeb;
