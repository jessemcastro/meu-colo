import React from 'react';

import { Image, Text, View } from 'react-native';
import styles from './styles';
import CommonButton from '../../components/CommonButton';

function PregnancePage({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Rotina');
  };
  return (
    <View style={styles.defaultContainer}>
      <Image
        source={require('../../assets/images/cancer.png')}
        style={{ width: '100%', height: 160 }}
      />

      {/* <Text style={styles.text}>
        Clique em saiba mais para acessar o meu citopatológico em dia
      </Text> */}
      <CommonButton buttonText={'ROTINA'} handlePress={handlePress} />
    </View>
  );
}
export default PregnancePage;
