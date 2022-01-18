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
  const position = useSharedValue(300);

  const handlePress = () => {
    setIsShowCompleteText(!isShowCompleteText);
    position.value = withTiming(0, {
      duration: 2000,
      easing: Easing.bounce,
    });
  };

  const positionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: position.value,
        },
      ],
    };
  });

  return (
    <View style={styles.mainContainer}>
      {!isShowCompleteText && (
        <Image
          source={require('../../assets/images/cancer.png')}
          style={{ width: '100%', height: 160 }}
        />
      )}
      {!isShowCompleteText && <View style={styles.separator} />}
      <Text style={styles.subtitle}>{introText}</Text>
      {isShowCompleteText && <View style={styles.separator} />}
      {isShowCompleteText && (
        <Animated.Text style={[styles.completeText, positionStyle]}>
          {completeText}
        </Animated.Text>
      )}

      <View style={{ width: '80%', paddingBottom: 10 }}>
        <CommonButton
          buttonText={!isShowCompleteText ? 'SAIBA MAIS' : 'VOLTAR'}
          handlePress={handlePress}
        />
      </View>
    </View>
  );
};

export default CardWithButton;
