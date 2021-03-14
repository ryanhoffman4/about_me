"use strict";

//Opening Greeting
let userName = prompt("Hello there! What is your name?");
alert("Thanks for visiting my page, " + userName + ".");

//Question 1
let userAnswer = prompt("Is my name Ryan?");
let validAnswer = false;

while (validAnswer == false)
{
  switch (userAnswer.toLowerCase() )
  {
    case 'y':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'yes':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'n':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'no':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    default:
      console.log("Please enter a yes or no answer.");
      alert("Please enter a yes or no answer.");
      userAnswer = prompt("Is my name Ryan?");
  }
}


//Question 2
userAnswer = prompt("Have I graduated college yet?");
validAnswer = false;

while (validAnswer == false)
{
  switch (userAnswer.toLowerCase() )
  {
    case 'y':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'yes':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'n':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'no':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    default:
      console.log("Please enter a yes or no answer.");
      alert("Please enter a yes or no answer.");
      userAnswer = prompt("Have I graduated college yet?");
  }
}


//Question 3
userAnswer = prompt("Do I cook a mean lasagna?");
validAnswer = false;

while (validAnswer == false)
{
  switch (userAnswer.toLowerCase() )
  {
    case 'y':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'yes':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'n':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'no':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    default:
      console.log("Please enter a yes or no answer.");
      alert("Please enter a yes or no answer.");
      userAnswer = prompt("Do I cook a mean lasagna?");
  }
}


//Question 4
userAnswer = prompt("Am I having fun at Code Fellows?");
validAnswer = false;

while (validAnswer == false)
{
  switch (userAnswer.toLowerCase() )
  {
    case 'y':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'yes':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'n':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'no':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    default:
      console.log("Please enter a yes or no answer.");
      alert("Please enter a yes or no answer.");
      userAnswer = prompt("Am I having fun at Code Fellows?");
  }
}


//Question 5
userAnswer = prompt("Do I enjoy running?");
validAnswer = false;

while (validAnswer == false)
{
  switch (userAnswer.toLowerCase() )
  {
    case 'y':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'yes':
      console.log("That is incorrect.");
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'n':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    case 'no':
      console.log("That is correct.");
      alert("That is correct.");
      validAnswer = true;
      break;

    default:
      console.log("Please enter a yes or no answer.");
      alert("Please enter a yes or no answer.");
      userAnswer = prompt("Do I enjoy running?");
  }
}


//Closing Greeting
alert("Thanks for answering my questions, " + userName + ".");