import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import CardWithButton from '../../components/CardWithButton/index.jsx';
import CommonButton from '../../components/CommonButton/index.jsx';
import { COLORS } from '../../styles/colors.js';

import styles from './styles.js';

function CancerPage({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Exame do colo do útero');
  };
  return (
    <ScrollView>
      <View style={styles.defaultContainer}>
        <CardWithButton
          introText={'O que é?'}
          completeText={
            'É um tipo de câncer que acontece na porção inferior do útero, no colo. É decorrente da infecção pelo HPV (Papilomavírus Humano) e associada a vários fatores de risco como, condições socioeconômicas, imunossupressão, tabagismo, atividades sexuais precoces, uso de anticoncepcionais orais, múltiplos partos e múltiplos parceiros sexuais. Éle tende a evoluir lentamente, e tem grandes chances de cura quando diagnosticado precocemente.'
          }
        />
        <CardWithButton introText={'Quais os sintomas?'} />
        <CardWithButton
          introText={'Qual exame pode detectar o câncer de colo de útero?'}
        />
        <Text style={{ fontSize: 16, margin: 6, color: COLORS.gray }}>
          Clique para aprender sobre o exame citopatológico (PAPANICOLAU)
        </Text>
        <CommonButton handlePress={handlePress} buttonText={'CONTINUAR'} />
      </View>
    </ScrollView>
  );
}

export default CancerPage;
