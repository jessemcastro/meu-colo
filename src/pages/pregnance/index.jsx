import React from 'react';

import { Image, Text, View } from 'react-native';
import styles from './styles';
import CommonButton from '../../components/CommonButton';
import { COLORS } from '../../styles/colors';
import CardImage from '../../components/CardImage';
import CardSeparator from '../../components/CardSeparator';
import CardText from '../../components/CardText';
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
