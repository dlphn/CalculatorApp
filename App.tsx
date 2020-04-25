import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculatorButtonContainer from './components/CalculatorButtonContainer';

export default function App() {
  return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text>Result</Text>
        </View>
        <View style={styles.btnContainer}>
          <CalculatorButtonContainer />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    resultContainer: {
        alignItems: 'flex-end',
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 90,
    },
    btnContainer: {
        alignItems: 'center',
        backgroundColor: '#4A547D',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 90,
    },
});
