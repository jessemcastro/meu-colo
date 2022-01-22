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
  cardContainer: {
    width: '100%',
    maxHeight: '74%',
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    backgroundColor: COLORS.white,
    // flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    marginBottom: '20%',
  },
  subtitle: {
    marginVertical: 20,
    paddingHorizontal: 24,
    textAlign: 'center',
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
    marginTop: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardFooter: {
    width: '80%',
    paddingVertical: 20,
  },
});

export default styles;
