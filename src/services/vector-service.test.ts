import { VectorService } from './VectorService';

describe('Vector service tests', () => {
    let vectorService: VectorService;

    beforeAll(() => {
        vectorService = new VectorService();
    });

    it('Should be initialized', () => {
        expect(vectorService).toBeTruthy();
    });
    
    it('add', () => {
        const vector1 = [4, 1, 4];
        const vector2 = [2, 4, 2];

        const expectedResult = '[6,5,6]';
        const predResult = vectorService.add(vector1, vector2);

        expect(predResult).toBe(expectedResult);
    });

    it('subtract', () => {
        const vector1 = [2, 1, 8];
        const vector2 = [5, 1, 0];

        const expectedResult = '[-3,0,8]';
        const predResult = vectorService.subtract(vector1, vector2);

        expect(predResult).toBe(expectedResult);
    });

    it('scalar product', () => {
        const vector1 = [2, 3, 4];
        const vector2 = [2, 2, 2];

        const expectedResult = '18';
        const predResult = vectorService.scalarProduct(vector1, vector2);

        expect(predResult).toBe(expectedResult);
    });
});
