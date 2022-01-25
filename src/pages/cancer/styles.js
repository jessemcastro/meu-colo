import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  defaultContainer: {
    padding: '8%',
    backgroundColor: COLORS.background,
  },
  inviteTextContainer: {
    marginBottom: 6,
    width: '100%',
  },
  inviteText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
    textAlign: 'center',
  },
});

export default styles;
