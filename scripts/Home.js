let theme = new Audio('Assets/VivaldiSpring.oga');
let jam = new Audio('Assets/RockMusic.mp3');

function setRock(){
    document.getElementById("mainHeading").innerHTML = "Learn to play music and start your own band!";
    jam.play();
}

function endRock(){
    document.getElementById("mainHeading").innerHTML = "Welcome to Music Central!";
    jam.pause();
}

function setClassical(){
    document.getElementById("mainHeading").innerHTML = "Learn about classic composers and their eras of music!";
    theme.play();
}

function endClassical(){
    document.getElementById("mainHeading").innerHTML = "Welcome to Music Central!";
    theme.pause();
}

function musicHistory(){
    document.getElementById("history").innerHTML = "Learn about the history of music from pre-history to today";
}

function endMusicHistory(){
    document.getElementById("history").innerHTML = "Music History";
}

function instruments(){
    document.getElementById("instruments").innerHTML = "Learn how to read music!";
}

function endInstruments(){
    document.getElementById("instruments").innerHTML = "Learn to Play Music";
}

function theory(){
    document.getElementById("theory").innerHTML = "Learn how music works and key terms to know";
}

function endTheory(){
    document.getElementById("theory").innerHTML = "Learn Music Theory";
}

function contact(){
    document.getElementById("contact").innerHTML = "Something we missed? Let us know!";
}

function endContact(){
    document.getElementById("contact").innerHTML = "Contact Us";
}