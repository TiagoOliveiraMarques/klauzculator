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

        this.numberDelegates = [];
        for (let i = 0; i < 11; i++) {
            this.numberDelegates.push(() => this.props.onNumber(i));
        }
    }

    public componentDidMount() {
        this.registerKeyboardEvents();
    }

    public componentWillUnmount() {
        this.unregisterKeyboardEvents();
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

    private registerKeyboardEvents(): void {
        document.onkeyup = this.handleKeyboardEvent;
    }

    private unregisterKeyboardEvents(): void {
        document.onkeyup = null;
    }

    private handleKeyboardEvent = (evt: KeyboardEvent): void => {
        const numberCandidate = parseInt(evt.key, 10);
        if (Number.isInteger(numberCandidate)) {
            return this.props.onNumber(numberCandidate);
        }

        switch (evt.code) {
            case 'NumpadDecimal':
                return this.props.onDot();
            case 'NumpadAdd':
                return this.props.onAdd();
            case 'NumpadSubtract':
                return this.props.onSubtract();
            case 'NumpadDivide':
                return this.props.onDivide();
            case 'NumpadMultiply':
                return this.props.onMultiply();
            case 'NumpadEnter':
                return this.props.onEqual();
        }
    }

}