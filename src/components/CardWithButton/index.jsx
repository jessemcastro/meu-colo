import * as React from "react";
import { Text, View, Image } from "react-native";
import CommonButton from "../CommonButton";
import styles from "./styles";
import { COLORS } from "../../styles/colors";

const CardWithButton = ({ introText }) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require("../../assets/images/cancer.png")}
        style={{ width: "100%", height: 160 }}
      />
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: COLORS.orange,
          width: "30%",
          borderRadius: 5,
        }}
      />
      <Text>{introText}</Text>
      <View style={{ width: "100%" }}>
        <CommonButton buttonText={"SAIBA MAIS"} />
      </View>
    </View>
  );
};

export default CardWithButton;
