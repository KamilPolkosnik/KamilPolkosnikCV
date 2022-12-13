import React, { useState } from "react";
import { View, Text, Platform } from "react-native";
import { StyledButton } from "../components/StyledButton";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import theme from "../themes/theme";
import { useTranslation } from "react-i18next";
import { Button, Provider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { generalStyles } from "./styles/generalStyles";
import MemeModal from "../components/MemeModal";

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { colors } = theme;

  const lngs: any = {
    pl: { nativeName: "Polski" },
    en: { nativeName: "English" },
  };

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [visible, setVisible] = useState<boolean>(false)

  return (
    <Provider>
    <SafeAreaView
      style={[
        generalStyles.safeAreaContainer,
        {
          justifyContent:
            Platform.OS === "web" ? "space-around" : "space-evenly",
          flexDirection: Platform.OS === "web" ? "row" : "column"
        },
      ]}
    >
      <View
        style={{
          alignItems: "center",
          width: Platform.OS === "web" ? "40%" : "90%",
        }}
      >
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === "web" ? 35 : 25,
            textAlign: "center",
          }}
        >
          {t("hello")}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: Platform.OS === "web" ? 36 : 30,
            }}
          >
            {t("developer")}
          </Text>
        </Text>
        <Text
          style={{
            color: colors.mainYellow,
            fontSize: Platform.OS === "web" ? 33 : 25,
            textAlign: "center",
            marginVertical: 20,
          }}
        >
          {t("invite")}
        </Text>
        <SimpleLineIcons name="emotsmile" size={35} color={colors.mainYellow} />
      </View>
      <View
        style={{
          height: Platform.OS === "web" ? "50%" : "35%",
          width: Platform.OS === "web" ? "20%" : undefined,
          marginBottom: Platform.OS === "web" ? undefined : 40,
          justifyContent: "space-between",
          alignSelf: "center",
        }}
      >
        <StyledButton
          fontSize={Platform.OS === "web" ? 18 : 17}
          label={t("buttons.about")}
          onPress={() => navigation.navigate("About")}
        />
        <StyledButton
          fontSize={Platform.OS === "web" ? 18 : 17}
          label={t("buttons.skills")}
          onPress={() => navigation.navigate("Skills")}
        />
        <StyledButton
          fontSize={Platform.OS === "web" ? 18 : 17}
          label={t("buttons.experience")}
          onPress={() => navigation.navigate("Experience")}
        />
        <StyledButton
          fontSize={Platform.OS === "web" ? 18 : 17}
          label={t("buttons.contact")}
          onPress={() => navigation.navigate("Contact")}
        />
        <StyledButton
          fontSize={Platform.OS === "web" ? 18 : 17}
          label={t("buttons.memes")}
          onPress={() => showModal()}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 20,
          flexDirection: "row",
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
      >
        {Object.keys(lngs).map((lng) => (
          <Button
            buttonColor={colors.mainYellow}
            textColor={colors.mainGrey}
            style={{
              borderRadius: 10,
              borderColor: colors.mainYellow,
              borderWidth: 0.7,
              margin: 1.5,
            }}
            mode="contained"
            key={lng}
            onPress={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </Button>
        ))}
      </View>
      <MemeModal visible={visible} setVisible={setVisible} hideModal={hideModal}/>
    </SafeAreaView>
    </Provider>
  );
};

export default Home;
