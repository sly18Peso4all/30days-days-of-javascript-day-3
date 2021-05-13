//Day 3: Exercises
/*Exercises: Level 1
1)Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

2)Check if type of '10' is equal to 10

3) Check if parseInt('9.8') is equal to 10

4) Boolean value is either true or false.

5) Write three JavaScript statement which provide truthy value.
6) Write three JavaScript statement which provide falsy value.

7) Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'

8) Find the length of python and jargon and make a falsy comparison statement.
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python

9) Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

console.log("Solution ================= Exercise One");

// Solution 1
const firstName = "James";
const lastName = "Mike";
const country = "Germany";
let city = "Berlin";
let isMarried = false;
let year = 2021;

console.log(typeof firstName); //etc;

// Solution 2
console.log("10" == 10);

// Solution 3
console.log(parseInt("9.8") == 10);

// Solution 5
// 1) All positive and negative numbers
// 2) All string
// 3) Boolean: True

// Solution 6
// Undefined
// null
// BigInt (0n)

// Solution 7
// 4 > 3 ---> true
//4 >= 3 ---> true
//4 < 3 ---> false
//4 <= 3 ---> false
//4 == 4 --->  true
//4 === 4 ---> true
//4 != 4 ---> false
//4 !== 4 ---> fase
//4 != '4' ---> true
//4 == '4' ---> true
// 4 === '4' ---> false

// Solution 8
// 4 > 3 && 10 < 12 ---> true
// 4 > 3 && 10 > 12 ---> false
// 4 > 3 || 10 < 12 ---> true
// 4 > 3 || 10 > 12 ---> true
// !(4 > 3) ---> false
// !(4 < 3) ---> true
// !(false) ---> false
// !(4 > 3 && 10 < 12) ---> false
// !(4 > 3 && 10 > 12) ---> true
// !(4 === '4') ---> true

// Solution 9
const now = new Date();
const yearNow = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const day = now.getDay() + 1;
const hours = now.getHours();
const mins = now.getMinutes();

const timeSince1970 = Date.now();
console.log(timeSince1970);

//Exercises: Level 2
/*
1) Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 50

2)Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12

3) Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

4) Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

5) Calculate the slope, x-intercept and y-intercept of y = 2x -2

6) Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)

7) Compare the slope of above two questions.

8) Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

9) Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120
10) If the length of your name is greater than 7 say, your name is long else say your name is short.

11) Compare your first name length and your family name length and you should get this output.

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh

12) Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25
I am 225 years older than you.

13) Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.

14)Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

Enter number of yours you live: 100
You lived 3153600000 seconds.
15) Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm
*/
console.log("");
console.log("");
console.log("");
console.log("");
console.log("");
console.log("Solution ================= Exercise Two");

// Solution 1
let base = prompt("Enter a base");
let area = prompt("Enter a area");
let areaOfTriangle = 0.5 * base * area;
console.log(areaOfTriangle);

// Solution 2
let sideA = Number(prompt("Enter anumber"));
let sideB = Number(prompt("Enter anumber"));
let sideC = Number(prompt("Enter anumber"));

let perimeter = sideA + sideB + sideC;
console.log(perimeter);

// Solution 3
let length = Number(prompt("Enter anumber"));
let width = Number(prompt("Enter anumber"));
let perimeter2 = 2 * (length + width);
let areaOfRectangle = length * width * perimeter2;
console.log(areaOfRectangle);

// Solution 4
let pi = 3.14;
let radius = Number(prompt("Enter a number"));
let areaOfCircumference = pi * radius ** 2;
console.log(areaOfCircumference);

// Solution 5
// Solution 6
let y2 = 10;
let y1 = 2;
let x1 = 2;
let x2 = 6;
let m = (y2 - y1) / (x2 - x1);
console.log(m);

// Solution 9
let rate = Number(prompt("Enter your hourly rate"));
let hoursPerWeek = Number(prompt("Hours per week"));
let weeklyEarnings = rate * hoursPerWeek;
console.log(weeklyEarnings);

// Solution 10
let name = "Peter";
let nameCheck = name.length > 5 ? "Long" : "short";
console.log(nameCheck);

// Solution 11
let fName = "Johannes";
let lName = "Andrew";
let nameCompare =
  fName.length > lName.length
    ? `Your first name, ${fName} is longer than your family name, ${lName}`
    : `Your last name, ${fName} is longer than your first name, ${fName}`;
console.log(nameCompare);

// Solution 12
let myAge = 290;
let yourAge = 120;
let ageDiff = `I am ${myAge - yourAge} years older than you`;
console.log(ageDiff);

// Solution 13
let birthYear = Number(prompt("Enter year of birth"));
let date = new Date();
let yearRange = date.getFullYear();
let drivingAge = 18;
let isAllowed = yearRange - birthYear;

let ageCheck =
  isAllowed >= drivingAge
    ? `You are ${isAllowed}. You will be allowed to drive after ${
        drivingAge - isAllowed
      } years`
    : `You are ${isAllowed}. You are old enough to drive`;
console.log(ageCheck);

// Solution 14
let numOfYears = Number(prompt("Enter number of Years"));
function calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

calculateAge(numOfYears);

//Exercises: Level 3
// 1) Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// Solution
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();

function lessThan10(val) {
  return val < 10 ? "0" + val : val;
}

console.log(
  `${lessThan10(date)}-${lessThan10(month)}-${year} ${lessThan10(
    hours
  )}:${lessThan10(minutes)}`
);
