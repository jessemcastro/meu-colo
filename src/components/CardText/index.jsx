import * as React from 'react';

import { View, Text } from 'react-native-web';

import styles from './styles';

const CardText = () => {
  return (
    <View style={styles.text}>
      <Text>
        O trecho padrão original de Lorem Ipsum, usado desde o século XVI, está
        reproduzido abaixo para os interessados. Seções 1.10.32 e 1.10.33 de "de
        Finibus Bonorum et Malorum" de Cicero também foram reproduzidas abaixo
        em sua forma exata original, acompanhada das versões para o inglês da
        tradução feita por H. Rackham em 1914.
      </Text>
    </View>
  );
};

export default CardText;
