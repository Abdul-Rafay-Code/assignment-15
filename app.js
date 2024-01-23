//  **  Q No 01(Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.)  **

var dObj = new Date();  
console.log("Ans 1 is:",dObj)


//  **  Q No 02(Code a statement that creates a new Date object and assigns it to
// dObj, which hasn't been declared beforehand.)  **
var currentDate = new Date();
var dStr = toString(currentDate);
console.log(typeof dStr);

//   ** Q No 03

var currentDate = new Date();
var d = currentDate.getDay();
console.log("Ans 3 is:",d);

//  Q No 04
var dayesName = ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"];
var day = dayesName[d];
console.log("Ans 4 is:",day)

//  Q No 05

console.log("Answer 5 is Given Below!")
var a = new Date();
console.log("Date:",a);

var b =a.getFullYear() 
console.log("Year:",b);

var c =a.getMonth();
console.log("Month:",c);

var e =a.getDate() 
console.log("Date:",e);

var f =a.getDay() 
console.log("Days:",f);

var g =a.getHours() 
console.log("Hours:",g);

var h =a.getMinutes() 
console.log("Minutes:",h);

var i =a.getSeconds() 
console.log("Seconds:",i);

var j =a.getMilliseconds() 
console.log("Milliseconds:",j);

var k =a.getTime() 
console.log("Time:",k);

//  Q No 06

var later = new Date("12/31/2020");
//   date.setDate()
  console.log("Ans 6 is: \n Last Day&Date OF last Month of 2020:",later.toDateString());
//    date.setMonth(11);
//    console.log("Last Day&Date OF last Month:",date);
   
//    Q No 07
var dt = new Date ("02/02/1992")
console.log("Ans 7 is:",dt.toDateString());

//  Q No 08
var milliSeconds = new Date(1980,0,1).getTime();

// alert(milliSeconds);


// Q No 09
var currDate = new Date();
console.log("Current Date:",currDate.toDateString());

currDate.setFullYear('2023');
console.log("Updated Year:",currDate.toDateString())

// Q No 10
function Month(change) {

    var givenDate = new Date (2024 + change  + 1);
    console.log(givenDate.toDateString());
    
}

Month("jan")
Month("Feb")
Month("Mar")
Month("Apr")

// Q No 11
console.log("Ans 11")

// var lastDate = new Date ("2024-1-10")
// console.log(lastDate);
// var lifeDate = new Date ();
// console.log(lifeDate)

function ChangetheDay(change) {  
      var process =  new Date(2024 , 0 , change)
    console.log(process.toDateString()) 
    
}
ChangetheDay(10)
ChangetheDay("11")
ChangetheDay("12")
ChangetheDay("13")
ChangetheDay("14")
ChangetheDay("15")
ChangetheDay("16")
ChangetheDay("17")
ChangetheDay("18")

// Q No 12

console.log("Ans 12")

function changeMint() {
  var mint = +prompt("Enter Value");
  // console.log(mint);
  var currentDate = new Date();
  currentDate.setHours(2,mint);
  console.log(currentDate); 
  
}
changeMint()



        
// Q No 13
console.log("Ans 13")
function addHourse(add) {
  var n = new Date();
  var m = n.getHours();
  console.log(n.toLocaleTimeString())
  console.log("The Hours Is:",m)
  console.log("Now Add the Hourse!")
  var change = m + add;
  console.log("After add the hourse:",change)
  
}
addHourse(1)

// Q No 14
function Year(calculate) {
  var a =  new Date();
  var b =a.getFullYear();
  var c = b - calculate;
  console.log("You Are ", c,"Year Old!" ); 

  
}
Year(1979)
Year(1976)
Year(2005)


// calculate days 
// function days(calculate) {
//   var a = new Date("2005-5-26");
//   console.log(a.toDateString())
//   var b = new Date();
//   console.log(b.toDateString())
//   var c = b - a;
//   console.log(c)
  
// }
// days(1)

                                  //  Functions 
// Q no 01

function display() {
  // alert("Hello World!")
  
}
display()

// Q No 02

function askName(name) {
  var userName = name;
  console.log(userName);
  
}
// askName(prompt("Enter Name"))


// Q No 03

function firFunc() {
  console.log("This is first function!")

  function secFunc() {
    console.log("This is Second function!")  
  }
  
  secFunc()


  function thirFunc() {
    console.log("This is Third function!")  
  }
  
  thirFunc()
}

firFunc()


// Q No 04
function name() {
  // var a = prompt("Enter Name");
// alert(a)  
}
name()

// Q No 05
var a = "Abdul-Rafay";
function concat(a,b,c) {
  console.log(a,b,c);
  
}
concat(a,"Name",45);


// Q No 06
 function concatenate(a,b) {
  var x = a + b;
  console.log("Concatenate Conditions!",x)
  
 }
 concatenate("Abdul","23")


//  Q No 07
 function multiply(a,b,c) {
  var x = a * b * c;
  console.log("Multiply:",x)
  
 }
 multiply("4","2","12")

// Q No 08
console.log("Ans 8")

function average(array) {

  var avg = 0;
  for (let i = 0; i < array.length; i++) {
    avg = avg + array[i];
    
  }
  avg = avg / array.length;
  console.log("Average is:",avg);
  
}
average([2,4,6,8,10,12]);



// Q No 09
function sum(a,b) {
  var total = a + b;
  return total;
  
} 
var result = sum(187605,123);
console.log("The Sum of two numbers is: ",result);

// Q No 11
function Anythging(mix) {
  return mix;
  
}
var a =  Anythging("abcdefg12345");
console.log(a)

// Q No 12

function letterCount(word) {
  var a = word;
  console.log(a.length);
  
}
letterCount("AbdulRafay")

// Q No 13

function setYear(year) {
  var currentDate = new Date ();
  console.log("Current Year:",currentDate.toDateString());
   currentDate.setFullYear(year)
  console.log("Updated Year:", currentDate.toDateString());
  
}
setYear(2023)
setYear(2026)
setYear(2021)

// Q No 14

function calculateAge(dob) {
  var dateOfBirth = new Date (dob).getFullYear();
  var currentDate = new Date().getFullYear();
  var age = currentDate - dateOfBirth;
  console.log("Your Age :",age);
  
}
calculateAge("2005-5-26")
calculateAge("2007-5-27")

// Q No 15

function presenseOfWord(array) {
  var input = prompt("Enter Name");
    var a = true ;
    var b = false ;
  for (let i = 0; i < array.length; i++) {
  
    if(input == array[i]){
        console.log(a)
      }
      
      
      else {
      console.log(b)
    }
  }
  
  
 
}
  presenseOfWord(['zaid','haris','raza','abubakar','hassan','hussain','fatima','rafay'])
// Q No 16

function repeat(letter) {
  var a = letter.repeat(10)
  console.log(a)

}
repeat("a")

// Q No 17

function reverse(array) {
  var a = array.toString().split("").reverse().join("");
  console.log(a)
  return a;
  
}
reverse(['a,b,c,d'])
reverse(['1,2,3'])

// Q No 18

function reverseANumber(number) {
  var b = number.split("").reverse().join("");
  console.log(b)
  return b;
  
}
reverseANumber('1234')
// reverse(['1,2,3'])

// Q No 19

function pallindrome(word) {

  var a = word.toString().split("").reverse().join("");
  
  if (word==a){
    console.log("Pallindrome!")
  }
  else {
    console.log("Not Pallindrome!");
  }
  
}
pallindrome("madam")
pallindrome("wow")

// Q No 20

function check(x) {
  var a = x.split(" ");
  for (let i = 0; i < a.length; i++) {
   a[i] = a[i].slice(0,1).toUpperCase() + a[i].slice(1).toLowerCase();
  }
  a = a.join(" ");
  return a ;

  
}
var final = check('the quick brown fox')
console.log(final)


// Q No 21

function lgNumber(array) {

  console.log(Math.max(...array));
  console.log(Math.min(...array));
  
}
lgNumber([1,2,3,12,12345,765432])

