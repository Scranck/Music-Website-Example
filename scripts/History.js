let Beethoven = new Audio("Assets/5th.wav");

function setBeethoven(){
    document.getElementById("beet").src = "Assets/Beethoven5th.png";
    document.getElementById("bee").innerHTML = "Beethoven's 5th Symphony";
    Beethoven.play();
}

function endBeethoven(){
    document.getElementById("beet").src = "Assets/beethoven.jpg";
    document.getElementById("bee").innerHTML = "Ludwig Van Beethoven";
    Beethoven.pause();
}


//I had planned to do one for each composer, however, felt it may be redundant for the purpose of this project.
//For this reason, I chose to only use this code to do Beethoven's picture.