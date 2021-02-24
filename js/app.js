//get the amount of meal
//provide discount beasd on the amount of the meal
//show up the discount

var Name = prompt("What's Your Name?")
var age = prompt("How Old are You ?")
var password = prompt("Enter your password")

//Lab: 06a - Programming with JavaScript
console.log(password)
count = 0;
arr = password.split("")
for (var i = 0; i < arr.length; i++) {
    count = count + 1

}
if (count >= 8) {
    alert("sucess password")
}
else {
    alert("Falied password you need check the longest of password")
}

// End 


var amountOfMeal = prompt("how many meal you have order?")

if (amountOfMeal > 3 && amountOfMeal <= 6) {
    alert("you do have 15% discount!");
} else if (amountOfMeal >= 8 && amountOfMeal < 12) {
    alert("You Get 30% Discount!");
} else if (amountOfMeal == 0) {
} alert(" You Have To Buy More Meal");



document.getElementById("myHeader").innerHTML = "You Order" + " " + amountOfMeal;


document.getElementById("button").onclick = function () {
    var favouriteColor = prompt("What's Your Favourit color?")
    document.getElementById("button").style.backgroundColor = favouriteColor;

};
