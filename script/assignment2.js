/*Task 2: (16-April-2023)
calculate the fitrah amount, first, ask the user to enter the total number of family
members using the prompt and store the value in a variable called
"familyMembers". Next, ask the user to choose a fitrah method by providing them
options using the prompt, and store the selected method and its price in variables.
Then, use an if-else block to check the user's input and calculate the fitrah amount
by multiplying the selected method's price with the number of family members.
Finally, display the calculated fitrah amount using an alert message.*/

/* familymember= prompt("Enter Total Number of Family Memebers")
fitrahmethod= prompt("Choose a fitrah method:\n 1. Wheat - Rs:250\n 2. Barley - Rs:450\n 3. Dates - Rs:2100\n 4 . Rasin - Rs:2800 ");
if (fitrahmethod === "1") {
    selectedMethod = "Wheat";
    methodPrice = 250;
}
else if (fitrahmethod === "2") {
    selectedMethod = "Barley";
    methodPrice = 450;
}
else if (fitrahmethod === "3") {
    selectedMethod = "Dates";
    methodPrice = 2100;
}
else if (fitrahmethod === "4") {
    selectedMethod = "Rasin";
    methodPrice = 2800;
}

fitrahamount = methodPrice* familymember;
alert("your fitrah amount is" + fitrahamount); */


/*  Task 3:
Create a program that generates a random number between 1 and 10 and stores it
in a variable called "secretNumber". Then, ask the user to enter a guess for the
secret number using a prompt.
Use an if-else statement to check if the user's guess matches the secret number. If
the guess is correct, display a message using an alert saying "Congratulations! You
guessed the secret number". Otherwise, if the guess is too high or too low, display
an appropriate message informing the user to guess again.*/



/* secratenumber = 6;
guessfornumber = prompt("Guess a Secrate number :");
 if(guessfornumber==secratenumber){
    alert("Congratulations You guess a correct Number");
 }
 else ( alert("Try Again , You guess a Wrong Number ")); */



 /* Task 4:
Create a program that asks the user to enter a name, and then prints out the name
with the first letter capitalized (Make your name in capitalized case). */


/*  username= prompt("Enter Your Name");
 username = username.toLowerCase();
 capitalized = username[0].toUpperCase();
  x = capitalized + username.slice(1);
 alert(x); */


/*  Task 5:
In this task, you will be creating two empty arrays called "contactNumbers" and
"contactNames". Using the prompt, you will ask the user to enter a contact number
and contact name. You will then push these values into their respective arrays
using the push method. After adding all the contacts, you will display the contact
numbers and names in the console. To do this, you will need to use a for loop to
iterate through both arrays and log each element to the console.
Make sure to use descriptive variable names and comment on your code for clarity. */

/* 
contactnumbers=[];
contactnames=[];

contactnumbers.push(prompt("Enter a contact number:"));
contactnames.push(prompt("Enter a contact name:"));

contactnumbers.push(prompt("Enter another contact number:"));
contactnames.push(prompt("Enter another contact name:"));

contactnumbers.push(prompt("Enter one more contact number:"));
contactnames.push(prompt("Enter one more contact name:"));

// Display contact numbers and names in the console
console.log("Contact Numbers:", ...contactnumbers);
console.log("Contact Names:", ...contactnames); */



/* 
Task 6:
Create an Array that contains different products, and get input from the user in which you
ask your user to give the position of that element he/she wants. Now remove that Item
from your array and console the removed item, Also display the remaining items in the
array and total number of items remaining. */

/* 
products = ["Lime Soda", "Strawberry Milkshake", "Banana Milkshake", "Lassi", "Coffee","Tea"];

 position = parseInt(prompt(`Enter the position of the product to remove (1-${products.length}):\n 1: Lime Soda \n 2 : Strawberry Milkshake \n 3: Banana Milkshake  \n 4: Lassi  \n 5: Coffee  \n 6: Tea` ));

// Remove the product at the specified position and save it to a variable  
 removedProduct = products.splice(position - 1, 1)[0];

// Display the removed product and the remaining products in the array
alert(`Removed product: ${removedProduct}`);
alert(`Remaining products: ${products.join(", ")}`);

// Display the total number of remaining products
alert(`Total number of remaining products: ${products.length}`);

 */



/* Task 7:
Create a program that asks the user for their nationality, gender, and age using the prompt
function. The program should then use nested if-else statements to determine if the
person is eligible to vote.
First, the program should check if the person is Pakistani or Indian. If they are not, the
program should display a message saying they are not eligible to vote.
If they are Pakistani or Indian, the program should then check their gender. If the person is
male and over the age of 18, they are eligible to vote. If the person is female and over the
age of 18, the program should ask if they are married. If they are married, they are eligible
to vote. If they are not married, they are not eligible to vote.
If the person is under 18, the program should display a message saying they are not eligible
to vote. */


/* nationality = prompt("Enter Your Nationality");
gender = prompt("Enter your Gender");
age= +prompt("Enter Your Age");

if(
    nationality == "pakistani" || nationality == "Pakistani" && nationality == "Indian" || nationality == "indian");
{
    if( gender == "Male" || gender=="male" && age >= 18)
    alert("Eligible for Vote")
}

if (gender == "Female"|| gender == "female" && age >=18){
   married= prompt(" Are you  Married ?")
   if (married === "yes") {
    alert("You are eligible to vote.");
  } 
  else  {
    alert("You are not eligible to vote.");
 }


}
else{
    alert("You Are Not Eligiable ");
}; 

 */



/* 
Task 8:
You have an array of that contains the name of Pakistani Teams Player selected for
WorldCup (15 Players) named as WorldCupSquad. Now tomorrow we have a match with
India, So make an array of final team players (11 Players) that will be playing in tomorrows
match from the WorldCupSquad array.
(Hint : Make sure it should not disturb the array that contains 15 players instead you have
to make a copy of this array */

 worldCupSquad = ["Babar Azam", "Fakhar Zaman", "Imam-ul-Haq", "Mohammad Rizwan", "Sarfraz Ahmed", "Shadab Khan", "Faheem Ashraf", "Hassan Ali", "Shaheen Afridi", "Haris Rauf", "Mohammad Hasnain", "Shoaib Malik", "Mohammad Hafeez", "Asif Ali", "Imad Wasim"];

// Make a copy of WorldCupSquad using the slice method

matchTeam = worldCupSquad.slice(0, 11);

// final team players for tomorrow's match

alert("Final team players for tomorrow's match:" +matchTeam);
