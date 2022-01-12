import * as React from 'react';
import { View } from 'react-native';

import CommonButton from '../CommonButton';
import CardText from '../CardText';
import CardImage from '../CardImage';
import CardSeparator from '../CardSeparator';

import styles from './styles';

const CardWithButton = ({ introText }) => {
  return (
    <View style={styles.cardContainer}>
      <CardImage />

      <CardSeparator />

      <CardText />

      <CommonButton buttonText={'SAIBA MAIS'} />
    </View>
  );
};

export default CardWithButton;
