import React from 'react';

import { ScrollView, View } from 'react-native';
import styles from './styles';
import CommonButton from '../../components/CommonButton';
import CardWithButton from '../../components/CardWithButton';

function PregnancePage({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Rotina');
  };
  return (
    <ScrollView
      style={styles.defaultContainer}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <CardWithButton
        introText={'Pode realizar esse exame mesmo estando grávida?'}
        completeText={
          'Gestantes têm o mesmo risco que não gestantes de apresentarem câncer do colo do útero ou suas lesões iniciais. O achado dessas alterações durante a gravidez reflete a oportunidade do rastreamento durante o pré-natal. Nesse caso, o exame pode ser realizado em qualquer período da gestação, de pre¬ferência até o sétimo mês.'
        }
      />

      <CardWithButton
        introText={'Pode causar algum risco à gestação?'}
        completeText={
          'Se a coleta do exame for realizada de forma adequada, não ocasiona risco para a gestação. Dessa maneira, a realização do exame citopatológico em gestantes deve seguir as recomendações de periodicidade e faixa etária como para as demais mulheres, devendo sempre ser considerada uma oportunidade realiza-lo durante o pré-natal.'
        }
      />

      <CommonButton buttonText={'ROTINA'} handlePress={handlePress} />
    </ScrollView>
  );
}
export default PregnancePage;
