import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorButton from './CalculatorButton';
import { BUTTON_TYPE } from './CalculatorButton';

interface CalculatorButtonContainerProps {
    handleButtonClick: (operator: string) => any;
}

export default class CalculatorButtonContainer extends React.Component<CalculatorButtonContainerProps, any> {
    render(): React.ReactNode {
        const { handleButtonClick } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <CalculatorButton operator={'AC'} type={BUTTON_TYPE.ACTION} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'Del'} type={BUTTON_TYPE.ACTION} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'%'} type={BUTTON_TYPE.ACTION} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'/'} type={BUTTON_TYPE.OPERATOR} handleButtonClick={handleButtonClick} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={'7'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'8'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'9'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'x'} type={BUTTON_TYPE.OPERATOR} handleButtonClick={handleButtonClick} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={'4'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'5'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'6'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'-'} type={BUTTON_TYPE.OPERATOR} handleButtonClick={handleButtonClick} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={'1'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'2'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'3'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'+'} type={BUTTON_TYPE.OPERATOR} handleButtonClick={handleButtonClick} />
                </View>
                <View style={styles.row}>
                    <CalculatorButton operator={','} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'0'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'()'} handleButtonClick={handleButtonClick} />
                    <CalculatorButton operator={'='} type={BUTTON_TYPE.RESULT} handleButtonClick={handleButtonClick} />
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
