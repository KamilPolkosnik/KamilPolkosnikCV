import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import theme from "../themes/theme";
import SingleSkill from "./SingleSkill";

const WebLeftSide = () => {

    const { colors } = theme;
    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { t } = useTranslation();

  return (
    <View
      style={{
        width: "50%",
        minHeight: "100%",
        backgroundColor: colors.mainGrey,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
      }}
    >
      <SingleSkill
        source={require("../../assets/skills/react.png")}
        text={"React/React-Native"}
        navigate={() => navigation.navigate('Skill', {skillName: 'React', skillDescription:t('skillScreen.react'), skillSource: require('../../assets/skills/react.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/js.png")}
        text={"JavaScript"}
        navigate={() => navigation.navigate('Skill', {skillName: 'JavaScript', skillDescription:t('skillScreen.js'), skillSource: require('../../assets/skills/js.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/ts.png")}
        text={"TypeScript"}
        navigate={() => navigation.navigate('Skill', {skillName: 'TypeScript', skillDescription:t('skillScreen.ts'), skillSource: require('../../assets/skills/ts.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/redux.png")}
        text={"Redux"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Redux', skillDescription:t('skillScreen.redux'), skillSource: require('../../assets/skills/redux.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/node.png")}
        text={"Node.js"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Node.JS', skillDescription:t('skillScreen.node'), skillSource: require('../../assets/skills/node.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/paper.png")}
        text={"Styled components"}
        navigate={() => navigation.navigate('Skill', {skillName: 'React-Native-Paper', skillDescription:t('skillScreen.paper'), skillSource: require('../../assets/skills/paper.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/html.png")}
        text={"HTML"}
        navigate={() => navigation.navigate('Skill', {skillName: 'HTML', skillDescription:t('skillScreen.html'), skillSource: require('../../assets/skills/html.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/css.png")}
        text={"CSS"}
        navigate={() => navigation.navigate('Skill', {skillName: 'CSS', skillDescription:t('skillScreen.css'), skillSource: require('../../assets/skills/css.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/sass.png")}
        text={"SASS"}
        navigate={() => navigation.navigate('Skill', {skillName: 'SASS', skillDescription:t('skillScreen.sass'), skillSource: require('../../assets/skills/sass.png')})}
      />
    </View>
  );
};

export default WebLeftSide;
