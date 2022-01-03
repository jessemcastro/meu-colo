import React from 'react';

import { View } from 'react-native';

import { CustomSlider } from './CustomSlider';
import { data } from './data';

function PregnancePage({ navigation }) {
  return (
    // <View style={styles.defaultContainer}>
    //   <Text style={styles.text}>
    //     Clique em saiba mais para acessar o meu citopatológico em dia
    //   </Text>

    //   <Button
    //     onPress={() => navigation.navigate('Rotina')}
    //     title="saiba mais"
    //   />

    // </View>
    <View>
      <CustomSlider data={data} />
    </View>
  );
}

export default PregnancePage;
