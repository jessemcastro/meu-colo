import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { COLORS } from '../../styles/colors.js'

function CancerPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize: 16}}>
           Clique em saiba mais para aprender sobre o exame citopatológico (PAPANICOLAU)
        </Text>
      <Button
        onPress={() => navigation.navigate('Exame')}
        title="Saiba mais"
        color={COLORS.orange}
      />
    </View>
  );
}

export default CancerPage;