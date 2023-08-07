// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];

    if (!Array.isArray(matrix) || matrix.length === 0) return [];

    for (let i = 0; i < matrix.length; i++) {
        let arrToResult = i % 2 === 0 ? matrix[i] : matrix[i].reverse();
        for (let j = 0; j < arrToResult.length; j++) {
            result.push(arrToResult[j]);
        }
    }
    return result;
};
