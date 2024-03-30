import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';
import {ButtonType} from '../../utils/types.definitions';

export const CalculatorButton = ({
  label: text,
  backgroundColor = colors.darkGray,
  doubleSize = false,
  textColor = colors.textPrimary,
  action = () => {},
}: ButtonType) => {
  return (
    <Pressable
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: pressed ? colors.lightGray : backgroundColor,
        width: doubleSize ? 180 : 80,
      })}
      onPress={() => action(text)}>
      <Text
        style={{
          ...styles.buttonText,
          color: textColor,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};
