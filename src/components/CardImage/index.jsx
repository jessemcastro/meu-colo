import * as React from 'react';
import { Image } from 'react-native';

import styles from './styles';

const CardImage = () => {
  return (
    <Image
      style={styles.image}
      source={require('../../assets/images/cancer.png')}
    />
  );
};

export default CardImage;
