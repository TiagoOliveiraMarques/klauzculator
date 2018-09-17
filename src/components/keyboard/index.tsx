import * as React from 'react';
import { noop } from '../../utils/noop';
import { Button, Theme } from '../button';

export enum Keys {
    
}

export interface IKeyboardProps {
    onButtonClick: (key: Keys) => void;
}

export class Keyboard extends React.PureComponent<IKeyboardProps> {

    public render() {
        return (
            <div className="keyboard">
                <div className="keyboard__row">
                    <Button onClick={noop} theme={Theme.Secondary}>C</Button>
                    <Button onClick={noop} theme={Theme.Secondary}>+/-</Button>
                    <Button onClick={noop} theme={Theme.Secondary}>%</Button>
                    <Button onClick={noop} theme={Theme.Secondary}>/</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={noop}>7</Button>
                    <Button onClick={noop}>8</Button>
                    <Button onClick={noop}>9</Button>
                    <Button onClick={noop} theme={Theme.Secondary}>X</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={noop}>4</Button>
                    <Button onClick={noop}>5</Button>
                    <Button onClick={noop}>6</Button>
                    <Button onClick={noop} theme={Theme.Secondary}>-</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={noop}>1</Button>
                    <Button onClick={noop}>2</Button>
                    <Button onClick={noop}>3</Button>
                    <Button onClick={noop} theme={Theme.Secondary}>+</Button>
                </div>
                <div className="keyboard__row">
                    <Button onClick={noop}>GT</Button>
                    <Button onClick={noop}>0</Button>
                    <Button onClick={noop}>.</Button>
                    <Button onClick={noop} theme={Theme.Primary}>=</Button>
                </div>
            </div>
        )
    }
}