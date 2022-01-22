import React, { useState } from 'react';
import { Text, View } from 'react-native';
import CommonButton from '../CommonButton';
import CardImage from '../CardImage';
import CardText from '../CardText';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const CardWithButton = ({ introText, completeText }) => {
  const [isShowCompleteText, setIsShowCompleteText] = React.useState(false);
  const [imgPos, setImgPos] = useState(0);
  const [textPos, setTextPos] = useState(500);

  const handlePress = () => {
    setIsShowCompleteText(!isShowCompleteText);
    if (!isShowCompleteText) {
      setImgPos(-500);
      setTextPos(0);
    } else {
      setTextPos(500);
      setImgPos(0);
    }
  };

  return (
    <View style={[styles.cardContainer]}>
      <ScrollView style={{ width: '100%', maxHeight: 200 }}>
        <CardImage
          image={require('../../assets/images/cancer.png')}
          imgPos={imgPos}
        />
        <CardText completeText={completeText} textPos={textPos} />
      </ScrollView>

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
