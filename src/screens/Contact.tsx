import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Platform, Text, View, Linking } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../themes/theme";
import * as MailComposer from "expo-mail-composer";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { generalStyles } from "./styles/generalStyles";
import BackButtonWeb from "../components/BackButtonWeb";

const Contact = () => {
  const { colors } = theme;
  const { t } = useTranslation();
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  useEffect(() => {
    async function checkAvailability() {
      const isMailAvailable = await MailComposer.isAvailableAsync();
      setIsAvailable(isMailAvailable);
    }
    checkAvailability();
  }, []);

  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: [
        "mindstatefreedom@gmail.com",
        "kamilpolkosnik.doit@gmail.com",
      ],
    });
  };

  return (
    <SafeAreaView
      style={[
        generalStyles.safeAreaContainer,
        {
          justifyContent: "center",
        },
      ]}
    >
      {isAvailable ? (
        <View
          style={{
            width: Platform.OS === "web" ? 400 : "90%",
            alignItems: "center",
            marginBottom: Platform.OS === "web" ? 100 : 0,
            paddingHorizontal: Platform.OS === "web" ? 25 : 5,
            paddingVertical: Platform.OS === "web" ? 45 : 25,
            borderWidth: 1,
            borderColor: colors.mainYellow,
            borderRadius: 30,
          }}
        >
          <Button
            mode="contained"
            labelStyle={{ fontSize: 18, color: colors.mainGrey }}
            style={{
              backgroundColor: colors.mainYellow,
              width: Platform.OS === "web" ? 250 : "60%",
            }}
            onPress={() => sendMail()}
          >
            {t("buttons.sendMail")}
          </Button>

          <Button
            mode="contained"
            labelStyle={{ fontSize: 18, color: colors.mainGrey }}
            style={{
              backgroundColor: colors.mainYellow,
              marginTop: 20,
              width: Platform.OS === "web" ? 250 : "60%",
            }}
            onPress={() => Linking.openURL(`tel:${600469129}`)}
          >
            {t("buttons.callMe")}
          </Button>
          {showDetails ? (
            <Button
              mode="contained"
              labelStyle={{ fontSize: 18, color: colors.mainGrey }}
              style={{
                backgroundColor: colors.mainYellow,
                marginTop: 20,
                width: Platform.OS === "web" ? 250 : "60%",
              }}
              onPress={() => setShowDetails(false)}
            >
              {t("buttons.hideDetails")}
            </Button>
          ) : (
            <Button
              mode="contained"
              labelStyle={{ fontSize: 18, color: colors.mainGrey }}
              style={{
                backgroundColor: colors.mainYellow,
                marginTop: 20,
                width: Platform.OS === "web" ? 250 : "60%",
              }}
              onPress={() => setShowDetails(true)}
            >
              {t("buttons.showDetails")}
            </Button>
          )}
          {showDetails ? (
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: Platform.OS === "web" ? 22 : 20,
                  color: colors.mainYellow,
                  fontWeight: "bold",
                  marginTop: 25,
                  textAlign: "center",
                }}
              >
                mindstatefreedom@gmail.com
              </Text>
              <Text
                style={{
                  fontSize: Platform.OS === "web" ? 22 : 20,
                  color: colors.mainYellow,
                  fontWeight: "bold",
                  marginTop: 10,
                  textAlign: "center",
                }}
              >
                600-469-129
              </Text>
            </View>
          ) : null}
        </View>
      ) : (
        <View
          style={{
            width: Platform.OS === "web" ? 400 : "90%",
            alignItems: "center",
            borderWidth: 1,
            borderColor: colors.mainYellow,
            borderRadius: 30,
            paddingHorizontal: Platform.OS === "web" ? 25 : 5,
            paddingVertical: Platform.OS === "web" ? 45 : 25,
          }}
        >
          <Text
            style={{
              fontSize: Platform.OS === "web" ? 22 : 21,
              color: colors.mainYellow,
              fontWeight: "bold",
            }}
          >
            mindstatefreedom@gmail.com
          </Text>
          <Text
            style={{
              fontSize: Platform.OS === "web" ? 22 : 21,
              color: colors.mainYellow,
              fontWeight: "bold",
              marginTop: 20,
            }}
          >
            600-469-129
          </Text>
        </View>
      )}
      <BackButtonWeb/>
    </SafeAreaView>
  );
};

export default Contact;
