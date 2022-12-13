import { Platform, StyleSheet } from "react-native"
import theme from "../../themes/theme"

const { colors } = theme;

export const generalStyles = StyleSheet.create({
    safeAreaContainer:{        
    minHeight: "100%",
    width: "100%",
    backgroundColor: colors.mainGrey,
    alignItems: "center",
    alignSelf: 'center',
    maxWidth: Platform.OS === "web" ? 1920 : undefined,
    maxHeight: Platform.OS === 'web' ? 1080 : undefined,
    }
  })