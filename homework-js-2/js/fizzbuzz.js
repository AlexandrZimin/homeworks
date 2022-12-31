//Если число делиться без остатка на 3, то выводится слово Fizz. Если число делиться без остатка на 5, то выводится Buzz. Если число делиться на 3 и на 5, то выводитсья FizzBuzz
console.log(fizzBuzz(10, 20));
function fizzBuzz(firstNumber, lastNumber) {
    for (let i = firstNumber; i < lastNumber+1 ; i++ ) {
        if ( (i%3===0) && (i%5===0) ) {
            console.log("FizzBuzz");
        }
        else if ( i%5 === 0) {
            console.log("Buzz")
        }
        else if ( i%3===0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}