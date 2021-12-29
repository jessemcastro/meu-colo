import * as React from "react";
import { Button, View, Text } from "react-native";
import CommonButton from "../../components/CommonButton";

function ExamPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 16 }}>
        Clique em saiba mais para aprender mais sobre o exame citopatológico e a
        gravidez
      </Text>
      <Button
        onPress={() => navigation.navigate("Câncer na gravidez")}
        title="saiba mais"
      />
      <CommonButton buttonText={"SAIBA MAIS"} />
    </View>
  );
}

export default ExamPage;
