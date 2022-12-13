import React from "react";
import { Platform, ScrollView } from "react-native";
import { Provider } from "react-native-paper";
import BackButtonWeb from "../components/BackButtonWeb";
import { MobileSkillList } from "../components/MobileSkillList";
import WebLeftSide from "../components/WebLeftSide";
import WebRightSide from "../components/WebRightSide";
import theme from "../themes/theme";

const Skills = () => {
  const { colors } = theme;

  return (
    <Provider>
    <ScrollView
      style={{ backgroundColor: colors.mainGrey }}
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        maxWidth: Platform.OS === "web" ? 1920 : undefined,
        flexDirection: Platform.OS === 'web' ? "row": 'column',
        minHeight: "100%"
      }}
    >{Platform.OS === 'web' ?
    <>
    <WebLeftSide />
    <WebRightSide />
    </>
    :
<MobileSkillList/>
    }
    </ScrollView>
        <BackButtonWeb/>
    </Provider>
  );
};

export default Skills;
