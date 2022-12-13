import React from "react";
import { View, Text, Platform } from "react-native";
import theme from "../themes/theme";

interface Props {
  firstText: string;
  secondText: string;
  thirdText: string;
  fourthText: string;
}

const SingleExperience = (props: Props) => {
  const { colors } = theme;
  return (
    <View
      style={{
        flexDirection: "row",
        width: "95%",
        height: "22%",
        marginVertical: 5,
        borderWidth: 1,
        borderColor: colors.mainYellow,
      }}
    >
      <View
        style={{
          width: "40%",
          height: "100%",
          backgroundColor: colors.mainYellow,
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: Platform.OS === "web" ? 18 : 13.5,
            color: colors.mainGrey,
            fontWeight: "bold",
          }}
        >
          {props.firstText}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: Platform.OS === "web" ? 18 : 13.5,
            color: colors.mainGrey,
          }}
        >
          {props.secondText}
        </Text>
      </View>
      <View
        style={{
          width: "60%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: Platform.OS === "web" ? 18 : 13.5,
            color: colors.mainYellow,
          }}
        >
          {props.thirdText}
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: Platform.OS === "web" ? 18 : 13.5,
            color: colors.mainYellow,
            fontWeight: "bold",
          }}
        >
          {props.fourthText}
        </Text>
      </View>
    </View>
  );
};

export default SingleExperience;
