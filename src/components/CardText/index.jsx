import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

const CardText = ({ completeText, textPos }) => {
  const textPosition = useSharedValue(0);

  const textPositionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: textPosition.value,
        },
      ],
    };
  });

  useEffect(() => {
    textPosition.value = withTiming(textPos, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [textPos]);

  return (
    <Animated.View style={[styles.cardText, textPositionStyle]}>
      <Animated.Text style={[styles.completeText]}>
        {completeText}
      </Animated.Text>
    </Animated.View>
  );
};

export default CardText;
