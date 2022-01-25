import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    maxHeight: '74%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    marginBottom: '20%',
  },
  subtitle: {
    marginVertical: 4,
    paddingHorizontal: 12,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.orange,
  },
  completeText: {
    margin: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  separator: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.orange,
    width: '30%',
    borderRadius: 5,
    marginTop: 2,
  },
  cardFooter: {
    width: '80%',
    paddingVertical: 20,
  },
});

export default styles;
