import React, { useState } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Dimensions,
  ScrollView,
  Text,
} from "react-native";
import { Provider } from "react-native-paper";
import MemeItemModal from "../components/MemeItemModal";
import theme from "../themes/theme";
import { useTranslation } from "react-i18next";
import BackButtonWeb from "../components/BackButtonWeb";

const Memes = () => {
  const [visible, setVisible] = useState(false);
  const [images, setImages] = useState([
    { src: require(`../../assets/memes/1.jpg`) },
    { src: require(`../../assets/memes/2.jpg`) },
    { src: require(`../../assets/memes/3.jpg`) },
    { src: require(`../../assets/memes/4.jpg`) },
    { src: require(`../../assets/memes/5.jpg`) },
    { src: require(`../../assets/memes/6.jpg`) },
    { src: require(`../../assets/memes/7.jpg`) },
    { src: require(`../../assets/memes/8.jpg`) },
    { src: require(`../../assets/memes/9.jpg`) },
  ]);
  let [source, setSource] = useState(1);
  const hideModal = () => setVisible(false);
  const { colors } = theme;
  const { t } = useTranslation();

  return (
    <Provider>
      <ScrollView
        style={{ backgroundColor: colors.mainGrey }}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          maxWidth: Platform.OS === "web" ? 1920 : undefined
        }}
      >
        <FlatList
          style={{
            marginTop: Platform.OS === "web" ? 20 : 40,
            marginBottom: Platform.OS === "web" ? 20 : 80,
          }}
          numColumns={Platform.OS === "web" ? 3 : 2}
          data={images}
          renderItem={({ item }) => (
            <View
              style={{
                width:
                  Platform.OS === "web"
                    ? Dimensions.get("screen").width * 0.3
                    : Dimensions.get("screen").width * 0.45,
                height:
                  Platform.OS === "web"
                    ? Dimensions.get("screen").height * 0.55
                    : Dimensions.get("screen").height * 0.3,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setVisible(true);
                  setSource(item.src);
                }}
                style={{ flex: 1, margin: 5 }}
              >
                <ImageBackground
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                  source={item.src}
                />
              </TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  color: colors.mainYellow,
                  fontWeight: "bold",
                  marginVertical: 3,
                }}
              >
                {t("memeScreen.click")}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.src}
        />
        <MemeItemModal
          visible={visible}
          setVisible={setVisible}
          hideModal={hideModal}
          source={source}
        />
      </ScrollView>
      <BackButtonWeb/>
    </Provider>
  );
};

export default Memes;
