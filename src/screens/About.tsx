import React from "react";
import {
  View,
  Text,
  Platform,
  ImageBackground,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import theme from "../themes/theme";
import BackButtonWeb from "../components/BackButtonWeb";
import { Provider } from "react-native-paper";

const About = () => {
  const { t } = useTranslation();
  const { colors } = theme;

  return (
    <Provider>
    <ScrollView
      style={{ backgroundColor: colors.mainGrey }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: Platform.OS === "web" ? 1920 : undefined
      }}
    >
      <View
        style={{
          width: Platform.OS === "web" ? "65%" : "90%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
          marginTop: 60,
        }}
      >
        <Text
          style={{
            fontSize: Platform.OS === "web" ? 25 : 18,
            textAlign: "center",
            color: colors.mainYellow,
            marginTop: 20,
          }}
        >
          {t("aboutScreen.me")}{" "}
          <FontAwesome5 name="laugh-wink" size={30} color={colors.mainYellow} />
        </Text>
        <View
          style={{
            height: Platform.OS === "web" ? 550 : 450,
            width: Platform.OS === "web" ? 550 : "95%",
            alignItems: "center",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            source={require("../../assets/toja3.jpg")}
          />
        </View>
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === "web" ? 25 : 18,
            marginTop: 20,
            textAlign: Platform.OS === "web" ? "left" : "center",
          }}
        >
          {t("aboutScreen.life")}
        </Text>
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === "web" ? 25 : 18,
            marginTop: 20,
            textAlign: Platform.OS === "web" ? "left" : "center",
          }}
        >
          {t("aboutScreen.work")}
        </Text>
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === "web" ? 20 : 15,
            fontWeight: "bold",
            marginTop: 25,
            textAlign: "center",
          }}
        >
          {t("aboutScreen.dishes")}
        </Text>
        <View
          style={{ flexDirection: Platform.OS === "web" ? "row" : "column" }}
        >
          <View
            style={{
              height: Platform.OS === "web" ? 450 : 300,
              width: Platform.OS === "web" ? 500 : 350,
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <ImageBackground
              style={{
                width: Platform.OS === "web" ? 450 : 350,
                height: Platform.OS === "web" ? 500 : 350,
              }}
              resizeMode="contain"
              source={require("../../assets/stek.jpg")}
            />
          </View>
          <View
            style={{
              height: Platform.OS === "web" ? 550 : 300,
              width: Platform.OS === "web" ? 550 : 350,
              alignItems: "center",
            }}
          >
            <ImageBackground
              style={{
                width: Platform.OS === "web" ? 550 : 350,
                height: Platform.OS === "web" ? 550 : 350,
              }}
              resizeMode="contain"
              source={require("../../assets/tatar.jpg")}
            />
          </View>
        </View>
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === "web" ? 25 : 18,
            marginVertical: Platform.OS === "web" ? 0 : 20,
            textAlign: Platform.OS === "web" ? "left" : "center",
          }}
        >
          {t("aboutScreen.programing")}
        </Text>
      </View>
    </ScrollView>
    <BackButtonWeb/> 
    </Provider>
  );
};

export default About;
