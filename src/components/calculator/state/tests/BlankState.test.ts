import { NumberHandlingState } from './../NumberHandlingState';

describe('NumberHandlingState', () => {

    it('should be initialized with 0 value', () => {
        const state = new NumberHandlingState();

        expect(state.scopedValue()).toBe("0");
    });

    it('should accept numeric value', () => {
        const state = new NumberHandlingState().handleNumber(1);

        expect(state.scopedValue()).toBe("1");
    });

    it('should accept multiple numeric values', () => {
        const state = new NumberHandlingState().handleNumber(1).handleNumber(2);

        expect(state.scopedValue()).toBe("12");
    });

    it('should accept values with multiple digits', () => {
        const state = new NumberHandlingState().handleNumber(1).handleNumber(12);

        expect(state.scopedValue()).toBe("112");
    });

    it('should accept dots without fractional part', () => {
        const state = new NumberHandlingState().handleNumber(1).handleNumericDot();

        expect(state.scopedValue()).toBe("1.");
    });

    it('should accept fractional part', () => {
        const state = new NumberHandlingState().handleNumber(1).handleNumericDot().handleNumber(2);

        expect(state.scopedValue()).toBe("1.2");
    });

    it('should not fail when pressing dot multiple times', () => {
        const state = new NumberHandlingState()
            .handleNumber(1)
            .handleNumericDot()
            .handleNumber(2)
            .handleNumericDot()
            .handleNumber(3);

        expect(state.scopedValue()).toBe("1.23");
    });
});