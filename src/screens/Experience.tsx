import React from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButtonWeb from '../components/BackButtonWeb'
import SingleExperience from '../components/SingleExperience'
import theme from '../themes/theme'
import { generalStyles } from './styles/generalStyles'

const Experience = () => {

  const { colors } = theme;
  const { t } = useTranslation();
  
  return (
    <SafeAreaView
      style={[
        generalStyles.safeAreaContainer,
        {justifyContent: 'center'}
      ]}
    >
      <View style={{width: Platform.OS === 'web' ? '95%' : '95%', height: Platform.OS === 'web' ? '95%' : '95%', borderWidth: 3, borderColor: colors.mainYellow, borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
        <SingleExperience firstText='Wordpress/WooCommerce Developer 04.2021-10.2021' secondText={t('experienceScreen.self')} thirdText={t('experienceScreen.createWordpress')} fourthText={t('experienceScreen.techWordpress')}/>
        <SingleExperience firstText='Web Developer 10.2021-04.2022' secondText={t('experienceScreen.self')} thirdText={t('experienceScreen.createWeb')} fourthText={t('experienceScreen.techWeb')}/>
        <SingleExperience firstText='React/React-Native Developer Internship 04.2022-07.2022' secondText={t('experienceScreen.moose')} thirdText={t('experienceScreen.createIntern')} fourthText={t('experienceScreen.techIntern')}/>
        <SingleExperience firstText={t('experienceScreen.currently')} secondText={t('experienceScreen.moose')} thirdText={t('experienceScreen.createWork')} fourthText={t('experienceScreen.techWork')}/>
      </View>
      <BackButtonWeb/>
    </SafeAreaView>
  )
}

export default Experience