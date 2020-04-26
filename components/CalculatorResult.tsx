import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CalculatorResultProps {
    input: string,
    result: number,
    showResult: boolean,
}

export default class CalculatorResult extends React.Component<CalculatorResultProps, any> {
    render(): React.ReactNode {
        const { input, result, showResult } = this.props;
        return (
            <View>
                <View>
                    <Text style={[styles.text, showResult ? styles.textUnfocus : styles.textFocus]}>{ input }</Text>
                </View>
                <View>
                    <Text style={[styles.text, showResult ? styles.textFocus : styles.textUnfocus]}>{ result }</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
       textAlign: 'right',
    },
    textFocus: {
        fontSize: 52,
        fontWeight: 'bold',
    },
    textUnfocus: {
        color: '#9F9F9F',
        fontSize: 32,
        fontWeight: 'bold',
    },
});
