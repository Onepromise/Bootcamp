//write a function isEven() which takes a single numeric argument
//and returns true if the number is even, and false otherwise

function isEven(num){
  if (num % 2 ===0){
    return "True";
  }
  return "False";
}

isEven(4);
isEven(21);
isEven(68);
isEven(333);


//write a function factorial() which takes a single numeric argument
//and returns the factorial of that number

function factorial(x){
  if (x === 0){
    return 1;
  }
    return x * factorial(x-1);
}

//write a function kebabToSnake() which takes a single kebab-cased
//string argument and returns the snake_cased version.

function kebabToSnake(snake){
  return snake.replace("-", "_");
}
