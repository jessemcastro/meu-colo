import * as React from 'react';
import { Text, View, Image } from 'react-native';
import CommonButton from '../CommonButton';
import styles from './styles';
import { COLORS } from '../../styles/colors';

const CardWithButton = ({ introText, completeText }) => {
  const [isShowCompleteText, setIsShowCompleteText] = React.useState(false);

  const handlePress = () => {
    setIsShowCompleteText(!isShowCompleteText);
  };

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
        <Text style={styles.completeText}>{completeText}</Text>
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
