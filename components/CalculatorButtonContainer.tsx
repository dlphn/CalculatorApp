import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorButton from './CalculatorButton';
import { BUTTON_TYPE } from './CalculatorButton';

export default class CalculatorButtonContainer extends React.Component<any, any> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CalculatorButton operator={'AC'} type={BUTTON_TYPE.ACTION} />
                    <CalculatorButton operator={'Del'} type={BUTTON_TYPE.ACTION} />
                    <CalculatorButton operator={'%'} type={BUTTON_TYPE.ACTION} />
                    <CalculatorButton operator={'/'} type={BUTTON_TYPE.OPERATOR} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={'7'} />
                    <CalculatorButton operator={'8'} />
                    <CalculatorButton operator={'9'} />
                    <CalculatorButton operator={'x'} type={BUTTON_TYPE.OPERATOR} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={'4'} />
                    <CalculatorButton operator={'5'} />
                    <CalculatorButton operator={'6'} />
                    <CalculatorButton operator={'-'} type={BUTTON_TYPE.OPERATOR} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={'1'} />
                    <CalculatorButton operator={'2'} />
                    <CalculatorButton operator={'3'} />
                    <CalculatorButton operator={'+'} type={BUTTON_TYPE.OPERATOR} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={','} />
                    <CalculatorButton operator={'0'} />
                    <CalculatorButton operator={'()'} />
                    <CalculatorButton operator={'='} type={BUTTON_TYPE.RESULT} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
