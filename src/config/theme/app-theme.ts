import {StyleSheet} from 'react-native';

export const colors = {
  darkGray: '#16101A',
  lightGray: '#312b35',
  orange: '#ff9427',
  white: 'white',
  black: 'black',
  red: '#DF3029',
  purple: '#494BD2',
  periwinkle: '#A4A6E4',
  textPrimary: '#DCB7F8',
  textSecondary: '#594C63',
  background: '#010101',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
  },
  resultContainer: {
    paddingBottom: 20,
  },
  mainResult: {
    color: colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '400',
  },
  subResult: {
    color: colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    backgroundColor: colors.darkGray,
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: colors.textPrimary,
    fontWeight: '400',
  },
});
