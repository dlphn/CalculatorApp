import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    operator: string;
    type?: string;
}

export const BUTTON_TYPE = Object.freeze({
    OPERATOR: 'operator',
    ACTION: 'action',
    RESULT: 'result',
});

export default class CalculatorButton extends React.Component<Props, any> {
    render() {
        const { operator, type } = this.props;

        return (
            <TouchableOpacity style={[styles.btn, type && getBtnStyle(type)]} onPress={() => {}}>
                <Text style={[styles.text, type && getBtnTextStyle(type)]}>{ operator }</Text>
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
        margin: 24,
    },
    textBlack: {
        color: '#000000',
    },
});
