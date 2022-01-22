import React, { useEffect } from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import styles from './styles';

const CardImage = ({ image, imgPos }) => {
  const imagePosition = useSharedValue(0);

  const imagePositionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: imagePosition.value,
        },
      ],
    };
  });

  useEffect(() => {
    imagePosition.value = withTiming(imgPos, {
      duration: 1000,
      easing: Easing.inOut(Easing.ease),
    });
  }, [imgPos]);

  return (
    <Animated.Image
      style={[styles.cardImage, imagePositionStyle]}
      source={image}
    />
  );
};

export default CardImage;
