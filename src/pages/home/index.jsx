import Animated, { FadeInDown } from 'react-native-reanimated';
import { View, Text } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

function Home({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Câncer de colo do útero');
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.Image
        entering={FadeInDown.duration(1000)}
        source={require('../../assets/images/meucolo.png')}
        style={styles.image}
      />
      <Animated.View
        style={[styles.textView]}
        entering={FadeInDown.duration(2000)}
      >
        <Text style={styles.text}>
          O rastreamento do câncer de colo uterino é fundamental, pois, além de
          possibilitar a prevenção da doença invasiva, leva a um aumento
          significativo das taxas de cura da neoplasia
        </Text>
      </Animated.View>

      <Animated.View
        entering={FadeInDown.duration(3000)}
        style={{ width: '100%' }}
      >
        <RectButton style={styles.button} onPress={handlePress}>
          <Text style={styles.textButton}>APRENDA MAIS</Text>
        </RectButton>
      </Animated.View>
    </View>
  );
}

export default Home;
