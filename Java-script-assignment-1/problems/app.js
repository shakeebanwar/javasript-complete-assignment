// chap #1

/*1.Write a script to greet your website visitor using JS alert
box.

alert('Helloworld')

*/



/* 2.Write a script to display following message on your web page:

alert('Error!Please Enter a Valid Password');

*/

/*
3. Write a script to display following message on your web
page: (Hint : Use line break)

alert('Welcome to JsLand..\nHappyCoding')


*/

/*4. Write a script to display following messages in sequence:

alert('Welcome to JsLand')
*/


/*5. Generate the following message through browser’s
developer console:

console.log("Hello...I can run Js through my webbrowser console")

*/


// Task 6

// alert('Sucessfully Login')


// Task 7

// (a) <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script src="app.js"></script>
// </head>
// <body>
    
// </body>
// </html>



// (B) <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
    
// </head>
// <body>
    
// </body>
// <script></script>
// </html>



// (C)<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script>alert('Helloworld')</script>
    
// </head>
// <body>
    
// </body>
// </html>


// (D)<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
   
// </head>
// <body>
    
// </body>
// </html>

// <script>
//     alert('Hello')
// </script>






// chap 2

// Task 1

// var username="";

// Task2

// var myName="ShakeebAnwar";

// Task3

// a .var message = "";
// b .message="Hello World";
// c .alert(message);

// Task 4

/*var myName="shakeeb";
var age="21 year Old";
var course="Certified Mobile App Development";

alert(myName);
alert(age);
alert(course);

*/

// Task 5

/*
var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(pizza);
*/

// Task 6

/*
var email="shakeebanwar250@gmail.com";
alert("My Email Address is "+email);

*/

// Task 7

/*

var book = "A smart way to learn JavaScript";
alert("I am trying to Learn From the Book "+book);

*/

// Task 8

/*

var a = "Yah! I can write HTML content through  Javascript";
document.write(a);
*/

// Task 9

/*
var a = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(a);

*/


// Chap#3

// Task 1

/*
var age = 21
alert("I am "age+" old");
*/

// Task 2

/*
var n = localStorage.getItem('on_load_counter');
if(n===null){
    n=0;
}
n++;
localStorage.setItem("on_load_counter", n);
alert("You have visited this page "+n+" times");

*/

// Task 3

/*

var birthYear=1998
document.write("My Birth Year is "+birthYear+"<br>");
document.write("Data Type of my Birth Year is "+typeof(birthYear));
*/

// Task 4

/*

visitorName=prompt("Enter your Name");
producttitle=prompt("Enter the Product Name");
quantity=prompt("Enter your Quantity");
document.write("<b>"+visitorName+"</b>"+" ordered "+"<b>"+quantity+producttitle+"</b>"+" on XYZ Clothing Store")
*/


// chap#4

// Task 1

/*

var variable1 = "Hello World!", variable2 = "Testing...",variable3 = 42;

*/

// Task 2

// Ilegal variables
/*
var 2shakeeeb="";
var shak  eeb="";
var *shakeeeb="";
var ^shakeeb="";
var )shakeeb="";

*/


// Legal Variable
/*
var a="";
var $s="";
var _s=""
var shakeeb_Anwar="";
var shakeebAnwar="";

*/


// Task 3

/*
document.write("<h1>"+"Rules of Name JS Variables"+"</h1>"+"<br>")
document.write("Variable names can only contain numbers,$ and _ . For example $my_1stVariable"+"<br>")
document.write(" Variables must begin with a letter , $ or _ . For example $name, _name or name"+"<br>")
document.write("Variable names are case Sensitive"+"<br>")
document.write("Variable names should not be JS keywords"+"<br>")

*/



// chap 5

// Task 1
/*

var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a+b
document.write("Sum of "+a+" and "+b +" = "+c);

*/


// Task 2

/*
var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a-b
document.write("Sum of "+a+" and "+b +" = "+c);

var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a*b
document.write("Sum of "+a+" and "+b +" = "+c);


var a = parseInt(prompt("Enter a number 1"));
var b = parseInt(prompt("Enter a number 2"));
var c=a/b
document.write("Sum of "+a+" and "+b +" = "+c);

*/



// Task 3

/*
var a;
document.write("Value After variable declartion is "+a+"<br>");
a=5;
document.write("Initial Value is "+a+"<br>");
a=a+1;
document.write("Value After Increment is : "+a+"<br>");
a=a+7
document.write("Value After Addition is : "+a+"<br>");
a=a-1;
document.write("Value After Decrement is : "+a+"<br>");
a=a%3;
document.write("The Remainder is : "+a+"<br>");

*/

// Task 4

/*
var ticketPrice=600;
document.write("Cost of 5 Movie Ticket is "+ticketPrice*5); 

*/

// Task 5

/*

var table=prompt("Enter a number to display the table");
var len=prompt("Enter the length")
for(i=1;i<=len;i++){
    document.write(table+" x "+i+" = "+table*i,"<br>")
}

*/


//Task 6

/*
var celicus = prompt("Enter a Temperature in celcius");
var FahrenHeit = celicus*9/5+32
document.write(celicus+"C "+" IS Equal to "+FahrenHeit+"F")

var FahrenHeit=prompt("Enter a Tempearure in FahrenHeit");
var celcius=(FahrenHeit-32)*5/9;
document.write(celcius)

*/

// Task 7

/*
var item1=650
var item2=100
var quantity1=3
var quantity2=7
var shipCharge=100
var item1Total=item1*quantity1
var item2Total=item2*quantity2

document.write("Price of item1 is "+item1+"<br>")
document.write("Quantity of item1 is "+quantity1+"<br>")
document.write("Price of item2 is "+item2+"<br>")
document.write("Quantity of item2 is "+quantity2+"<br>")
document.write("Total cost is ",item1Total+item2Total+shipCharge)

*/

// Task 8

/*
document.write("<h1>"+"MARKSHEET"+"</h1>","<br>")
var totalMarks=980;
var obtainMarks=804
var percentage=obtainMarks/totalMarks*100
document.write("Total marks is ",totalMarks+"<br>");
document.write("Obtain marks is ",obtainMarks+"<br>");
document.write("Percentage is ",percentage+"<br>");

*/

// Task 9

/*
var dollar = 163.50;
var saudi = 43.58;
document.write("Total Currency in PKR :",(dollar*10)+(saudi*25))
*/

// Task 10

/*
var a = 10;
document.write(a+5*10/2);

*/


// Task 11

/*

document.write("<h1>"+"Age Calculator"+"</h1>"+"<br>");
var currentYear=2020;
var birthYear=1998;
document.write("Current Year is ",currentYear+"<br>");
document.write("Birth Year is ",birthYear+"<br>");
document.write("Your Age is  ",currentYear-birthYear+"<br>");


*/


// Task12

/*

document.write("<h1>"+"The Geometrizer"+"</h1>"+"<br>");
var radius=20;
document.write("The Radius of circle is ",radius+"<br>");
var circumference=2*3.14*20;
var area = 3.14*radius*radius
document.write("The Circumference is ",circumference+"<br>");
document.write("The Area is ",area+"<br>");
*/

// TASK 13

/*
document.write("<h1>"+"The LifeTime Supply Calculator"+"</h1>"+"<br>");
var snacks = "Rite";
var age = 15;
var maxage = 65;
var snacksPerDay=3;
document.write("Favourite snack is ",snacks+"<br>");
document.write("Current age is ",age+"<br>");
document.write("Estimated Max Age ",maxage+"<br>");
document.write("Amount of snacks perday is ",snacksPerDay+"<br>");
document.write("you will need "+(maxage-age)*snacksPerDay," Choclate chip to last you until the rip old age of "+maxage);

*/

// chap 6-9

/*
TASK1 
var a = prompt("Enter a number");
document.write("Result"+"<br>");
document.write("The value of a is ",a,"<br><br><br>");

document.write("The value of ++a is ",++a,"<br>");
document.write("Now the value of a is ",a,"<br><br><br>");

document.write("The value of a++ is ",a++,"<br>");
document.write("Now the value of a is ",a,"<br><br><br>");

document.write("The value of --a is ",--a,"<br>");
document.write("Now the value of a is ",a,"<br><br><br>");


document.write("The value of a-- is ",a--,"<br>");
document.write("Now the value of a is ",a,"<br><br><br>");

*/


/*
Task 2

 var a = 2;
 var b = 1;
 var Result = --a - --b + ++b + b--;

 document.write("The value of of a is ",a,"<br>");
 document.write("The value of of b is ",b,"<br>");
 document.write("The value of of Result is ",Result,"<br>");


 --a predecrement means the value of a is 1
 --a - --b predecrement of a is 0 and predecrement of b is 0 
--a - --b + ++b; we allready know the predecrement of a and b is 0 and preincrement of ++b means 1
--a - --b + ++b + b--; predecrement of --a means 0 and precrement of --b is 0 and preincrement of ++b means 1 and post decrement of b-- means 1

 */

/*

Task 3
var a = prompt("Enter your name");
document.write("Assalam Walikom ",a)

*/

/*

Task 5
var a = prompt("Enter a number to display the table ");
if (a==""){

    for(var i=1;i<=10;i++){
        document.write(5*i,"<br>")
    }
  
}
else{

    for(var i=1;i<=10;i++){
        document.write(a*i,"<br>")
    }
    
}

*/

/*

Task 6


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js"></script>
</head>
<body>
    
  
<table >
    
    <table>
        <tr>
          <th>Subject</th>
          <th>TotalMarks</th>
          <th>ObtainMarks</th>
          <th>percentage</th>
        </tr>
        <tr>
          <td  id ="subject1"></td>
          <td id="tmarks1"></td>
          <td id ="obtain1"></td>
          <td id ="per1"></td>
        </tr>
        <tr>
          <td id ="subject2"></td>
          <td id="tmarks2"></td>
          <td id ="obtain2"></td>
          <td id ="per2"></td>
        </tr>
        <tr>
          <td id ="subject3"></td>
          <td id="tmarks3"></td>
          <td id ="obtain3"></td>
          <td id ="per3"></td>
        </tr>
      
        
      </table>
  </table>
  
    
   
</body>

<script>
    var subject1=prompt("Enter a subject 1");
    var subject2=prompt("Enter a subject 2");
    var subject3=prompt("Enter a subject 3");
    
    var totalMarks=100;
    var obtainMarks1=prompt("Enter a obtain marks of subject 1");
    var obtainMarks2=prompt("Enter a obtain marks of subject 2");
    var obtainMarks3=prompt("Enter a obtain marks of subject 3");
    
    var percentage1=obtainMarks1/totalMarks*100;
    var percentage2=obtainMarks2/totalMarks*100;
    var percentage3=obtainMarks3/totalMarks*100;

document.getElementById('subject1').innerHTML=subject1;
document.getElementById('subject2').innerHTML=subject2;
document.getElementById('subject3').innerHTML=subject3;

document.getElementById('tmarks1').innerHTML=totalMarks;
document.getElementById('tmarks2').innerHTML=totalMarks;
document.getElementById('tmarks3').innerHTML=totalMarks;

document.getElementById('obtain1').innerHTML= obtainMarks1;
document.getElementById('obtain2').innerHTML= obtainMarks2;
document.getElementById('obtain3').innerHTML= obtainMarks3;


document.getElementById('per1').innerHTML=percentage1;
document.getElementById('per2').innerHTML= percentage1;
document.getElementById('per3').innerHTML= percentage1;




</script>
</html>



*/


// chap 9-11


/*
Task 1
var city = prompt("Enter a city");
city=city.toLowerCase();
if(city=="karachi"){
    document.write("Welcome to the city of light")
}
*/

/*

Task 2

var gender = prompt("Enter a gender");
gender=gender.toLowerCase();
if(gender=="male"){
    document.write("Good Morning Sir");
}

else{
    document.write("Good Morning Madam")
}
*/


/*
Task 3



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="app.js"></script>
</head>
<body>
    
    <table class="table table-striped">
        <thead>
          <tr>
           
            <th scope="col">S.NO</th>
            <th scope="col">Signal Color</th>
            <th scope="col">Message</th>
         
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td id="red"></td>
            <td id ="msg1"></td>
           
          </tr>
          <tr>
            <th scope="row">2</th>
            <td id="green"></td>
            <td id ="msg2"></td>
          
          </tr>
          <tr>
            <th scope="row">3</th>
            <td id="blue"></td>
            <td id ="msg3"></td>
         
          </tr>
        </tbody>
      </table>

  
    
   
</body>

<script>
   

red = prompt('Enter a traffic signal color');
green = prompt('Enter a traffic signal color');
yellow = prompt('Enter a traffic signal color');

document.getElementById('red').innerHTML=red;
document.getElementById('green').innerHTML=green;
document.getElementById('blue').innerHTML=yellow;


var message1="Must Stop";
var message2="Ready to Move";
var message3="Move Now";

document.getElementById('msg1').innerHTML=message1;
document.getElementById('msg2').innerHTML=message2;
document.getElementById('msg3').innerHTML=message3;



</script>
</html>



*/


/*
Task 4

var fuel = prompt("Enter a fuel quantity");
if (fuel<0.25){
    document.write('Please refill the fuel in your car');
}

*/


/*

Task 5
message is displayed
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}


message is not displayed
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}


message is not displayed
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}

message is display
if (c === 13){
    alert("condition 2 is true");
    }

if (++c < 14){
alert("condition 3 is true");
}
message is display
if(c === 14){
    alert("condition 4 is true");
 }
    

message is display
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


message is display
if (true){
    alert("True");
    }
if (false){
    alert("False");
    }
   
message is display
if("car" < "cat"){
    alert("car is smaller than cat");
    }

    */


/*
Task 6

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="app.js"></script>
</head>
<body>

    <div class="container">
    <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Percentage</th>
            <th scope="col">Grade</th>
            <th scope="col">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Greater the or Equal to 80</td>
            <td>A-one</td>
            <td>Excellent</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Greater the or Equal to 70</td>
            <td>A</td>
            <td>Good</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Greater the or Equal to 60</td>
            <td>B</td>
            <td>you need to improve</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Less then 60</td>
            <td>Fail</td>
            <td>Sorry</td>
          </tr>
        </tbody>
      </table>
    
    </div>
</body>

<script>
   



    document.write("<h1>","Marksheet","</h1>","<br><br><br><br>");
    var totalMarks=300;
    var sub1=parseInt(prompt("Enter the math marks"));
    var sub2=parseInt(prompt("Enter the english marks"));
    var sub3=parseInt(prompt("Enter the pst marks"));
    var obtain=sub1+sub2+sub3;
    var Percentage=obtain/totalMarks*100;
    document.write("Total marks is ",totalMarks,"<br>");
    document.write("obtain marks is ",obtain,"<br>");
    document.write("percentage is ",Percentage,"<br>");
    if(Percentage>=80){
      var grade = "A-one";
      document.write("Grade ",grade,"<br>");
      document.write("Excellent","<br>");
    }
    else if(Percentage>=70){

      var grade = "A";
      document.write("Grade ",grade,"<br>");
      document.write("Good","<br>");


    }

    else if(Percentage>=60){

      var grade = "B";
      document.write("Grade ",grade,"<br>");
      document.write("you need to improve","<br>");
    }

    else if(Percentage<=60){
      var grade = "Fail";
      document.write("Grade ",grade,"<br>");
      document.write("Sorry","<br>");
    }

</script>
</html>



*/

/*
Task 7
var secretNumber = 10;
var UserNumber = prompt("Enter a from range 1 to 10");
if (UserNumber==secretNumber){
  document.write("Bingo! Correctanswer")
}

else if(++UserNumber==secretNumber){

  document.write("Close enough to the correct answer")
  
}

*/



/*
Task 8

var number = prompt("Enter a number to check divisible by 3 or not");
if (number%3==0){
  document.write("Number is divisible by 3")
}

else{
  document.write("Number is not divisible by 3")
}
*/



/*
Task 9

var number = prompt("Enter a number to check even or not");
if(number%2==0){
  document.write("Number is Even")
}
else{
  document.write("Number is Odd")
}

*/

/*

Task 10

var T = prompt("Enter a temperature");
if( T > 40 ){

  document.write("It is too hot outside.")

}
else if(T > 30 ){
  document.write("The Weather today is Normal.")
}
else if(T > 20 ){
  document.write("Today’s Weather is cool.")
}
else if(T > 10 ){
  document.write("OMG! Today’s weather is so Cool.")
}
*/



/*
Task 11

var firstnumber = +prompt("Enter a First number");
var secondnumber = +prompt("Enter a Second number");
var operator = prompt("Enter Operator for e.g +,-,/,*,%");

if(operator=="+"){
  document.write(firstnumber+secondnumber)
}

if(operator=="-"){
  document.write(firstnumber-secondnumber)
}


if(operator=="*"){
  document.write(firstnumber*secondnumber)
}


if(operator=="/"){
  document.write(firstnumber/secondnumber)
}

if(operator=="%"){
  document.write(firstnumber%secondnumber)
}

*/




// chapters12-13.

/*
Task 1
var a = prompt("Enter a single character");
var t = typeof(a);

if (a==a.toUpperCase()){

  document.write("UpperCase","<br>")
  document.write(t);

}




else if(a==a.toLowerCase()){
  document.write("LowerCase","<br>")
  document.write(t);

}

*/

/*
Task 2
var a = +prompt("Enter a number 1");
var b = +prompt("Enter a number 2");
if(a==b){
  document.write("Number1 and Number2 are equal")
}

else if(a>b){
  document.write("Number1 is greater")
}

else if(a<b){
  document.write("Number2 is greater")
}

*/

/*

Task 3
var a = +prompt("Enter a number");
if (a<0){
  document.write("Negative")
}

else if(a>0){
  document.write("Possitive")
}

else if(a==0){
  document.write("Number is 0")
}

*/

/*

Task 4
var a = prompt("Enter a character to check vowel or not ");
a = a.toLowerCase();
if (a =="a" || a =="e"|| a =="i"|| a =="o"|| a =="u" ){
  document.write("True");
}

else{
  document.write("False");
}

*/

/*
Task5

var password = 12345;
var userpassword = +prompt("Enter a password");
if (userpassword==""){
  var userpassword = +prompt("Please Enter your Password");
  if(userpassword==password){
    document.write(' Correct! The password youentered matches the original password')
  }
  else{
    document.write('Incorrect password')
  }
}

*/

/*
Task 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

*/

/*
Task 7


var time = prompt("Enter a time in 24 hour format");
var convertime=time.slice(0,2)%12;
document.write(time," = ",convertime,"pm")

*/


// chapters14-16

/*
Task 1

var a = []
*/

/*
Task 2
var a = Array();
*/


/*
Task 3
var a = ["shakeeb"];

*/



/*
Task 4
var a = [1];

*/


/*
Task 5

var a = [true,false]
*/

/*

Task 6
var a = [true,"shakeeb",false,0,9.6]
console.log(a);

*/

/*
Task 7
var a = ["SSC", "HSC","BCS","BS", "BCOM", "MS", "M.Phil", "PhD"]
document.write("<h1>","Qualifications","</h1>","<br>")

for(var i = 0;i<a.length;i++){
  document.write(i+1," ",a[i],"<br>")
}

*/

/*
Task 8

var std1=prompt("Enter a student name 1");
var score1=prompt("Enter Student1 score");

var std2=prompt("Enter a student name 2");
var score2=prompt("Enter Student2 score");

var std3=prompt("Enter a student name 3");
var score3=prompt("Enter Student3 score");




var Sname = new Array();
Sname.push(std1,std2,std3);
console.log(Sname);

var score = [];
score.push(score1,score2,score3);
console.log(score)

var totalMarks = 500;
var percentage = [];

for(var i = 0;i<score.length;i++){

 var percent = score[i]/totalMarks*100
percentage.push(percent)

}

document.write("Score of ",Sname[0]," is ",score[0]," Percentage: ",percentage[0]," % ","<br>")
document.write("Score of ",Sname[1]," is ",score[1]," Percentage: ",percentage[1]," % ","<br>")
document.write("Score of ",Sname[2]," is ",score[2]," Percentage: ",percentage[2]," % ","<br>")

*/

/*
Task 9

var color = ["red","white","yellow"];
console.log(color)

var user = prompt("Enter a Color name to add to first possition");
user=user.toLowerCase();
for(var i = 0;i<color.length;i++){
  if (color[i]==user){
    ind = color.indexOf(color[i])
    console.log(ind)
    
  }



}
color.splice(0,0,color[ind]);
color.splice(ind+1,1);
document.write("After Updating ",color,"<br>")

var usercolor = prompt("What color should be added in the End")
color.push(usercolor);
document.write("After Updating ",color,"<br>")

var color1 = prompt("Enter another color");
var color2 = prompt("Enter another color");

color.unshift(color1,color2)
document.write("After Updating ",color,"<br>")

color.shift();
document.write("After Removing First ",color,"<br>")

color.pop();
document.write("After Deleting the last ",color,"<br>")


var col = prompt("Enter the color");
var colpos =  prompt("Enter the possition to add")
color.splice(colpos,0,col)
document.write("After Updating ",color,"<br>")


var delindex=prompt("At which possition would like to delete");
color.splice(delindex,1);
document.write("After Updating ",color,"<br>")

*/

/*
Task 10
var scorelist = [320,230,480,120];
document.write(scorelist,"<br>")
var sortScore=scorelist.sort();
document.write(sortScore,"<br>");

*/


/*
Task 11

var city = ['karachi','lahore','islamabad','quetta'];
document.write(city,"<br>")
var selected = [];
selected.splice(0,0,selected.push(city.slice(0,3)));
selected.shift();
document.write(selected,"<br>")

*/


/*
Task12

var arr = ["This", "is", "my", "cat"];
document.write(arr.join(" "));

*/

/*
Task 13

var device = new Array("Keyboard","MOUSE","Printer","Monitor");
document.write("Device","<br>")
document.write(device.join(),"<br>");

for(var i = 0;i<device.length;i++){

  document.write("Out:","<br>");
  document.write(device[i],"<br>")
}


*/

/*

Task 14

var device = new Array("Keyboard","MOUSE","Printer","Monitor");
document.write("Device","<br>")
document.write(device.join(),"<br>");

for(var i = device.length-1;i>=0;i--){

  
  document.write("Out:","<br>");
  document.write(device[i],"<br>")
}

*/


/*

Task 15

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="app.js"></script>
</head>
<body>

    <label for="cars">Choose a Brand:</label>

    <select name="cars" id="Cars">
      
    </select>
</body>

<script>
   


var brands = ["Nokia","Samsung","Apple","Song","Haier"] 
var obj = document.getElementById('Cars');
for(var i = 0;i<brands.length;i++){

    var opt = brands[i];
    var e = document.createElement("option");
    e.text = opt;
    e.value = opt;
    obj.add(e);

}

</script>
</html>


*/



// chap 17-20

/*
Task 1

var arr = [[],[]];
*/

/*
Task 2

var arr1=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]

for(var i = 0;i<arr1.length;i++){
  document.write(arr1[i].join(" "),"<br>")
}

*/

/*
Task 3

for(var i = 1;i<=10;i++){
  document.write(i,"<br>")
}

*/

/*
Task 4

var table = prompt("Enter a number to print the table");
var len = prompt("Enter the length of table");
for(var i = 1;i<=len;i++){
  document.write(table,"x",i," = ",table*i,"<br>")
}

*/


/*
Task 5

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for(var i = 0;i<fruits.length;i++){

  document.write(fruits[i],"<br>");
  document.write("Elements at index ",i," is ",fruits[i],"<br>")
}
  */


/*
Task 6

 document.write("Counting :")
  for(var i = 1;i<=15;i++){
    
    document.write(i,",")
  }

  document.write("<br>","Reverse Counting :")

  for(var i = 10;i>=1;i--){
    
    document.write(i,",")
  }

  document.write("<br>","Even Number:")

  for(var i = 0;i<=20;i++){
    if(i%2==0){
      document.write(i,",")
    }
  }


  document.write("<br>","Odd Number:")

  for(var i = 0;i<=20;i++){
    if(i%2==0){
      
    }
    else{
      document.write(i,",")
    }
  }


document.write("<br>","Series:")
for(var i = 1;i<=20;i++){
  if(i%2==0){
    document.write(i+"k",",")
  }
}

*/



/*Task 7
var item = ["cake","applepie","cookies","chips","patties"];
var user = prompt("Welcome to ABC Bakery what do you want Sir/Madam");
user=user.toLowerCase();
for(var i = 0;i<item.length;i++){

  
  if(item[i]==user){
    document.write(item[i]," is available at index ",i," in our bakery");
    
    break;
    
  }
  
}

*/


/*
Task 8

var a = [24, 53, 78, 91, 12,464];
var large = 0;
document.write("Array of item is ")
for(var i = 0;i<a.length;i++){
  document.write(" ",a[i])
  if(a[i]>large){
    large=a[i]
   
    
  }
}
document.write("<br>","Large number of array is ",large)



*/

/*
Task 9

var a = [24, 53, 78, 91, 12,565,888];
document.write("Array Item is  ")
for(var i =0;i<a.length;i++){
  document.write(a[i]," ")
}
a.sort(function(a, b){
  return a - b;
});

document.write("<br>","Smallest item in an array is ",a[0])

*/

/*
Task 10
for(var i=5;i<=100;i=i+5){
  document.write(i," , ")
}

*/