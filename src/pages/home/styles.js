import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: '#ddd',
    height: '100%',
    backgroundColor: COLORS.background,
    padding: 12,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: COLORS.orange,
  },
  textView: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 10,
  },
  image: {
    height: 320,
    width: '100%',
    borderWidth: 0,
    borderColor: COLORS.white,
    borderRadius: 20,
  },
  button: {
    backgroundColor: COLORS.orange,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
});

export default styles;
