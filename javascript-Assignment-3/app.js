// chap#38-44

/*
Task 1
function power(a,b){

    return a**b;

}

console.log(power(2,4))

*/

/*
Task 2
function checkleap(){

var year = prompt('Enter a year')
if(year%4==0){

    alert('leap year')

}

else{
    alert('Not leep year')
}

}

checkleap();
*/
/*
Task 3

function Area_of_triangle(a,b,c){

    var s = (a+b+c)/2;
    var Area = s*(s-a)*(s-b)*(s-c)
    return Area
}

console.log(Area_of_triangle(2,2,2));

*/

/*
Task 4

function result(){

    var Eng = 78;
    var Math = 70;
    var Chem = 80;
    var total = 300;

    function average(){
        obtain = Eng+Math+Chem;
        var Average = obtain/3;
        console.log(Average)

    }

    function percentage(){
        var Percent = obtain/total*100;
        console.log(Percent)
    }

    average();
    percentage();
}


result();

*/

/*
Task 5
a = [1,2,3,4,5,6];
console.log(a);
var b = prompt('Enter a number to return its possition');
for(i=0;i<a.length;i++){

    if(a[i]==b){
        
        console.log(i)
    }
}
*/

/*
Task 6


var sentence = "The pakistan is a islamic country"
function removeVowels(sentence) {
    return sentence.replace(/[aeiou]/gi, '');
  }

console.log(removeVowels(sentence));

*/

// Task 7

/*
function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());


  */



// [aeiou] means any of these characters.
// {2} exactly 2 of them (change to {2,} if you wanna match 2 or more characters in a row)
// g don't stop after the first match (change to gi if you want to make it case insensitive)


/*

Another simple way to do this less lines of code

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var res = str.match(/[aeiou]{2}/g);
    return res ? res.length : 0;
  }
  
  var found = findOccurrences();
  
  console.log(found)

  */


/*
Task 8
function converter(){
    var a = prompt('Enter a distance in km');
    function meters(){
        var m = a/1000;
        console.log(a,'km = ',m,' meters')
    }

    function feet(){
        var feet = a*3280.8;
        console.log(a,'km = ',feet,' feets')
    }

    function inches(){
        var Inches = a*39370.07874;
        console.log(a,'km = ',Inches,' Inches')


    }

    function centimeters(){
        var Centimeters = a*100000.00
        console.log(a,'km = ',Centimeters,' centimeters')

    }

    meters();
    feet();
    inches();
    centimeters();
}

converter();

*/

/*
Task 9
function overtime(){

    count = 1;
    while(count<=10){
        var workinghours = prompt('Enter working hours');
        if (workinghours>40){

            var Overtime = workinghours-40;
            var overtimepay = Overtime*12;
            console.log(count,' Employee Overtime pay is ',overtimepay)

        }
        else{
            console.log("You have to work for more than 40 hours to get over time pay")
        }
        count++;
    }
}

overtime()

*/
/*
Task 10

function cashier(){


    var amount = prompt('Enter a amount to widdraw');

    //calculation

    console.log("Required notes of Rs. 100  :", parseInt(amount / 100));
    console.log("Required notes of Rs. 50  :", parseInt((amount % 100) / 50));
    console.log("Required notes of Rs. 10  :",parseInt((((amount % 100) % 50) / 10)));


}

cashier();


*/



// chap 43-48

//TASK 1
/*
<button onclick='show()'></button>

funtion show(){

    alert('hello world')
}
*/

// Task 2
/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>

<div class="container">


    <div class="row">

        <img src="mobile1.jpg" alt="" srcset="" height="300" width="300" onclick="showmessage()">
        <img src="mobile2.jpg" alt="" srcset="" height="300" width="300" onclick="showmessage()">
        <img src="mobile3.jpg" alt="" srcset="" height="300" width="300" onclick="showmessage()">
    </div>
</div>
    
</body>
<script src="app.js"></script>

<script>


    function showmessage(){
        alert('Thankyou for purchase this Item')
    }
</script>
</html>
*/



// TASK 3

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>

    <div class="container">
<table>

    <th>S.no</th>
    <th>Name</th>
    <th>Class</th>
    <th>Action</th>

    <tr>

        <td>1</td>
        <td>shakeeb</td>
        <td>10</td>
        <td><button >Delete</button></td>
    </tr>

    <tr>

        <td>2</td>
        <td>sami</td>
        <td>10</td>
        <td><button >Delete</button></td>
    </tr>

    <tr>

        <td>3</td>
        <td>safdar</td>
        <td>10</td>
        <td><button >Delete</button></td>
    </tr>

    <tr>

        <td>4</td>
        <td>Talha</td>
        <td>10</td>
        <td><button>Delete</button></td>
    </tr>
</table>

</div>

    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>

    $('button').click(function(e){
        $(this).closest('tr').remove()
     })
</script>
</html>

*/


// TASK 4

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>

  <img id="changeimages" src="mobile1.jpg" alt="" srcset="" onmouseover="change1()" onmouseout="change2()">

    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>

 function change1(){

    var a = document.getElementById('changeimages');
    a.src = 'mobile2.jpg'
 }


 function change2(){
    var a = document.getElementById('changeimages');
    a.src = 'mobile1.jpg'
 }
</script>
</html>




*/

// task 5

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container">
    <P id="text">0</P>

    <button id="start" onclick="starttimer()">Increase</button>
    <button id="start2" onclick="decrease()">Decrease</button>
</div>
    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>


var c = 0;
var a;
var interval;
var interval2;


function start(){

    document.getElementById('start2').disabled = false

    a = document.getElementById('text');
    c++;
    a.innerHTML=c;
    document.getElementById('start').disabled = true

}

function starttimer(){

    clearInterval(interval2)

interval=setInterval(start,1000)

}

function decreasetime(){
    document.getElementById('start2').disabled = true
    clearInterval(interval);
    c--;
    a = document.getElementById('text');
    a.innerHTML=c;
    document.getElementById('start').disabled = false




}

function decrease(){
    clearInterval(interval)
    interval2 = setInterval(decreasetime,1000)
}



</script>
</html>



*/



// chap 49-52

// TASK 1

/*


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container">

    
        <br>
        <br>
        <label for="firstname">FirstName</label>
    <input type="text" id="firstname">
    <br>
    <br>
    <label for="secondname">SecondName</label>
    <input type="text" id="secondname">
    <br>
<br>
    <button type="button" onclick="submit()">Submit</button>
    <p id="para"></p>


 
</div>
    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>

    function submit(){

        var first = document.getElementById('firstname').value;
        var second = document.getElementById('secondname').value;
        var p = document.getElementById('para');
        p.innerHTML=first+' '+second;
        

    }






</script>
</html>



*/


// TASK 2

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container">

    
        <P id="para">Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
        <button id="read" onclick="read()">Readmore</button>

 
</div>
    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>

function read(){
    var p = document.getElementById('para')
    p.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit.Et suscipit soluta accusantium maiores libero reprehenderit officiis minus, explicabo voluptas ut labore dolor nobis tempora, veniam, hic nesciunt non iusto numquam."
}




</script>
</html>



*/


// Task 3

/*


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
<div class="container">

     
    <br>
    <br>
    <label for="firstname">FirstName</label>
<input type="text" id="firstname">
<br>
<br>


<label for="class">class</label>
<input type="text" id="class">
<br><br>
<button type="button" id="add">Submit</button>

    <table class="table">
        <thead>
          <tr>
            
            <th scope="col">Serial-no</th>
            <th scope="col">FirstName</th>
            <th scope="col">Class</th>
            <th scope="col">Action</th>
            
          </tr>
        </thead>
        <tbody id="tableBody">
         
          
        </tbody>
      </table>
    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>


   add=document.getElementById('add');
   add.addEventListener('click',getupdate);
   update();

   function getupdate(){

    first = document.getElementById('firstname').value;
    classes = document.getElementById('class').value;

    if(localStorage.getItem("itemsJson")==null){

        itemsJsonArray=[]; 
        itemsJsonArray.push([first,classes]); 
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    }

    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson'); 
        itemsJsonArray=JSON.parse(itemsJsonArrayStr);

        itemsJsonArray.push([first,classes]);
          localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray))
    }
    update(); 
   }

   function update(){

    if(localStorage.getItem("itemsJson")==null){
        itemsJsonArray=[]; //empty array 
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
    }

    else{
        itemsJsonArrayStr = localStorage.getItem('itemsJson'); //localstorage ma jo bi save ha wo string ki form ma ha tu parse karwa kar uska object banana hoga
        itemsJsonArray=JSON.parse(itemsJsonArrayStr); //string to object
      
      }


      let tablebody=document.getElementById('tableBody');//upar humna ak table banaya aur usko id ki behalf pa fetch karwaya
      let str = "";
      itemsJsonArray.forEach((element,index)=>{
        str+=`
        <tr>
          <th scope="row">${index+1}</th>
          <td>${element[0]}</td>
          <td>${element[1]}</td>
          <td><button class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
          
        </tr>
      `;

      });

      tablebody.innerHTML=str;
   }



    
     function deleted(itemIndex){

        console.log("Delete",itemIndex);
        itemsJsonArrayStr = localStorage.getItem('itemsJson'); 
        itemsJsonArray=JSON.parse(itemsJsonArrayStr);
        itemsJsonArray.splice(itemIndex,1)  
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonArray));
        update();
      }
</script>
</html>



*/

// chap 52-57

// Task 1


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
// <style>
// /* Modal Content (image) */
// .modal-content {
//     margin: auto;
//     display: block;
//     width: 80%;
//     max-width: 700px;
//   }
  
//   .myImg {
//     border-radius: 5px;
//     cursor: pointer;
//     transition: 0.3s;
//   }
//   .myImg:hover {opacity: 0.7;}
  
//   .mar{
//     margin: 20px;
//   }
  
  
  
//   </style>
  
//     </head>
//   <body>
//   <div class="container">
  
//        <div class="row ">
  
//         <img class="myImg mar" id="1" onclick="modall(id)" src="images/others/1.jpg" height="300" width="300"alt="">
//         <img class="myImg mar" id="2" onclick="modall(id)" src="images/others/10.jpg" height="300" width="300"alt="">
//         <img class="myImg mar" id="3" onclick="modall(id)" src="images/others/14.png" height="300" width="300"alt="">
      
//        </div>
//   </div>
      
  
//   <!-- The Modal -->
//   <div id="myModal" class="modal">
//     <span class="close">&times;</span>
//     <img class="modal-content" id="img01">
//     <div id="caption"></div>
//   </div>
  
  
  
      
//   </body>
//   <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
//   <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
//   <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
//   <script src="app.js"></script>
  
//   <script>
   
//     function modall(a){
  
  
//     var modal = document.getElementById("myModal");
//     var img = document.getElementById(a);
//     var modalImg = document.getElementById("img01");
//     var captionText = document.getElementById("caption");
  
//     img.onclick = function(){
//       modal.style.display = "block";
//       modalImg.src = this.src;
//       captionText.innerHTML = this.alt;
//     }
  
  
//     // Get the <span> element that closes the modal
//   var span = document.getElementsByClassName("close")[0];
  
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() { 
//     modal.style.display = "none";
//   }
//     }
//   </script>
//   </html>
  
  
  

// Task 2

/*

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


  </head>
<body>
<div class="container">
<p id="para" style="font-size: 20px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat atque perspiciatis beatae. Saepe commodi aut odio soluta, qui labore sapiente nam possimus dolorem itaque ipsum corrupti laboriosam. Aliquam, ipsa eum?</p>
    <button id="zoomin" onclick="zoomin()">zoomin</button> 
    <button id="zoomout" onclick="zoomout()">zoomout</button> 
</div>
    



    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>
function zoomin()
{

  var p = document.getElementById('para');
  p.style.fontSize="30px"
}

function zoomout(){
  var p = document.getElementById('para');
  p.style.fontSize="20px"
}
</script>
</html>



*/


// chap 58-67

/*


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">


  </head>
<body>
<div class="container">

  
  
  <div>
    <h1> DOM </h1>

    <div id="form-content" class="content">
    <label for="first-name">First Name</label>
    <input type="text" id="first-name" />
    <label for="last-name">Last Name</label>
    <input type="text" id="last-name" />
    <label for="email">Email</label>
    <input type="text" id="email" />
    </div>
    <div id="main-content" class="content"><p class="render"> First Name : Alex</p>
    <p class="render" id="lastName">Last Name: Bank</p>
    <p class="render"> Email : alexbank@example.com</p>
    <p class="render"> Country : Pakistan </p>
    <p class="render"> contact : +92 300 1234567</p>
    <br>
    <br>
    <button onclick="submit()">submit</button>
    </div>
    </div>
    
</div>
    



    
</body>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="app.js"></script>

<script>

  //Task 1 :a and Task 1:b
 var maincontent = document.getElementById('main-content')
  var a = maincontent.children
  for(i=0;i<a.length;i++){

    console.log(a[i])

  }
 


//Task 1:c

var p = document.getElementsByClassName('render');
for(i=0;i<p.length;i++){

document.write(p[i].innerHTML,"<br>")
}


//Task 1:d

  function submit(){



  var first = document.getElementById('first-name').value;
var second = document.getElementById('last-name').value;
var email = document.getElementById('email').value;

document.write(first,'<br>',second,'<br>',email)
  }



  Task 2 (i)

    
  var t1 = document.getElementById('form-content');
  console.log(t1.nodeType)

  Task (ii)

  var t2 = document.getElementById('lastName');
  console.log(t2.nodeType)

  console.log(t2.childNodes.nodeType)

  Task (iv)
  var t3 = document.getElementById('main-content');
  console.log(t3.firstElementChild);
console.log(t3.lastElementChild);


Task(v)
var t4 = document.getElementById('lastName');
console.log(t4.nextElementSibling);
console.log(t4.previousElementSibling);

Task(vi)
var t5 = document.getElementById('email');
console.log(t5.parentElement)
console.log(t5.nodeType)
 
</script>
</html>








*/






