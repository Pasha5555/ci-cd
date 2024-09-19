import { sum } from "./sum";

describe('sum', () => {
    test('test q', () => {
        expect(sum(1, 1)).toBe(2);
    })
});