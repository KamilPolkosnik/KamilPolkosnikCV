import React from "react";
import { ImageBackground, Platform } from "react-native";
import { Modal, Portal } from "react-native-paper";

interface Props {
  visible: boolean;
  setVisible: () => void;
  hideModal: () => void;
  source: string;
}

const MemeItemModal = (props: Props) => {
  let { hideModal, visible, source } = props;

  return (
    <Portal>
      <Modal
        theme={{
          colors: {
            backdrop: "rgba(218, 175, 87, 0.8)",
          },
        }}
        contentContainerStyle={{
          alignSelf: "center",
          alignItems: "center",
          height: Platform.OS === 'web' ? "95%" : '60%',
          width: Platform.OS === 'web' ? "35%" : '90%',
        }}
        visible={visible}
        onDismiss={hideModal}
      >
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          resizeMode={Platform.OS === 'web' ? "center" : "contain"}
          source={source}
        />
      </Modal>
    </Portal>
  );
};

export default MemeItemModal;
