// var num = 1;
//
// while(num<= 20){
//   if(num % 4 ===0){
//     console.log(num);
//   }
//   num++;
// }

//
// console.log("printing all numbers between -10 and 20")
// var prob1 = -9;
// while(prob1 <= 19){
//   console.log(prob1);
//   prob1++;
// }
//
// console.log("printing all even numbers between 10 and 40");
// var prob2 = 10;
// while (prob2 <= 40){
//   if(prob2 % 2 === 0)
//     console.log(prob2);
//   prob2+=1;
// }
//
// console.log("Printing all odd numbers between 300 and 333");
// var probThree = 301;
// while (probThree <=333) {
//   if(probThree % 2 !==0){
//     console.log(probThree);
//   }
//   probThree+=1;
// }
//
// console.log("Printing all numbers divisible by 5 and 3 between 5 and 50");
// var probFour = 5;
// while (probFour <= 50) {
//   if(probFour % 5 ===0 && probFour % 3 === 0 ){
//     console.log(probFour);
//   }
//   probFour++;
// }


console.log("Printing all numbers between -10 and 19 that are less than 19");
for (var i = -10; i < 20; i++){
  console.log(i);
}

console.log("Printing all even numbers between 10 and 40");
for (var j = 10;j <= 40; j++ ){
  if (j % 2 === 0){
    console.log(j);
  }
}
console.log("Printing all odd numbers between 300 and 333")

for (var k = 301; k <= 334; k++){
  if(k % 2 !==0 ){
    console.log(k);
  }
}

console.log("Printing all numbers divisible by 5 and 3 between 5 and 50")

for (var l = 5; l <= 51; l++){
  if(l % 5 ===0 && l % 3===0){
    console.log(l);
  }
}
