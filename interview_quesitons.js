//interview questions
// Level 1:

// Write a function named greatThanThree that takes in two numbers and returns true if they are both greater than 3 and false if not.

function greatThanThree (num1, num2){
  if (num1 > 3 && num2 > 3) 
    {return true;}
  else {return false};
}

//this will return false if both are not true
function greatThanThree(num1, num2)
{
  return num1>3 && num2>3;
}

// Write a function named aOrB that takes in a letter and if it is a or b then return true otherwise return false.

// case of letters matters here. Assume they are just lower case
function aORB (letter){
  retrun (letter == "a" || letter == "b");
}

function aORB(letter){
  var 1 = leter1.toLowerCase();
  return (1=="a" || 1=="b")
}

// Write a function named greatThanTwo that returns true if the number is 2 and false otherwise
//three equal signs checks for value and type
function greatThanTwo (number){
  return (number === 2);

// Level 2:

// eventually you want to be able to do each of these questions on paper in 5 minutes or less

// Write a function named printEvenBetween that takes in two numbers and will return an array of all the even numbers between the given two numbers.
2, 9 --> 2, 4, 6, 8
3, 10 --> 4, 6, 8, 10
3,3 --> false

function printEvenBetween(num1,num2){
  if(num1<=num2){
    var start = num1;
    var end = num2;
  }
  else {
    var start =num2;
    var end = num1;
  }

  var evenInBetween = [];
  if(start%2 == 0){
    for( var[i]=start+1, i<end,i++ ){
      evenInBetween.push(i);
    }
  }
  else {
    for (var[i]=start, i<=end, i++){
      evenInBetween.push(i);
    }
  }
  return evenInBetween;
  console.log(evenInBetween)
}


function printEvenBetween(num1, num2)
{

  var res = [];
  for(var i=num1;i<num2;i++)
  {
    if(i%2==0 && i!=0){
      res.push(i);
    }
  }
  return res;
}
// Write a function named printBetween that takes in two arguments. Assume they are integers. This function will return an array of the numbers between those two arguments.
2,9 --> 3,4,5,6,7,8
function printBetween(a,b){
  if(a<=b){
    var start = a;
    var end = b;
  }
  else {
    var start =b;
    var end = a;}

  var evenInBetween = [];

  for( var[i]=start+1, i<end,i++ ){
    evenInBetween.push(i);
  }
  return evenInBetween;
  console.log(evenInBetween)
}

function printBetween(num1, num2){

}

// Level 3:

// eventually you want to be able to do this question on paper in 10 minutes or less

// Write a function named fib that takes an argument n. Assume that n is a number. And the function returns an array of n numbers of the fibonacci sequence.

function fib(n){
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
};

}

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num -1) + fibonacci (num -2);
}

