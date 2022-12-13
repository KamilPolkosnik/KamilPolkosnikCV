import React from "react";
import { TouchableOpacity, Text, Dimensions, Platform } from "react-native";
import { Avatar } from "react-native-paper";
import { List, MD3Colors } from "react-native-paper";
import theme from "../themes/theme";

interface Props {
  source: any;
  text: string;
  navigate: () => void;
}

const SingleSkill = (props: Props) => {
  const { colors } = theme;

  return (
    <TouchableOpacity
    onPress={props.navigate}
      style={{
        width: Platform.OS === 'web' ? "90%" : '80%',
        height: Platform.OS === 'web' ? "10%": 'auto',
        paddingVertical: 15,
        minWidth: 250,
        minHeight: 60,
        margin: 10,
        backgroundColor: colors.mainGrey,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderWidth: 3,
        borderColor: colors.mainYellow,
        borderRadius: 20,
      }}
    >
      <List.Image
        variant="image"
        source={props.source}
        style={{
          backgroundColor: "transparent",
          marginLeft: 10,
          resizeMode: "contain",
          flex: 1,
        }}
      />
      <Text style={{ color: colors.mainYellow, fontSize: Platform.OS === 'web' ? 22 : 20, flex: 1 }}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default SingleSkill;
