function randomElementOf(theArray) {
  return theArray[Math.floor(Math.random() * theArray.length)];
} // close function

mathematicians = [{
    "name" : "Galileo",
    "des": "You cannot stand devotion to archaic works that do not stand up to emprical evidence. You may go along to get along, but you'll mutter the truth under your breath",
    "image": "galileo.jpg"
  },
  {
      "name": "Isaac Newton",
     "des": "You see further by standing on the shoulders of giants.",
     "image": "newton.jpg"
  },
  {
      "name": "Hypatia",
     "des": "You are a trailblazer. Literally.",
     "image": "hypatia.jpg"
  },
  {
      "name": "Ada Lovelace",
     "des": "You take numbers and language and make them work for you.",
     "image": "ada.jpg"
  }
];

mi = randomElementOf(mathematicians);

// Title
document.getElementById("title").innerHTML = "You are " + mi.name;
// image
document.getElementById("image").innerHTML = '<img src="images/' + mi.image + '">';

// heading
document.getElementById("youAre").innerHTML = "You are " + mi.name;

// description
document.getElementById("desc").innerHTML = mi.des;
    
// meta
var mea = '<meta property="og:title" content="You are ' +  mi.name;
mea +=  '"/><meta property="og:image" content="images/' + mi.image + '"  />';
document.getElementById("met").innerHTML = mea;
