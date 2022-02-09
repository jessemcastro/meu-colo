import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CommonButton from '../CommonButton';
import CardImage from '../CardImage';
import CardText from '../CardText';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const CardWithButton = ({ introText, completeText }) => {
  return (
    <View style={[styles.cardContainer]}>
      <Text style={styles.subtitle}>{introText}</Text>
      <View style={styles.separator} />
      <CardText completeText={completeText} />
    </View>
  );
};

export default CardWithButton;
