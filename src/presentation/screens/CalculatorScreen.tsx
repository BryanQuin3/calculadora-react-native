import {Text, View} from 'react-native';
import {styles} from '../../config/theme/app-theme';
import {buttons} from '../../utils/constants';
import {CalculatorButton} from '../components/CalculatorButton';
import {useCalculator} from '../hooks/useCalculator';

export function CalculatorScreen() {
  const {previousNumber, getAction, formula} = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={styles.resultContainer}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
          {formula === previousNumber ? ' ' : previousNumber}
        </Text>
      </View>
      {buttons.map((row, index) => (
        <View style={styles.row} key={index}>
          {row.map((button, i) => {
            return (
              <CalculatorButton
                key={i}
                action={getAction(button.label)}
                backgroundColor={button.backgroundColor}
                doubleSize={button.doubleSize}
                label={button.label}
                textColor={button.textColor}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}
