import React from 'react';

import { View } from 'react-native';
import styles from './styles';
import CommonButton from '../../components/CommonButton';
import CardWithButton from '../../components/CardWithButton';

function PregnancePage({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Rotina');
  };
  return (
    <View style={styles.defaultContainer}>
      <CardWithButton />

      <CommonButton buttonText={'ROTINA'} handlePress={handlePress} />
    </View>
  );
}
export default PregnancePage;
