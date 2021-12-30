import * as React from 'react';
import { Button, View, Text, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import CommonButton from '../../components/CommonButton';

import styles from './styles';

function RoutinePage({ navigation }) {
  return (
    <View style={styles.defaultContainer}>
      <Text style={styles.title}>
        Controle sua rotina de exame citopatológico
      </Text>

      <TextInput
        style={styles.input}
        autoFocus
        // onChangeText={onChangeNumber}
        // value={email}
        placeholder="Digite seu endereço de email:"
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={text}
        placeholder="Data do último exame"
        keyboardType="numeric"
        maxLength={10}
      ></TextInput>

      {/* <Button
        onPress={() => Alert.alert("NOT IMPLEMENTED")}
        title="Enviar"
      /> */}
      <CommonButton
        buttonText={'Enviar'}
        handlePress={Alert.alert('NOT IMPLEMENTED')}
      ></CommonButton>
    </View>
  );
}

export default RoutinePage;
