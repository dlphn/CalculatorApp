import { StyleSheet, View } from 'react-native';
import CalculatorResult from './CalculatorResult';
import CalculatorButtonContainer from './CalculatorButtonContainer';
import React from 'react';

const defaultState = {
    input: '',
    result: null,
    showResult: false,
    autoCompute: false,
    hasOperatorInput: false,
}

export default class Calculator extends React.Component<any, any> {
    constructor() {
        super();
        this.state = defaultState;
    }

    render(): React.ReactNode {
        return (
            <View style={styles.container}>
                <View style={styles.resultContainer}>
                    <CalculatorResult input={this.state.input} result={this.state.result} showResult={this.state.showResult} />
                </View>
                <View style={styles.btnContainer}>
                    <CalculatorButtonContainer handleButtonClick={this.handleButtonClick.bind(this)} />
                </View>
            </View>
        );
    }

    reset(): void {
        this.setState(defaultState);
    }

    handleButtonClick(operator: string): void {
        const previousInput = this.state.showResult ? this.state.result : this.state.input;
        switch(operator) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                const newInput = this.state.showResult ? operator : previousInput + operator;
                let newResult;
                try {
                    newResult = eval(newInput);
                } catch(e) {
                    newResult = null;
                }
                this.setState({
                   input: newInput,
                   showResult: false,
                   result: this.state.autoCompute ? newResult : null,
                   hasOperatorInput: true,
                });
                break;
            case '+':
            case '-':
            case 'x':
            case '/':
            case ',':
            case '%': // not working
            case '()':
                let newOperator;
                switch(operator) {
                    case ',':
                        newOperator = '.';
                        break;
                    case 'x':
                        newOperator = '*';
                        break;
                    case '()':
                        newOperator = this.state.hasOperatorInput ? ')' : '(';
                        break;
                    default:
                        newOperator = operator;
                }
                this.setState({
                    input: previousInput + newOperator,
                    showResult: false,
                    autoCompute: true,
                    hasOperatorInput: newOperator === ')',
                });
                break;
            case '=':
                try {
                    newResult = eval(this.state.input);
                } catch (e) {
                    newResult = 'NaN';
                }
                this.setState({ result: newResult, showResult: true, autoCompute: false });
                break;
            case 'AC':
                this.reset();
                break;
            case 'Del':
                this.setState({
                    input: this.state.input.slice(0, -1),
                    showResult: false,
                });
                break;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultContainer: {
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
