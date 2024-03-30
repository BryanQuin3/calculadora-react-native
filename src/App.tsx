import React from 'react';
import {StatusBar, View} from 'react-native';
import {styles} from './config/theme/app-theme';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <CalculatorScreen />
    </View>
  );
}

export default App;
