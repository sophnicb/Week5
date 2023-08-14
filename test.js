console.log ("Hello Test");

let name = " sophie ";
let age = " 26";
const future_job ="web developer";

var sentenceCat = 
"my name is" + 
name +
",I am" + age + " years old and i will soon become a" + future_job + "!";

var sentenceinter = `my name is ${name}, I am ${age} years old and i will soon become a ${future_job}!`
console.log (sentenceinter)
console.log (sentenceCat)

var allergic_to_prawn = true;

if (allergic_to_prawn == true) 
{console.log ("breadsticks!")}
else {console.log ("shellfish!")
}

function addTwoMumbers (number1,number2) {
    let result=number1 + number2;
    return result;}

    addTwoMumbers(100,564);
console.log (addTwoMumbers(100,564))

function pressAlert (){
    alert("The button was pressed!!");
}
document.getElementById("myButton").addEventListener("click",pressAlert())

  // Cart Pop up
  document.querySelector("#cart")
  .addEventListener("click",function(){
    document.querySelector(".popup-cart").classList.add("active");
   });
    document.querySelector(".popup-cart .closecart-btn")
   .addEventListener("click",function(){
       document.querySelector(".popup-cart").classList.remove("active");
    }); 
   
