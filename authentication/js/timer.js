var timer = 10
var myTimer;
setInterval(back, 1000);

$(document).click(function() {

  timer = 10;

});



function back() {

  if (timer == 1000) {
    if (right == false) {
      appendPupillToContainer($("<img src = " + srcPupillDefault + " />"));
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