import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.orange,
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingBottom: '2%',
  },
  text: {
    fontSize: 20,
    textAlign: 'justify',
    color: COLORS.white,
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingBottom: '12%',
  },

  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
