/**
Task - 1
return the reversed version of the string without using
the built-in reverse() method.
*/

const getReverse = (string) => {
    let reChars = [];

    // get characters separately in reverse way
    for (let i = string.length - 1; i >= 0; i--) {
        reChars.push(string[i]);
    }

    // join reversed characters 
    const reString = reChars.join('');
    return reString;
}

const result = getReverse('Nice try')
//console.log(result);

/*******************************************************/










/**
Task - 2
return the sum of all positive numbers in the array.
*/

const sumOfPositives = (numbers) => {
    let sum = 0;

    // get positive numbers and add them in 'sum' variable
    for (const number of numbers) {
        if (number >= 0) {
            sum += number;
        }
    }
    return sum;
}

const nums = [2, -3, 2, 1, 5];
const sum = sumOfPositives(nums);
//console.log(sum);

/*******************************************************/









/**
Task - 3
Find the most frequent element in an array and return it.
*/

const numbers = [2, 3, 2, 1, 5, 1, 1];

// container of counts
let data = {};

// set repeat times of each numbers in 'data'.
numbers.map(number => data[number] = data[number] + 1 || 1);

// get array of values and keys
const values = Object.values(data);
const keys = Object.keys(data);

// get max repeat count
const maxValue = Math.max(...values);

// find index of max repeat count
const indexOfMax = values.findIndex(value => value == maxValue);

// find the key with max value by max values index number.
const mostFreqNum = keys[indexOfMax];

//console.log(mostFreqNum);

/*******************************************************/









/**
Task - 5
A function should take two numbers and an operator (+, -, *, /) as input and
return the result of the operation.
*/


function calculator(number1, number2, operator) {
    switch (operator) {
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            // if try to divide by zero
            if (number2 === 0) {
                return 'Can\'t divide by ZERO';
            } else {
                return number1 / number2;
            }
        default:
            return 'Invalid inputs';
    }
}

const calculatedResult = calculator(6, 0, '/');
//console.log(calculatedResult);

/*******************************************************/










/**
Taak - 6
generates a random password of a specified length.
The password should include a mix of uppercase letters, lowercase letters,
numbers, and special characters.
*/


function generatePassword(length) {
    // set characters
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const number = "0123456789";
    const special = "!@$&?";

    // make a a string with all characters
    const allChararcters = upperCase + lowerCase + number + special;

    let password = "";

    // genarate random index number and get charaters according to indexs with given length
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChararcters.length);
        password += allChararcters.charAt(randomIndex);
    }

    return password;
}
const password = generatePassword(8)
//console.log(password);


/*********************************************************/








/**
Task - 7
Implement a function that converts a Roman numeral to an integer.
*/

const rumanToInteger = (ruman) => {
    // defined ruman number values in integer
    const rumanNumerals = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    //
    let result = 0;
    for (let i = 0; i < ruman.length; i++) {

        // get int from ruman
        const currRuman = ruman[i];
        const nextRuman = ruman[i + 1];
        const currInt = rumanNumerals[currRuman];
        const nextInt = rumanNumerals[nextRuman];

        if (nextInt > currInt) {
            result += nextInt - currInt;
            i++;
        } else {
            result += currInt;
        }
    }
    return result;

}

const int = rumanToInteger("VI");
//console.log(int);

/*********************************************************/











/**
Task - 8
Find the second smallest element in an array of numbers.
*/

const findSecSmallest = (numbers) => {
    let smallest = Infinity;
    let secSmallest = Infinity;

    for(let i=0; i<numbers.length; i++) {
        
        if (numbers[i] < smallest) {
            secSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] < secSmallest && numbers[i] !== smallest) {
            secSmallest = numbers[i];
        }     
    }
    return secSmallest;
}
const num = [3,2,3,4];
const res = findSecSmallest(num);
//console.log(res);












// Check the number of vowels and consonants
const getNumberOfCharTypes = (givenString) => {

    // count number container object
    let counts = {vowels: 0, consonants: 0};
    
    // change the string into lower case and replace unwanted characters
    const lowerString = givenString.toLowerCase();
    const optimizedString = lowerString.replace( /[^a-z]/g, '' );
    // define vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // check characters
    for (const character of optimizedString) {
        if(vowels.includes(character)) {
            counts.vowels += 1;
        } else {
            counts.consonants += 1;
        }
    }
    return counts;

}

// get the result
console.log(getNumberOfCharTypes('The name of our country is Bangladesh'));



// check if a string is palindrome or not
const checkPalindrome = (givenString) => {
    // change the string into lower case and get characters without non-alphabatic
    const lowerString = givenString.toLowerCase();
    const optimizedString = lowerString.replace( /[^a-z]/g, '' );

    // get reversed string
    const reverseString = optimizedString.split('').reverse().join('');
    const isPalindrome = optimizedString === reverseString;
    
    // console if the string is palindrome or not
    if (isPalindrome) {
        console.log('The string is Palindrome');
    } else {
        console.log('The string is not Palindrome');
    }
}
checkPalindrome('apple');






// callback function
// Callback function is a function that is passed as argument of another function.


// divide() function is used to divide the given number by 2
const divide = (number) => {
    const result = number/2;
    console.log(result);
}


// getSum() function adds 2 numbers
// getSum() function recieves 3 parameters. first 2 are number and 3rd one is a function
const getSum = (number1, number2, divide) => {
    const sum = number1 + number2;
    console.log(sum);
    divide(sum)
}
// is this case 3rd parameter or divide() is a callback function that is passed in getSum() function.

getSum(2, 4, divide);
