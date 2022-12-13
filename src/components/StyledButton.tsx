import React from "react";
import { Platform } from "react-native";
import { Button } from "react-native-paper";
import theme from "../themes/theme";

const { colors } = theme;

interface Props {
  onPress: () => void;
  label: string;
  styleBackground: any;
  fontSize: number;
}

export const StyledButton = (props: Props) => {
  return (
    <Button
      onPress={props.onPress}
      mode="contained"
      labelStyle={{ fontSize: props.fontSize, color: colors.mainGrey }}
      style={[
        {
          backgroundColor: colors.mainYellow,
          width: Platform.OS === "web" ? "100%" : 250,
        },
        props.styleBackground,
      ]}
    >
      {props.label}
    </Button>
  );
};
