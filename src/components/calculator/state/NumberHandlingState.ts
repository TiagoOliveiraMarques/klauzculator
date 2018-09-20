import { CalculatorState } from "./CalculatorState";

export class NumberHandlingState extends CalculatorState {

    private expression: string;

    constructor(expression: string = "") {
        super();

        this.expression = expression;
    }

    public scopedValue(): string {
        return this.expression === "" ? "0" : this.expression;
    }

    public handleNumber(value: number): CalculatorState {
        return this.handleStringToken(value.toString());
    }

    public handleNumericDot(): CalculatorState {
        return this.handleStringToken('.');
    }

    private handleStringToken(value: string): CalculatorState {
        const nextExpression = this.expression + value;
        
        if (this.isValidNumberString(nextExpression)) {
            return new NumberHandlingState(nextExpression);
        }

        return this;
    }

    private isValidNumberString(expression: string): boolean {
        return /^\d+\.?\d*$/.test(expression);
    }
}