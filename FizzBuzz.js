export var FizzBuzz =  (num) => {
    if (parseInt(num) != NaN) return "NaN";

    let modBy3= num % 3;
    let modBy5= num % 5;

    if(modBy3 === 0 && modBy5 === 0) return "FizzBuzz";
    if (modBy3 === 0) return "Fizz";
    if (modBy5 === 0 ) return "Buzz";
    return num;
};
