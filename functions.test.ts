const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    
    test('should return an array', () => {
        expect(shuffleArray(arr)).toBeInstanceOf(Array)
    })

    test('should return an array of same length', () => {
        expect(shuffleArray(arr).length).toEqual(arr.length)
    })
})