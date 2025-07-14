/**
 * following function will accept number array as parameter
 * It should iterate through the array and display whether the number is odd or even.
 * '%' is to find remainder of division: 3%2 = 1, 4%2 = 0
 * expected outcome:
 2 is even
 4 is even
 1 is odd
 5 is odd
 4 is even
 7 is odd


 1 == 2 is false
 3 == 3 is true
 */
function findEvenNumbers(numbers) {
    for (const number of numbers) {
        if(number % 2 == 0) {
            console.log(number + ' is even');
        }
        else {
            console.log(number + ' is odd');   
        }
    }
}

numbers = [ 2, 4, 1, 5, 4, 7]
//findEvenNumbers(numbers) 

// --------Homework----------
/**
 * following function will accept number array as parameter
 * Print the sum of the number array.
 */
function sumOfNumbers(numbers) {

}
sumOfNumbers(numbers);