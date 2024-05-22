// Introduction to JavaScript

// Sum of two numbers
function sum(num1, num2){
  return (num1 + num2);
}
console.log(sum(3, 2))
console.log(sum(-4, -8))

// Return the next number from the number passed
function nextNumber(number){
  return(number + 1)
}
console.log(nextNumber(3))
console.log(nextNumber(-2))

// Find perimeter of a rectangle
function rectanglePerimeter(length, width){
  return(2*(length + width))
}
console.log(rectanglePerimeter(2, 5))
console.log(rectanglePerimeter(3, 5))

// Return something to me
function returnSomethingToMe (text){
  return ("Coffee" +" "+ text)
}
console.log(returnSomethingToMe("is better than tea"))

// Bob's BMI vs Jane's BMI
function greaterBMI( Bob, Jane ) {

  if (Bob == Jane){
    return ("equal")  
  }  
  else if(Bob >= Jane)
    return ("Bob")

  else(Jane >= Bob)
  return("Jane")
}

console.log(greaterBMI(30, 30))
console.log(greaterBMI(35, 40))
console.log(greaterBMI(30, 25))

// Basketball points
function basketBallPoints(twopointer,threepointers){
  return(twopointer*2 + threepointers*3)
}
console.log(basketBallPoints(1, 1))
console.log(basketBallPoints(7, 5))

// Less than 100

function isSumMoreThan100(num1, num2){
  if (num1 + num2 >= 100)
    return ("true")
  else(num1 + num2 <= 100)
  return( "false")
}

console.log(isSumMoreThan100(25, 55))
console.log(isSumMoreThan100(72, 38))

// Convert minutes to second
function convertToSeconds(numberofminutes){

  if (numberofminutes == 0)
    return ( 0) 
  else if( numberofminutes == 1)
    return( 1 +" " + "second")
  else
    return(numberofminutes * 60 + " " + "seconds")
}
console.log(convertToSeconds(5))
console.log(convertToSeconds(0))
console.log(convertToSeconds(1))

// Greater among the three
function greater(num1, num2, num3){
    if( num1 >= num2 && num3)
      return(num1)
    else if (num2 >= num1 && num3)
      return(num2)
    else if (num3 >= num1 && num2)
      return(num3)
    else
      return(num1 || num2 || num3)
}
console.log(greater(2, 35, 9))
console.log(greater(23, 23, 23))

// Less among the three
function least (num1, num2, num3){
  if( num1 <= num2 && num3)
    return(num1)
  else if (num2 <= num1 && num3)
    return(num2)
  else if (num3 <= num1 && num2)
    return(num3)
  else
    return(num1 || num2 || num3)
}
console.log(least(2, 35, 9))
console.log(least(23, 23, 23))

// Football points
function footballPoints(won, draw, lost){
  return(won*3 + draw*1 + lost*0 )
}
console.log(footballPoints(5, 0, 2))
console.log(footballPoints(5, 2, 0))

// Even numbers
function isEven(num){
  return(num % 2 === 0)
}    
for (let i = 0; i <=101; i++)
  if (isEven(i))
console.log(i)
console.log(isEven(97))