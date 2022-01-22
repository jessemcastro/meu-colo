import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  defaultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8%',
    backgroundColor: COLORS.background,
  },
  inviteTextContainer: {
    backgroundColor: 'white',
    marginBottom: 6,
    width: '100%',
  },
  inviteText: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 6,
    textAlign: 'center',
    color: COLORS.orange,
  },
});

export default styles;
