export abstract class CalculatorState {

    public abstract scopedValue(): string;

    public handleAddOperation(): CalculatorState {
        return this;
    }

    public handleClearOperation(): CalculatorState {
        return this;
    }

    public handleDivideOperation(): CalculatorState {
        return this;
    }

    public handleNumericDot(): CalculatorState {
        return this;
    }

    public handleEqualOperator(): CalculatorState {
        return this;
    }

    public handleMultiplyOperator(): CalculatorState {
        return this;
    }

    public handleNumber(value: number): CalculatorState {
        return this;
    }

    public handleSubstractOperator(): CalculatorState {
        return this;
    }

}