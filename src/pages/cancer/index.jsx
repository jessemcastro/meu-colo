import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardWithButton from '../../components/CardWithButton/index.jsx';
import CommonButton from '../../components/CommonButton/index.jsx';

import styles from './styles.js';

function CancerPage({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Exame');
  };
  return (
    <ScrollView>
      <View style={styles.defaultContainer}>
        <CardWithButton
          introText={
            'É um tipo de câncer que acontece na porção inferior do útero, no colo.'
          }
        />
        <CardWithButton
          introText={
            'É um tipo de câncer que acontece na porção inferior do útero, no colo.'
          }
        />
        <CardWithButton
          introText={
            'É um tipo de câncer que acontece na porção inferior do útero, no colo.'
          }
        />
        <Text style={{ fontSize: 16 }}>
          Clique em saiba mais para aprender sobre o exame citopatológico
          (PAPANICOLAU)
        </Text>
        <CommonButton handlePress={handlePress} buttonText={'SAIBA MAIS'} />
      </View>
    </ScrollView>
  );
}

export default CancerPage;
