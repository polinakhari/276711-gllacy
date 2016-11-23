var link = document.querySelector(".address .btn");
var feedback = document.querySelector(".feedback");
var close = feedback.querySelector(".close");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.add("feedback_show");
  overlay.classList.add("overlay_show");        
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback_show");
  overlay.classList.remove("overlay_show");  
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback.classList.contains("feedback_show")) {
       feedback.classList.remove("feedback_show");
       overlay.classList.remove("overlay_show");
    }
  }
});
			
