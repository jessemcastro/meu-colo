import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import CardImage from '../../components/CardImage';

function AnimatedStyleUpdateExample() {
  const opacity = useSharedValue(1);
  const viewPosition = useSharedValue(500);
  const [imgPos, setImgPos] = useState(0);

  useEffect(() => {
    viewPosition.value = withTiming(0, {
      duration: 2000,
      easing: Easing.bounce,
    });
  }, []);

  const config = {
    duration: 500,
    easing: Easing.inOut(Easing.linear),
  };

  const style = useAnimatedStyle(() => {
    return {
      // width: withTiming(randomWidth.value, config),
      opacity: withTiming(opacity.value, config),
    };
  });

  const viewStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: viewPosition.value,
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#ddd',
      }}
    >
      <CardImage
        image={require('../../assets/images/cancer.png')}
        imgPositionValue={imgPos}
      />
      <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: 'black', margin: 30 },
          style,
          viewStyle,
        ]}
      />
      <Button
        title='toggle'
        onPress={() => {
          opacity.value = 0;
          setImgPos(300);
        }}
      />
    </View>
  );
}

export default AnimatedStyleUpdateExample;
