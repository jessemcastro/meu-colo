import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

const CardText = ({ completeText }) => {
  return (
    <Animated.View style={[styles.cardText]}>
      <Animated.Text style={[styles.completeText]}>
        {completeText}
      </Animated.Text>
    </Animated.View>
  );
};

export default CardText;
