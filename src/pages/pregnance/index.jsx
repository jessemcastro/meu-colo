import * as React from 'react';
import { Button, View, Text } from 'react-native';

function PregnancePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 16 }}>
        Clique em saiba mais para acessar o meu citopatológico em dia
      </Text>
      <Button
        onPress={() => navigation.navigate('Rotina')}
        title="saiba mais"
      />
    </View>
  );
}

export default PregnancePage;
