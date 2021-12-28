import * as React from 'react';
import { Button, View, Text} from 'react-native';

function RoutinePage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 16}}>
          Controle sua rotina de citopatológico
        </Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Enviar"
      />
    </View>
  );
}

export default RoutinePage;