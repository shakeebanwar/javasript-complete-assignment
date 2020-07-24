// chap 21-25

/*
Task 1
var first_name = prompt("Enter the First Name");
var last_name = prompt("Enter the Last Name");
var fullname = first_name+last_name
document.write(fullname)

*/

/*
Task 2

var model = prompt("Enter your Favourite mobile model");
document.write("My Favourite mobile phone model is :",model,"<br>")
document.write("Length of string is ",model.length)

*/

/*
Task 3
var str = "pakistani"
console.log(str.indexOf('n'));

*/

/*
Task 4

var a = "Hello World";
document.write(a,"<br>");
document.write("last index of l is ",a.lastIndexOf('l'))

*/

/*
Task 5

var str = "pakistani";
document.write(str,"<br>");
document.write("Character at index 3 : ",str.charAt(3))

*/

/*
Task 6


var first_name = prompt("Enter the First Name");
var last_name = prompt("Enter the Last Name");
document.write(first_name.concat(last_name));

*/

/*
Task 7

var city = "Hyderabad";
document.write("City ",city,"<br>");
document.write("After Replacement : ",city.replace("Hyder","Islam"))

*/
/*
Task 8


var message = "Ali and Sami are best friends. They play cricket and football together";
document.write(message.replace(/and/g,"&"));

*/

/*
Task 9
var num = "472";
document.write("value :",num,"<br>");
document.write("Type : ",typeof(num),"<br>")

document.write("value :",num,"<br>");
var conv = parseInt(num)
document.write("Type : ",typeof(conv),"<br>")

*/

/*
Task 10
var col = prompt("Enter a favourite color");
document.write("UserInput ",col,"<br>");
document.write("UpperCase : ",col.toLocaleUpperCase())
*/

/*
Task 11

var col = prompt("Enter a favourite color");
document.write("UserInput ",col,"<br>");
document.write("TitleCase : ",col[0].toLocaleUpperCase()+col.slice(1))

*/

/*
Task 12
var col = 35.36 ;
document.write("Number ",col,"<br>");
var s = col + "";
s = s.replace(".","")
s = parseInt(s)
document.write("Result ",s,"<br>");

*/


/*
Task 13

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var username = prompt("Enter a username")

if(format.test(username)){
  username = prompt("Plz Enter a valid username")

} 

else {
  console.log("ok")
}


*/

/*
Task 14


A = ["cake", "apple pie", "cookie", "chips", "patties"]
var item = prompt("Enter a product would you like to buy")
item = item.toLowerCase()
var found = false;
for(var i = 0;i<A.length;i++){
  if(A[i]==item){
    document.write(item," is available at index ",i)
    found=true;
    break;
    
  }
  
 }

 if(found == false){
   document.write(item," not Availabe")
 }


 */

/*
 Task 16

var university = "University of Karachi";
var arr = university.split('');

for(var i =0;i<arr.length;i++){

 document.write(arr[i],"<br>")
}

*/


/*
Task 17
var user = "pakistan";
document.write("Your last character is ",user.slice(-1))
*/


/*
Task 18

var str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
var counting = 0;
for(var i = 0;i<str.length;i++){
  if(str.slice(i,i+3)=='the'){
    counting=counting+1;
  }
} 

document.write(counting);

*/



/*

Task 19

var password = prompt("Enter a password");
a = [0,1,2,3,4,5,6,7,8,9]
if(password.length>=6){
  for(var i = 0;i<a.length;i++){
    if(password[0]==a[i]){
      document.write("Password not start with number")
    }
    
  }
}


else{
  document.write("Incorrect length minimum 6")
}

*/



// chap 26-30

/*
Task1
var a = +prompt("Enter a possitive integer")
a = Math.abs(a)
document.write("number : ",a,"<br>")
document.write("Round off : ",Math.round(a),"<br>")
document.write("Ceil : ",Math.ceil(a),"<br>")
document.write("Floor : ",Math.floor(a),"<br>")
*/


/*
Task 2
var a = +prompt("Enter a Negative integer")
document.write("number : ",a,"<br>")
document.write("Round off : ",Math.round(a),"<br>")
document.write("Ceil : ",Math.ceil(a),"<br>")
document.write("Floor : ",Math.floor(a),"<br>")

*/

/*
Task 3
var a = -4;
document.write("The Absolute value of ",a," is ",Math.abs(a))

*/


/*
Task 4

var num = Math.random()*(7-1)+1;
var num2 = Math.random()*(7-1)+1;

document.write("Random dice value :",Math.floor(num),"<br>")
document.write("Random dice value :",Math.floor(num2))

*/

/*
Task 5
var num = Math.random()*(3-1)+1;
var num2 = Math.random()*(3-1)+1;

document.write("Random coin value :",Math.floor(num),"<br>")
document.write("Random coin value :",Math.floor(num2))
*/

/*
Task 6
var num = Math.random()*(101-1)+1;
document.write("Random number from 1 to 100 is ",Math.floor(num))
*/


/*
Task 7
var weight = parseInt(prompt("Enter your weight"))
document.write("The Weight of user is ",weight)

*/

/*
Task 8
var num = Math.random()*(101-1)+1;
user = prompt("Enter a number")
if(num==user){
  document.write("Congrats")
}
else{
  document.write("Try Again")
}

*/



// chap 31-34

/*
Task 1
var a = new Date()
document.write(a)

*/

/*
TASK 2
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var a = new Date()
document.write(monthNames[a.getMonth()])
*/

/*
Task 3
dayname = ['sunday','monday','tuesday','wednesday','thursday','friday','sat']
var a = new Date()
var day = dayname[a.getDay()]
document.write(day.slice(0,3))

*/

/*
Task 4
dayname = ['sunday','monday','tuesday','wednesday','thursday','friday','sat']
var a = new Date()
var day = dayname[a.getDay()]
if(day == dayname[6] || day == dayname[0]){


  document.write("Its funday")
}

*/

/*
Task 5
var a = new Date()
var day = a.getDate()
if(day<16){
var msg = "First fifteen days of the month";
}

else{
  document.write("Last days of the month")
  
}

*/

/*
Task 6
var date = new Date()
var milSecond = date.getTime()
var min = (milSecond/(1000*60)).toFixed(1)
document.write("Current Date is ",date,"<br>")
document.write("Millisecond from january 1 ,1970 ",milSecond,"<br>")
document.write("Minutes from january 1 ,1970 ",min,"<br>")
*/


/*
Task 7
var date = new Date()
var hour = date.getHours()
if(hour<12){
  document.write("Its am")
}
else{
  document.write("Its pm")
}
*/

/*
Task 8
var date = new Date("Dec 31,2020")
document.write(date)

*/


// Task 9

/*
var ramzanFirst = new Date("April 25,2020").getTime()
var currentDate = new Date().getTime()
var diff = currentDate-ramzanFirst
var res = diff/(1000*60*60*24)
document.write(Math.floor(res)," Days passed since 1st ramzan")

*/

/*
Task 10
var Reference = new Date("2020").getTime()
document.write(Reference," Seconds had passed since begning of 2020")

*/

/*
Task 11
var a = new Date()
document.write("Current date and time is ",a,"<br>")
var b = a.getHours()
var c = new Date()
c.setHours(b-1)
document.write("Time 1 hour a ago",c)
*/

/*
Task 12
var a = new Date();
document.write("Current date is ",a,"<br>");
var b = a.getFullYear();
var c = new Date();
c.setFullYear(b-100);
document.write(c)

*/

/*
Task 13

var age = 22;
var currentYear =2020;
document.write("Your birth year is ",currentYear-age)

*/


/*
Task 14
document.write("<h1>","K-Electric Bill","</h1>","<br>");
var customerName = "Shakeeb";
var curentMonth = "june";
var NumberOfUnit = 200;
var perUnit = 16;
var amount = 0;
var lateamount=200;

document.write("CustomerName : ",customerName,"<br>")
document.write("Month : ",curentMonth,"<br>")
document.write("Number of Units : ",NumberOfUnit,"<br>")
document.write("Charge per unit : ",perUnit,"<br><br><br>")



document.write("Net Amount payable with due date : ",200*16,"<br>")
document.write("surcharge : ",lateamount,"<br>")
document.write("After due date : ",(200*16)+200,"<br>")
*/



// chap 35-38

/*
Task 1
function date(){
  var d =new Date()
  document.write(d)
}

date()

*/

/*

Task2
function name(a,b){
  var fullname = a+b;
  document.write(fullname)
}

name("shakeeb",'Anwar');

*/



/*
Task 3
function add(){
  var a = +prompt("Enter a firstname");
  var b = +prompt("Enter a Lastname");

  var c = a+b;
  document.write(c)
}

add()

*/

/*
Task 4

function calculator(number1,operator,number3){

  if(operator=="+"){
    return number1+number3;
  }
  else if(operator=="-"){
    return number1-number3;
  }

  else if(operator=="*"){
    return number1*number3;
  }

  else if(operator=="/"){
    return number1/number3;
  }
}

var Result = calculator(1,"+",2)
document.write(Result,"<br>")

var Result = calculator(1,"-",2)
document.write(Result,"<br>")

var Result = calculator(1,"*",2)
document.write(Result,"<br>")

var Result = calculator(1,"/",2)
document.write(Result,"<br>")

*/

/*
Task 5
function Square(a){
  return a*a;
}

var result = Square(2);
document.write(result)

*/
/*
Task 6

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
var a = factorialize(5);
document.write(a)

*/

/*
Task 7
function count(s,e){
  for(var a = s;a<=e;a++){
    document.write(a,"<br>");
  }
}

count(1,10)

*/

/*
Task 8
function geometric(){
var base = prompt("Enter a base value");
var perpendicualar = prompt("Enter a perpendicular");
var hyp = base*base + perpendicualar*perpendicualar 

function square(hyp){
   
  document.write("your hypothenous is ",hyp*hyp)
}

square(hyp);

}

geometric();

*/

/*
Task 9

function Area(w,h){


  return w*h;
}

var height = 4
var result = Area(2,height)
document.write(result)
*/

/*
Task 10

function reverse(){

  var a = prompt("Enter a word");
  var str = a.split("").reverse().join("");
  
  if(str==a){

    document.write(str,"<br>");
    document.write("word is palidrom");
  }
  else{
    document.write(str,"<br>");
    document.write("word is not palidrom");
  }
}

reverse();

*/

/*
Task 11

function firstLetter(){
var a = prompt("Enter a string");
var b = a.split(" ")
for(var i =0;i<b.length;i++){

  document.write(b[i].charAt(0).toUpperCase() + b[i].substr(1),"<br>")
}
}

firstLetter();

*/

/*
Task 12

function longword(string){

  var str = string.split(" ");
  var long = 0;
  var word = null;

  for(var i = 0;i<str.length;i++){
    if(long < str[i].length){
      long = str[i].length;
      word = str[i];
      document.write(word)

    }
  }

}

longword("shakeeb is good")
*/

/*
Task 13


function charCount(str,letter){
 
  var len = 0;
  for(var i = 0;i<str.length;i++){

    if(str.charAt(i) == letter){

      len = len +1;

    }
  }
  document.write(len);
}

charCount("shakeeb","e")


*/



/*

Task 14
function Circumference(){

  var a = prompt("Enter a radious");
  var result = 2*3.13*a;
  document.write("The circumference is ",result)
}

Circumference();

*/

/*
function AreaCircle(){

  var a = prompt("Enter a radious");
  var result = 3.14*Math.sqrt(a);
  document.write("The Area of circle is ",result)

}

AreaCircle();

*/