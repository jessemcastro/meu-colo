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
  cardImage: {
    width: '100%',
    height: 160,
  },
  cardFooter: {
    width: '80%',
    paddingBottom: 10,
  },
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
