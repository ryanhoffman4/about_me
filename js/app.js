"use strict";

//Opening Greeting
let userName = prompt("Hello there! What is your name?");
alert("Thanks for visiting my page, " + userName + ".");

let num_correct = 0;

//Question 1
let userAnswer = prompt("Is my name Ryan?");
let validAnswer = false;

while (validAnswer == false)
{
  switch (userAnswer.toLowerCase() )
  {
    case 'y':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    case 'yes':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    case 'n':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'no':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    default:
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
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'yes':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'n':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    case 'no':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    default:
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
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    case 'yes':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;

      break;

    case 'n':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'no':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    default:
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
      alert("That is correct.");
      validAnswer = true;
      num_correct++;

      break;

    case 'yes':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;

      break;

    case 'n':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'no':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    default:
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
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'yes':
      alert("That is incorrect.");
      validAnswer = true;
      break;

    case 'n':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    case 'no':
      alert("That is correct.");
      validAnswer = true;
      num_correct++;
      break;

    default:
      alert("Please enter a yes or no answer.");
      userAnswer = prompt("Do I enjoy running?");
  }
}


//Question 6, number guessing game
let num_guess = prompt('For this next question, please guess a number.  You have four attempts at getting it correct.');
let counter = 0;
while (counter < 4)//only 4 opportunities to guess correctly
{
  if (num_guess === 4)
  {
    alert('You guessed the number correctly! Good job!');
    num_correct++;
    counter = 4;
  }
  else if (num_guess > 4)
  {
    counter++;
    if (counter === 3)
    {
      alert('You have used all of your attempts.  The correct number was 4.');
    }
    else
    {
      num_guess = prompt('Your guess was too high.  Please guess another number.');
    }
  }
  else if (num_guess < 4)
  {
    counter++;
    if (counter === 3)
    {
      alert('You have used all of your attempts.  The correct number was 4.');
    }
    else
    {
      num_guess = prompt('Your guess was too low.  Please guess another number.');
    }
  }
}



//Question 7, vowel guessing game
let vowels = ['a', 'e', 'i', 'o', 'u'];
let user_char = prompt('Please enter a letter that is always a vowel:');
let attempt = 0;
let guessed_correct = false;
while (attempt < 6)
{
  for (let i = 0; i < vowels.length; i++)
  {
    if (user_char === vowels[i])
    {
      alert('Good job! You guessed correctly!');
      alert('The correct guesses were: a, e, i, o, u.');
      guessed_correct = true;
      break;
    }
  }

  if (guessed_correct === true)
  {
    num_correct++;
    break;
  }

  else 
  {
    attempt++;
    if (attempt === 6)
    {
      alert('You have run out of attempts');
      alert('The correct guesses were: a, e, i, o, u.');
    }
    else
    {
      user_char = prompt('Please try another letter that is always a vowel:');
    }
  }
}

//Closing Greeting
//Update correct answers
alert("Thanks for answering my questions, " + userName + " . You got "  + num_correct +  " questions correct out of 7.");
