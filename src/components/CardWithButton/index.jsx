import * as React from 'react';
import { Text, View, Image } from 'react-native';
import CommonButton from '../CommonButton';
import styles from './styles';
import { COLORS } from '../../styles/colors';
import Animated, {
  Easing,
  FlipInEasyX,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useEffect } from 'react';

const CardWithButton = ({ introText, completeText }) => {
  const [isShowCompleteText, setIsShowCompleteText] = React.useState(false);
  const textPosition = useSharedValue(-300);
  const imagePosition = useSharedValue(0);

  const handlePress = () => {
    setIsShowCompleteText(!isShowCompleteText);
    if (!isShowCompleteText) {
      textPosition.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
      imagePosition.value = withTiming(-300, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
    } else {
      textPosition.value = -300;
      imagePosition.value = withTiming(0, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      });
    }
  };

  const textPositionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: textPosition.value,
        },
      ],
    };
  });

  const imagePositionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: imagePosition.value,
        },
      ],
    };
  });

  return (
    <View style={[styles.mainContainer]}>
      {!isShowCompleteText && (
        <Animated.Image
          source={require('../../assets/images/cancer.png')}
          style={[styles.cardImage, imagePositionStyle]}
        />
      )}
      {isShowCompleteText && (
        <Animated.Text style={[styles.completeText, textPositionStyle]}>
          {completeText}
        </Animated.Text>
      )}
      <View style={styles.separator} />
      <Text style={styles.subtitle}>{introText}</Text>

      <View style={styles.cardFooter}>
        <CommonButton
          buttonText={!isShowCompleteText ? 'SAIBA MAIS' : 'VOLTAR'}
          handlePress={handlePress}
        />
      </View>
    </View>
  );
};

export default CardWithButton;
