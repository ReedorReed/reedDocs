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
function magic8Ball(question) {
const randomNumber = Math.floor(Math.random() *9) +1;

if (randomNumber == 1) {
  console.log("Yes - definitely.")
} else if (randomNumber == 2) {
  console.log("It is decidedly so.")
} else if (randomNumber == 3) {
  console.log("Without a doubt.")
}else if (randomNumber == 4) {
  console.log("Ask again later.")
}else if (randomNumber == 5) {
  console.log("Better not tell you now.")
}else if (randomNumber == 6) {
  console.log("My sources say no.")
}else if (randomNumber == 7) {
  console.log("Outlook not so good.")
} else if (randomNumber == 8) {
  console.log("Very doubtful.")
} else{
  console.log("Reply hazy, try again.")
}
}

magic8Ball("Should I make a cup of coffee?");
```

In my Magic-8-Ball app I begin it by making the `function()` which takes the parameter _question_. A parameter is placeholder value the function uses when called. 

I declare a variable called `randomNumber` which I store the `Math.floor(Math.random()*9)+1` methods in, which will give me a random number between 1-9.

I then use an `if` statement to assign numbers between 1-9 to different answers the 8 Ball can use.

Finally I call the function and put in a question for it to answer.