export class VectorService {

    add = (vector1: Array<number>, vector2: Array<number>): string => {
        const result = new Array(vector1.length);

        for (let i = 0; i < result.length; i++) {
            result[i] = Number(vector1[i]) + Number(vector2[i]);
        }

        return `[${result}]`;
    }

    subtract = (vector1: Array<number>, vector2: Array<number>): string => {
        const result = new Array(vector1.length);

        for (let i = 0; i < result.length; i++) {
            result[i] = Number(vector1[i]) - Number(vector2[i]);
        }

        return `[${result}]`;
    }

    scalarProduct = (vector1: Array<number>, vector2: Array<number>): string => {
        const result = new Array(vector1.length);

        for (let i = 0; i < result.length; i++) {
            result[i] = Number(vector1[i]) * Number(vector2[i]);
        }

        return `${result.reduce((acc, coord) => acc + coord, 0)}`;
    }
}