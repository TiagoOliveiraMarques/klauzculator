import * as React from 'react';
import { noop } from 'src/utils/noop';
import { Display } from '../display';
import { Keyboard } from '../keyboard';

// tslint:disable-next-line:no-empty-interface
export interface ICalculatorProps {

}

// tslint:disable-next-line:no-empty-interface
export interface ICalculatorState {

}

export class Calculator extends React.Component<ICalculatorProps, ICalculatorState> {

    public render() {
        return (
            <div className="calculator">
                <Display expression="23+45" evaluation="68" lastOperation="1+1=2"/>
                <Keyboard 
                    onAdd={noop}
                    onClear={noop}
                    onDivide={noop}
                    onDot={noop}
                    onEqual={noop}
                    onGrantTotal={noop}
                    onMultiply={noop}
                    onNumber={noop}
                    onRemainder={noop}
                    onSign={noop}
                    onSubtract={noop}
                />
            </div>
        )
    }
}