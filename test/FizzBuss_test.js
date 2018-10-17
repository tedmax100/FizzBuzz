//import mocha from "mocha";
//import chai from 'chai';
// import {FizzBuzz} from "../FizzBuzz";
var chai = require('chai');  
var assert = chai.assert; 

var FizzBuzz =  (num) => {
    /*
    if (parseInt(input) == NaN) return "NaN";
    //if(modBy3 === 0 && modBy5 === 0) return "FizzBuzz";
    if(input % 15 === 0) return "FizzBuzz";
    if (input % 3 === 0) return "Fizz";
    if (input % 5 === 0 ) return "Buzz";
    return input;
    */
    const NORMAL_NUMBER = 1;
    const TIMES_OF_15 = 15;
    const TIMES_OF_5 = 5;
    const TIMES_OF_3 = 3;
    return [[TIMES_OF_15, "FizzBuzz"], [TIMES_OF_5, "Buzz"], [TIMES_OF_3, "Fizz"], [NORMAL_NUMBER, num]]
                    .find(divisor => num % divisor[0] === 0)[1];
};


describe("FizzBuzz UnitTest", ()=>{
   it("3 times should return Fizz", ()=> {
      assert(FizzBuzz(3) === "Fizz", "3 is ok");
      assert(FizzBuzz(6) === "Fizz", "Fizz");
   })
    it("5 times should return Buzz", ()=> {
       assert((FizzBuzz(5) === "Buzz", "5 is ok"));
       assert((FizzBuzz(20) === "Buzz", "5 is ok"));
    })
    it("3 times and 5 times should get FizzBuzz", ()=> {
        assert(FizzBuzz(15)=== "FizzBuzz", "15 ok");
        assert(FizzBuzz(30)=== "FizzBuzz", "15 ok");
    })
    it("normal number should return itself", ()=> {
        assert((FizzBuzz(1)===1), "1 is ok");
        assert(FizzBuzz(7) === 7, "7 is ok");
    })
});