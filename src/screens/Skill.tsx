import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, ScrollView, Platform, TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import theme from "../themes/theme";
import { Ionicons } from "@expo/vector-icons";

const Skill = (props: any) => {
  const { colors } = theme;
  const { t } = useTranslation();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const skillName = props.route.params.skillName;
  const skillDescription = props.route.params.skillDescription;
  const skillSource = props.route.params.skillSource;

  return (
    <ScrollView
      style={{ backgroundColor: colors.mainGrey }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: Platform.OS === "web" ? 1920 : undefined,
        minHeight: "100%",
      }}
    >
      <View
        style={{
          width: Platform.OS === 'web' ? "60%" : '90%',
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: "20%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10
          }}
        >
          <List.Image
            style={{
              backgroundColor: "transparent",
              marginLeft: 10,
              resizeMode: "contain",
              flex: 1,
              height: "100%",
            }}
            variant="image"
            source={skillSource}
          />
        </View>
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === 'web' ? 30 : 25,
            fontWeight: "bold",
            marginBottom: 10
          }}
        >
          {skillName}
        </Text>
        <Text style={{ color: colors.mainYellow, fontSize: Platform.OS === 'web' ? 22 : 20 }}>
          {skillDescription}
        </Text>
        <Text style={{ color: colors.mainYellow, fontSize: Platform.OS === 'web' ? 16 : 15, marginTop: 30 }}>
          {t("skillScreen.wiki")}
        </Text>
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate("Skills")}
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
    </ScrollView>
  );
};

export default Skill;
