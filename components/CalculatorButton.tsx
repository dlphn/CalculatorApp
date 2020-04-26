import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


interface CalculatorButtonProps {
    operator: string;
    type?: string;
    handleButtonClick: (operator: string) => any;
}

export const BUTTON_TYPE = Object.freeze({
    OPERATOR: 'operator',
    ACTION: 'action',
    RESULT: 'result',
});

export default class CalculatorButton extends React.Component<CalculatorButtonProps, any> {
    render(): React.ReactNode {
        const { operator, type, handleButtonClick } = this.props;

        return (
            <TouchableOpacity style={[styles.btn, type && getBtnStyle(type)]} onPress={() => handleButtonClick(operator)}>
                { operator === 'Del' ? <Icon name='backspace' containerStyle={styles.icon} />
                : <Text style={[styles.text, type && getBtnTextStyle(type)]}>{ operator }</Text>}
            </TouchableOpacity>
        );
    }
}

const getBtnStyle = (type: string): any => {
    switch(type) {
        case BUTTON_TYPE.OPERATOR:
            return styles.btnOperator;
        case BUTTON_TYPE.ACTION:
            return styles.btnAction;
        case BUTTON_TYPE.RESULT:
            return styles.btnResult;
        default:
            return styles.btn;
    }
}

const getBtnTextStyle = (type: string): any => {
    if (type === BUTTON_TYPE.ACTION) return styles.textBlack;
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        flex: 1,
        margin: 6,
    },
    btnOperator: {
        backgroundColor: '#95AAFB',
    },
    btnAction: {
        backgroundColor: '#E1E7FC',
    },
    btnResult: {
        backgroundColor: '#E6AF57',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 22,
        margin: 20,
    },
    icon: {
        margin: 24,
    },
    textBlack: {
        color: '#000000',
    },
});
