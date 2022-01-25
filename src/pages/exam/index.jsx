import * as React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import CommonButton from '../../components/CommonButton';

import styles from './styles.js';

function ExamPage({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Câncer na gravidez');
  };
  return (
    <View style={styles.defaultContainer}>
      <ImageBackground
        source={require('../../assets/images/exam.png')}
        style={styles.image}
      >
        <Text style={styles.title}>Exame citopatológico (Papanicolau)</Text>
        <Text style={styles.text}>
          Durante o exame, o profissional de saúde (enfermeiro/médico) insere um
          espéculo na vagina, permitindo que seja visualizado o colo do útero e
          assim seja feita a coleta de material na parte externa interna do
          colo. É importante saber que tal exame não causa dor para a mulher.
        </Text>
        <Text style={styles.title}>
          Em qual intervalo de tempo deve realiza-lo?
        </Text>
        <Text style={styles.text}>
          Tal exame deve ser oferecido anualmente às mulheres entre 25 a 64 anos
          e que já tenham iniciado atividade sexual; e a cada três anos para
          aquelas com dois resultados.
        </Text>
      </ImageBackground>

      {/* <Button
        onPress={() => navigation.navigate('Câncer na gravidez')}
        title="Saiba mais"
      /> */}
      <CommonButton
        buttonText={'CÂNCER NA GRAVIDEZ'}
        handlePress={handlePress}
      />
    </View>
  );
}

export default ExamPage;
