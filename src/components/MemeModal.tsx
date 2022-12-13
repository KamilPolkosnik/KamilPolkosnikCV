import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import React from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import { Modal, Portal, Text, Button } from "react-native-paper";
import theme from "../themes/theme";

interface Props {
  visible: boolean;
  setVisible: () => void;
  hideModal: () => void;
}

const MemeModal = (props: Props) => {
        
  const { colors } = theme;
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { t } = useTranslation();
  const {hideModal, visible} = props;

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: colors.mainYellow,
            paddingHorizontal: 40,
            paddingTop: 40,
            paddingBottom: 25,
            width: Platform.OS === "web" ? "40%" : "80%",
            alignItems: "center",
            borderRadius: 30,
          }}
        >
          <Text
            style={{
              fontSize: Platform.OS === "web" ? 22 : 20,
              color: "red",
              fontWeight: "bold",
            }}
          >
            {t('memeModal.attention')}
          </Text>
          <Text
            style={{
              fontSize: Platform.OS === "web" ? 20 : 18,
              marginTop: 10,
              lineHeight: 30,
              color: colors.mainGrey,
              textAlign: "center",
            }}
          >
{t('memeModal.content')}
          </Text>
          <View
            style={{ flexDirection: "row", marginTop: 30, alignSelf: "center" }}
          >
            <Button
              style={{
                backgroundColor: colors.mainGrey,
                width: Platform.OS === "web" ? 120 : "45%",
                marginRight: 20,
              }}
              textColor={colors.mainYellow}
              mode="contained"
              onPress={() => hideModal()}
            >
              {t('buttons.no')}
            </Button>
            <Button
              style={{
                backgroundColor: colors.mainGrey,
                width: Platform.OS === "web" ? 120 : "45%",
              }}
              textColor={colors.mainYellow}
              mode="contained"
              onPress={() => {
                navigation.navigate('Memes')
                hideModal()
        }}
            >
              {t('buttons.yes')}
            </Button>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default MemeModal;
