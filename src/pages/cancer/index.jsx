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
        <CardWithButton
          introText={'Quais os sintomas?'}
          completeText={
            'Em alguns casos podem não haver sintomas. Em outros, pode acontecer sangramento anormal e dor.'
          }
        />
        <CardWithButton
          introText={'Qual exame pode detectar o câncer de colo de útero?'}
          completeText={
            'No Brasil, o método utilizado para o rastreamento desse tipo de câncer e de suas lesões iniciais é o exame citológico ou Papanicolau, conhecido popularmente como exame de prevenção. Ele também contribui no reconhecimento de condições infecciosas e/ou inflamatórias da região vaginal.'
          }
        />

        <View style={{ backgroundColor: 'white', marginBottom: 6 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              margin: 6,
              textAlign: 'center',
              color: COLORS.orange,
            }}
          >
            Clique para aprender sobre o exame citopatológico (PAPANICOLAU)
          </Text>
        </View>
        <CommonButton handlePress={handlePress} buttonText={'CONTINUAR'} />
      </View>
    </ScrollView>
  );
}

export default CancerPage;
