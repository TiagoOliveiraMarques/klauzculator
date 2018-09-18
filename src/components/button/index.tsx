import * as React from 'react';

export enum Theme {
    Default,
    Primary,
    Secondary
}

export interface IButtonProps {
    onClick: () => void;
    children: JSX.Element | string;
    theme?: Theme
}

const buttonDecoratorClass = (theme: Theme): string => {
    switch (theme) {
        case Theme.Primary:
            return "button--primary";
        case Theme.Secondary:
            return "button--secondary";
        default:
            return "";
    }
}

export const Button: React.SFC<IButtonProps> = ({ onClick, children, theme = Theme.Default }) => {
    const className = `button ${buttonDecoratorClass(theme)}`;

    return (
        <button type="button" onClick={onClick} className={className}>
            { children }
        </button>
    );
};