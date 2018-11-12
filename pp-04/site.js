(function(){
  // Check to make sure essential features are supported
  if (typeof document.querySelector === 'undefined') {
    // No? Then bye!!!
    return;

function ringDoorbell() {
  var doorbell = new Audio('media/doorbell.mp3');
  doorbell.play();
}
document.querySelector(".doorbell").addEventListener("click", ringDoorbell());
}

let button = document.querySelector("button");
button.addEventListener("click", ringDoorbell());
});

window.addEventListener("keypress", event => {
  if (event.key == "d") {
    doorbell.play();
  }
});
