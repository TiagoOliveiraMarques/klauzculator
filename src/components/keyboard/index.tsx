import * as React from 'react';
import { Button, Theme } from '../button';

export interface IKeyboardProps {
    onClear: () => void;
    onSign: () => void;
    onRemainder: () => void;
    onDivide: () => void;
    onNumber: (value: number) => void;
    onMultiply: () => void;
    onSubtract: () => void;
    onAdd: () => void;
    onGrantTotal: () => void;
    onDot: () => void;
    onEqual: () => void;
}
export class Keyboard extends React.PureComponent<IKeyboardProps> {

    private numberDelegates: Array<() => void>;

    private constructor(props: IKeyboardProps) {
        super(props);

        this.numberDelegates = new Array(11)
            .map((value, index) => () => this.props.onNumber(index));
    }

    public render() {
        
        return (
            <div className="keyboard">
                <div className="keyboard__row">
                    <Button onClick={this.props.onClear} theme={Theme.Secondary}>C</Button>
                    <Button onClick={this.props.onSign} theme={Theme.Secondary}>+/-</Button>
                    <Button onClick={this.props.onRemainder} theme={Theme.Secondary}>%</Button>
                    <Button onClick={this.props.onDivide} theme={Theme.Secondary}>/</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={this.numberDelegates[7]}>7</Button>
                    <Button onClick={this.numberDelegates[8]}>8</Button>
                    <Button onClick={this.numberDelegates[9]}>9</Button>
                    <Button onClick={this.props.onMultiply} theme={Theme.Secondary}>X</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={this.numberDelegates[4]}>4</Button>
                    <Button onClick={this.numberDelegates[5]}>5</Button>
                    <Button onClick={this.numberDelegates[6]}>6</Button>
                    <Button onClick={this.props.onSubtract} theme={Theme.Secondary}>-</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={this.numberDelegates[1]}>1</Button>
                    <Button onClick={this.numberDelegates[2]}>2</Button>
                    <Button onClick={this.numberDelegates[3]}>3</Button>
                    <Button onClick={this.props.onAdd} theme={Theme.Secondary}>+</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={this.props.onGrantTotal}>GT</Button>
                    <Button onClick={this.numberDelegates[0]}>0</Button>
                    <Button onClick={this.props.onDot}>.</Button>
                    <Button onClick={this.props.onEqual} theme={Theme.Primary}>=</Button>
                </div>
            </div>
        )
    }
}