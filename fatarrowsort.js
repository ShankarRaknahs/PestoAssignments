/**
 * @function TO validate the array and whether the elements are numbers.
 * @param {*} input array
 */


const isValidArrayOfNumbers = (arr) => {

    for (element in arr) {
        if (typeof (arr[element]) !== 'number') {
            throw 'Not an Valid array, please provide array of numbers'
        }
    }

    if (arr.length < 2) {
        throw 'Cannot find the Second lowest and Second larget number from less than 2 element, Need atleast 2 higher order elements'
    }

    let uniqueArr = [...new Set(arr)];
    let sortedArr = uniqueArr.sort((a, b) => a - b);

    if (sortedArr.length < 2) {
        throw 'Cannot find the Second lowest and Second larget number from less than 2 element, Need atleast 2 higher order elements'
    }

    return sortedArr;
}

/**
 * @function To find the second level smallest and highest numbers from the array of numbers
 * @param   input array
 * @returns 
 */

const findSecondLevelSort = (arr) => {

    try {
        let sortedArr = isValidArrayOfNumbers(arr);
        return [sortedArr[1], sortedArr[sortedArr.length - 2]];
    } catch (error) {
        return error;
    }

}


console.log(findSecondLevelSort([55, 55, 44, 44, 66]));
console.log(findSecondLevelSort(['a', 5, 17, 19]));
console.log(findSecondLevelSort([5.11, 5.12, 5.13, 5.14]));
console.log(findSecondLevelSort(['a', 11, 5.12, 5.13, 5.14]));
console.log(findSecondLevelSort(['a', 'b']));
console.log(findSecondLevelSort(['foo', 'b']));
console.log(findSecondLevelSort([]));
console.log(findSecondLevelSort([1]));
console.log(findSecondLevelSort([1, 2]));
console.log(findSecondLevelSort([':smiley:', ':oh_yeah:']));
console.log(findSecondLevelSort([10, 22, 34, 56, 1, 9]));
console.log(findSecondLevelSort([1, 1]));