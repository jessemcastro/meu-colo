import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.orange,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    height: 50,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default styles;
