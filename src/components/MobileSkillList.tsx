import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SingleSkill from './SingleSkill'

export const MobileSkillList = () => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();
    const { t } = useTranslation();

  return (
    <SafeAreaView style={{width: '100%', justifyContent: 'center', alignItems: 'center', marginVertical: 20}}>
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
  </SafeAreaView>
  )
}
