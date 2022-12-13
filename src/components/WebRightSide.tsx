import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import theme from "../themes/theme";
import SingleSkill from "./SingleSkill";

const WebRightSide = () => {
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
        source={require("../../assets/skills/firebase.png")}
        text={"Firebase"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Firebase', skillDescription:t('skillScreen.firebase'), skillSource: require('../../assets/skills/firebase.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/Axios.png")}
        text={"Axios"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Axios', skillDescription:t('skillScreen.axios'), skillSource: require('../../assets/skills/Axios.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/git.png")}
        text={"Git/Github"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Git/Github', skillDescription:t('skillScreen.git'), skillSource: require('../../assets/skills/git.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/jira.png")}
        text={"Jira"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Jira', skillDescription:t('skillScreen.jira'), skillSource: require('../../assets/skills/jira.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/bitbucket.png")}
        text={"Bitbucket"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Bitbucket', skillDescription:t('skillScreen.bitbucket'), skillSource: require('../../assets/skills/bitbucket.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/android.png")}
        text={"Android Studio"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Android Studio', skillDescription:t('skillScreen.android'), skillSource: require('../../assets/skills/android.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/expo.png")}
        text={"Expo"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Expo', skillDescription:t('skillScreen.expo'), skillSource: require('../../assets/skills/expo.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/wordpress.png")}
        text={"Wordpress/WooCommerce"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Wordpress/WooCommerce', skillDescription:t('skillScreen.wordpress'), skillSource: require('../../assets/skills/wordpress.png')})}
      />
      <SingleSkill
        source={require("../../assets/skills/elementor.png")}
        text={"Elementor"}
        navigate={() => navigation.navigate('Skill', {skillName: 'Elementor', skillDescription:t('skillScreen.elementor'), skillSource: require('../../assets/skills/elementor.png')})}
      />
    </View>
  );
};

export default WebRightSide;
