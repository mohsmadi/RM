//get the amount of meal
//provide discount beasd on the amount of the meal
//show up the discount

var Name=prompt("What's Your Name?")
var age=prompt("How Old are You ?")



var amountOfMeal=prompt("how many meal you have order?")

if (amountOfMeal > 3 && amountOfMeal <=6){
    alert ("you do have 15% discount!");
}else if(amountOfMeal >=8 && amountOfMeal < 12){
    alert("You Get 30% Discount!");
}else if (amountOfMeal == 0){
}alert (" You Have To Buy More Meal");

document.getElementById("myHeader").innerHTML = "You Order" + amountOfMeal ;