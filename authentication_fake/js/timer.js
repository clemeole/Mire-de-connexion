var timer = 10
var myTimer;
setInterval(back, 1000);

$(document).click(function() {

  timer = 0;

});



function back() {

  if (timer <= 0) {
    if (right == false) {
      appendPupillToContainer($("<img src = " + srcPupillDefault + " />"));
      cancelAuthentication();
      toStart();
    }
    timer = 10;
  }

  $(document).click(function() {

    stopFunction();

  });

  $("#timer").children().remove();
  $("#timer").append($("<p></p>"));
  timer -= 1;
  $("#timer>p").append(timer);

}

function stopFunction() {
  clearInterval(myTimer);
  timer = 10;
}