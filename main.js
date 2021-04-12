// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

const classLike = document.querySelectorAll(".like-glyph");

 function glyphCallback(ev){
    const heart = ev.target;
    mimicServerCall("Url")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      const modal = document.getElementById("modal");
      className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });

 }


    for (var x = 0 ; x < (classLike.length - 1); x++ ) {
      
      classLike[x].addEventListener("click", glyphCallback);
 
    }
        


  
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
