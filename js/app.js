'use strict';

let visitorName = prompt ('What\'s your name?');

/*
Answers are Yes, No, Yes, Yes, No
*/

alert('Welcome ' + visitorName + '! I\'m going to give you some yes or no questions, try and guess these facts about me!');

let resp1 = prompt ('Is Casey\'s favorite breakfast food Hashbrowns?');

if (resp1.toUpperCase().charAt(0) === 'Y'){ //yes

  //console.log('That\'s right! Casey absolutely loves hashbrowns with just some salt and pepper.');

  alert('That\'s right! Casey absolutely loves hashbrowns with just some salt and pepper.');
}
else { //no

  //console.log('That\'s incorrect! Casey loooves hasbrowns and could eat them every single day.');

  alert('That\'s incorrect! Casey loooves hasbrowns and could eat them every single day.');
}


let resp2 = prompt ('Did Casey develop an interest in computers AFTER the age of 12?');

if (resp2.toUpperCase().charAt(0) === 'N'){

  //console.log('That\'s right! Casey has been growing up around, and playing with computers as young as the age of 4. She remembers enjoying playing games on the Macintosh!');

  alert('That\'s right! Casey has been growing up around, and playing with computers as young as the age of 4. She remembers enjoying playing games on the original Macintosh, such as Cosmic Osmo!');
}

else {

  //console.log('That\'s incorrect! Casey grew up around computers, and they have fond memories of games on the original Macintosh such as Cosmic Osmo!');

  alert('That\'s incorrect! Casey grew up around computers, and they have fond memories of games on the original Macintosh such as Cosmic Osmo!');
}


let resp3 = prompt ('Has Casey published and released to the public any videogames of their own?');

if (resp3.toUpperCase().charAt(0) === 'Y'){

  //console.log('That\'s right! Casey has released to itch.io three free prototype videogames, titled: Here's The Kicker, The Jackasstronaut, and Nest Defender The First: The Start Of An Empire.');

  alert('That\'s right! Casey has released to itch.io three free prototype videogames, titled: Here\'s The Kicker, The Jackasstronaut, and Nest Defender The First: The Start Of An Empire.');
}

else {

  //console.log('That is incorrect! Casey has actually released to itch.io three free prototype videogames, titled: Here\'s The Kicker, The Jackasstronaut, and Nest Defender The First: The Start Of An Empire.');
  

  alert('That is incorrect! Casey has actually released to itch.io three free prototype videogames, titled: Here\'s The Kicker, The Jackasstronaut, and Nest Defender The First: The Start Of An Empire.');
}

let resp4 = prompt ('Does Casey value experimental games that ultimately fail to achieve their potential, higher than polished games that do an established concept well?');

if (resp4.toUpperCase().charAt(0) === 'Y'){

  //console.log('That\'s right! Casey is far more interested in  weird and experimental games that try something new, even if the final result is something that is entirely not fun. Yume Nikki is a favorite, as it uses a tool for making RPGs, and instead uses it to make an objectiveless, surreal exploration game.');

  alert('That\'s right! Casey is far more interested in weird and experimental games that try something new, even if the final result is something that is entirely not fun. Yume Nikki is a favorite, as it uses a tool for making RPGs, and instead uses it to make an objectiveless, surreal exploration game.');
}

else {

  //console.log('That is incorrect! Casey is far more interested in weird and experimental games that try something new, even if the final result is something that is entirely not fun. Yume Nikki is a favorite, as it uses a tool for making RPGs, and uses it to make an objectiveless surreal exploration game.');

  alert('That is incorrect! Casey is far more interested in weird and experimental games that try something new, even if the final result is something that is entirely not fun. Yume Nikki is a favorite, as it uses a tool for making RPGs, and instead uses it to make an objectiveless, surreal exploration game.');
}

let resp5 = prompt ('Does Casey consider themselves to be an individual human?');

if (resp5.toUpperCase().charAt(0) === 'N'){
  //console.log('That is actually correct! While Casey considers themselves the "main person" within their body, smaller other personalities sometimes chime in to provide secondary opinions. These others have their own creeds and opinions, and even preferred names, seperate from my own. Brains are wild.');

  alert('That is actually correct! While Casey considers themselves the "main person" within their body, smaller other personalities sometimes chime in to provide secondary opinions. These others have their own creeds and opinions, and even preferred names, seperate from my own. Brains are wild.');
}

else {
  //console.log('That is actually correct! While Casey considers themselves the "main person" within their body, smaller other personalities sometimes chime in to provide secondary opinions. These others have their own creeds and opinions, and even preferred names, seperate from my own. Brains are wild.');

  alert('That is, oddly enough, incorrect! While Casey considers themselves the "main person" within their body, smaller other personalities sometimes chime in to provide secondary opinions. These others have their own creeds and opinions, and even preferred names, seperate from Casey\'s. Brains are wild.');
}

