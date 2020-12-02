/**
 * @function sumFib - To find the sum of all odd fibonacci numbers that are less than or equal to input param
 * @param {Number} - Positive number 
 * @returns {Number} - Sum of all Odd fibonacci numbers that are less than or equal to num
 */

 function sumFib(num) {

    if (Math.sign(num) != 1 ) {
        return -1;
    }

    let fibNum1 = 0;
    let fibNum2 = 1;
    let sumOfOddFib = nextFib = 0;

    while (nextFib <= num) {
        if (fibNum2 % 2 != 0) {
            sumOfOddFib += fibNum2;
        }
        nextFib = fibNum1 + fibNum2;
        fibNum1 = fibNum2;
        fibNum2 = nextFib;
    }
    return sumOfOddFib;

}