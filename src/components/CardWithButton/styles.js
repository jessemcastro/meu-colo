import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: '84%',
    maxHeight: '74%',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,

    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: '20%',
  },
});

export default styles;
