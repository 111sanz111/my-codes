// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not Divisible 3 or 5 => number

const n = fizzBuzz(9)

function fizzBuzz (input){
  if ((input % 3 == 0) && (input % 5 !== 0)) {
    console.log('Fizz')
}
else if ((input % 5 == 0) && (input % 3 !== 0)){
    console.log('Buzz')
}
else if((input % 3 == 0) && (input % 5 == 0)){
  console.log('FizzBuzz')
}
else
    console.log(input)
  // return (input % 3 == 0) ? "Fizz" : ""
}