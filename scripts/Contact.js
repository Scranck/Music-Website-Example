function start(){
    let cmtButton = document.getElementById('cmt_btn');
    cmtButton.addEventListener('click', handleButtonClick);
}

function handleButtonClick(){
    let theSpan = document.getElementById("mySpan");
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";


xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
      let albums = xhr.response;

      for(let i = 0; i < albums.length; i++) {
        theSpan.innerHTML += albums[i].title;
        theSpan.innerHTML += "<br>";
      }
    }
  }; 

  xhr.onerror = (err) => {
    theSpan.innerHTML = "Error occurred: " + err.message;
  }; 


  xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
  xhr.send();
}//end handleButtonClick


window.addEventListener('load', start);