import { StyleSheet } from "react-native";
import { COLORS } from "../../styles/colors";

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.orange,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontWeight: "400",
  },
});

export default styles;
