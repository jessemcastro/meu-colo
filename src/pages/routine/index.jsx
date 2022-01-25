import React, { useState } from 'react';
import { View, Text, Alert, TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import CommonButton from '../../components/CommonButton';
import { COLORS } from '../../styles/colors';

import styles from './styles';

function RoutinePage({ navigation }) {
  const handlePress = () => {
    Alert.alert('Ops', 'Ainda estamos trabalhando nisso!');
  };

  return (
    <View style={styles.defaultContainer}>
      <Text style={styles.title}>
        Controle sua rotina de exame citopatológico
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Nome'
        keyboardType='default'
        placeholderTextColor={COLORS.white}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        keyboardType='email-address'
        placeholderTextColor={COLORS.white}
      />
      <TextInput
        style={styles.input}
        placeholder='Data do último exame'
        placeholderTextColor={COLORS.white}
      />

      <CommonButton
        buttonText={'Enviar'}
        handlePress={handlePress}
      ></CommonButton>
    </View>
  );
}

export default RoutinePage;
