import * as React from "react";
import { Alert, Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";

const CommonButton = ({ handlePress, buttonText }) => {
  return (
    <RectButton style={styles.buttonContainer} onPress={handlePress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </RectButton>
  );
};

export default CommonButton;
