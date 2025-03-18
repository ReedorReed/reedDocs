---
title: JavaScript - Playground
description: A place to test small JS projects
slug: /javascript-playground
sidebar_position: 1
sidebar_label: 'JavaScript - Playground'
---

## Coin-flip app with Math.random()

```javascript
let num = Math.random();

if (num > 0.5) {
    console.log("Heads");
} else {
    console.log("Tails");
}

```

In the above code I use the Math.random() method, to create a random number between 0 and 1 in the variable `num`.

Then I use an `if` statement, to valuate if my variable `num` is larger chan 0.5 or not. This gives me a 50% chance og getting either **Heads** or **Tails**.

## Let's take Math.random() a step further and make a Magic-8-Ball app

```javascript
let question = "Should i get a cup of coffee?";
const randomNumber = Math.floor(Math.random() *9) +1;

let answer = "";

if (randomNumber == 1) {
  answer = "Yes - definitely."
} else if (randomNumber == 2) {
  answer = "It is decidedly so."
} else if (randomNumber == 3) {
  answer = "Without a doubt."
}else if (randomNumber == 4) {
  answer = "Ask again later."
}else if (randomNumber == 5) {
  answer = "Better not tell you now."
}else if (randomNumber == 6) {
  answer = "My sources say no."
}else if (randomNumber == 7) {
  answer = "Outlook not so good."
} else if (randomNumber == 8) {
  answer = "Very doubtful."
} else{
  answer = "Reply hazy, try again."
}


console.log("Question:       " + question);

console.log("Magic 8 Ball:   " +  answer);


```

In this Magic-8-ball app I begin with declaring a few variables.

the `question` variable is used to have a text string I can change depending on what I want to ask my magic-8-ball.

Then I made `randomNumber` to pick a random number between 1-9. The Math.floor() method makes the Math.random() number to a whole number also known as a `integer`.

Lastly I made an variable set to an empty string, which will contain the result of the `if` statement.

Then I made an `if` statement in which I assigned the nine different answers my magic-8-ball app can use to the numbers 1-9 which the randomNumber variable will generate.

Lastly I `console.log();` two text strings each + the `question` and `answer` variable. To show the results in the console.
