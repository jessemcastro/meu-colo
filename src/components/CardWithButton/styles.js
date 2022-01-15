import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    borderColor: COLORS.gray,
    borderWidth: 2,
    backgroundColor: COLORS.white,
  },
  subtitle: {
    margin: 10,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.orange,
  },
  completeText: {
    margin: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.orange,
    width: '30%',
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default styles;
