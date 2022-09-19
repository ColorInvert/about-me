'use strict';
let score = 0;




let visitorName = '';
let guessednum = 0;
let flavorguess = 'NONE';
let correct = false;
let numguesses = 0;
let flavguesses = 0;

const flavors = ['peanutbutter', 'mintchocolatechip', 'mint', 'chocolatechip', 'mintchoco', 'mintchocochip', 'bacon', 'cookiesandcream', 'cookiesncream'];//all "Correct" Icecream answers


//Answers are Yes, No, Yes, Yes, No






visitorName = askName();

alert('Welcome ' + visitorName + '! I\'m going to give you some yes or no questions, try and guess these facts about me!');


questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert('Thank you for playing, ' + visitorName + '. Maybe you feel that you understand me just that little bit better.\n\nBy the way, your score was ' + score + ', out of 7.');



function askName() {
  let visitorName = prompt('What\'s your name?');
  return visitorName;
}


function questionOne() {
  let resp1 = prompt('Is Casey\'s favorite breakfast food Hashbrowns?');

  if (resp1.toUpperCase().charAt(0) === 'Y') {

    alert('That\'s right! Casey absolutely loves hashbrowns with just some salt and pepper.');
    score++;
  }
  else {

    alert('That\'s incorrect! Casey loooves hashbrowns and could eat them every single day.');
  }
}


function questionTwo() {
  let resp2 = prompt('Did Casey develop an interest in computers AFTER the age of 12?');

  if (resp2.toUpperCase().charAt(0) === 'N') {


    alert('That\'s right! Casey has been growing up around, and playing with computers as young as the age of 4. She remembers enjoying playing games on the original Macintosh, such as Cosmic Osmo!');
    score++;
  }

  else {

    alert('That\'s incorrect! Casey grew up around computers, and they have fond memories of games on the original Macintosh such as Cosmic Osmo!');
  }
}


function questionThree() {
  let resp3 = prompt('Has Casey published and released to the public any videogames of their own?');

  if (resp3.toUpperCase().charAt(0) === 'Y') {

    alert('That\'s right! Casey has released to itch.io three free prototype videogames, titled: Here\'s The Kicker, The Jackasstronaut, and Nest Defender The First: The Start Of An Empire.');
    score++;
  }

  else {

    alert('That is incorrect! Casey has actually released to itch.io three free prototype videogames, titled: Here\'s The Kicker, The Jackasstronaut, and Nest Defender The First: The Start Of An Empire.');
  }
}


function questionFour() {
  let resp4 = prompt('Does Casey value experimental games that ultimately fail to achieve their potential, higher than polished games that do an established concept well?');

  if (resp4.toUpperCase().charAt(0) === 'Y') {

    alert('That\'s right! Casey is far more interested in weird and experimental games that try something new, even if the final result is something that is entirely not fun. Yume Nikki is a favorite, as it uses a tool for making RPGs, and instead uses it to make an objectiveless, surreal exploration game.');
    score++;
  }

  else {

    alert('That is incorrect! Casey is far more interested in weird and experimental games that try something new, even if the final result is something that is entirely not fun. Yume Nikki is a favorite, as it uses a tool for making RPGs, and instead uses it to make an objectiveless, surreal exploration game.');
  }
}


function questionFive() {
  let resp5 = prompt('Does Casey consider themselves to be an individual human?');

  if (resp5.toUpperCase().charAt(0) === 'N') {

    alert('That is actually correct! While Casey considers themselves the "main person" within their body, smaller other personalities sometimes chime in to provide secondary opinions. These others have their own creeds and opinions, and even preferred names, seperate from my own. Brains are wild.');
    score++;
  }

  else {

    alert('That is, oddly enough, incorrect! While Casey considers themselves the "main person" within their body, smaller other personalities sometimes chime in to provide secondary opinions. These others have their own creeds and opinions, and even preferred names, seperate from Casey\'s. Brains are wild.');
  }
}


function questionSix() {
  alert('Guess my number below 11, and above 0! You have 4 tries. Ready?');

  guessednum = prompt('Go on, guess!');
  numguesses++;

  while (!correct) {


    if (Number(guessednum) === 4) {
      alert('you got it in ' + numguesses + '!');
      numguesses++;
      score++;
      break;
    }

    if (numguesses > 3) {
      alert('Sorry! Out of guesses! the correct answer was 4.');
      break;
    }

    if (Number(guessednum) > 4) {
      numguesses++;
      guessednum = prompt('Too high!');

    }

    else if (Number(guessednum) < 4) {
      numguesses++;
      guessednum = prompt('too low!');

    }


  }
}


function questionSeven() {
  correct = false;
  alert('Try and guess one of my favorite ice cream flavors! You have 6 tries. Ready?');


  while (flavguesses < 6 && !correct) {

    flavorguess = prompt('guess a flavor!');
    for (let i = 0; i < flavors.length; i++) {
      console.log(`array flavor>> ${flavors[i]}`);
      if (flavors[i] === flavorguess.toLowerCase().replace(/\s+/g, '')) {
        alert('that\'s right! You got one!');
        score++;
        correct = true;
        break;
      }



    }
    if (!correct) {
      alert('nope, that\'s not one of them!');
      flavguesses++;
    }
  }


  let flavorlist = '';

  for (let i = 0; i < flavors.length; i++) {

    flavorlist += flavors[i];
    flavorlist += ', ';
    console.log(flavors[i]);
    console.log(flavorlist);
  }

  alert('The possible correct answers were ' + flavorlist + '.');
}
