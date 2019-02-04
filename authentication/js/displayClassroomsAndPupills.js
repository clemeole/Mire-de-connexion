$(document).ready(function() {

  var containerClassroom = $("#containerClassroom");
  var containerPupil = $("#containerPupil");

  var blocPage = $("#blocPage");



  containerClassroom.click(function() {
    displayClassrooms();
  });

  containerPupil.click(function() {
    displayPupills();
  });


  function displayPupills() {

    var windowPupills = $("<div></div>");


    windowPupills.addClass("windowPupills");
    blocPage.append(windowPupills);

    $(".windowPupills").before("<div id= \"beforewindowPupills\"> </div>");
    //windowClassrooms.append(beforewindowClassrooms);
    squareDimensions(windowPupills);
    centerVertically(blocPage, windowPupills);
    centerHorinzontally(blocPage, windowPupills);

    $("#beforewindowPupills").click(function() {
      console.log("gre");
      $(".windowPupills").remove();
      $(this).remove();
      $("#topbar").css("-webkit-filter", "blur(0px)");
      $("#divLeft").css("-webkit-filter", "blur(0px)");
      $("#divRight").css("-webkit-filter", "blur(0px)");

    });


    $("#topbar").css("-webkit-filter", "blur(5px)");
    $("#divLeft").css("-webkit-filter", "blur(5px)");
    $("#divRight").css("-webkit-filter", "blur(5px)");

  }



  function displayClassrooms() {

    var windowClassrooms = $("<div></div>");


    windowClassrooms.addClass("windowClassrooms");
    blocPage.append(windowClassrooms);

    $(".windowClassrooms").before("<div id= \"beforewindowClassrooms\"> </div>");
    //windowClassrooms.append(beforewindowClassrooms);
    squareDimensions(windowClassrooms);
    centerVertically(blocPage, windowClassrooms);
    centerHorinzontally(blocPage, windowClassrooms);


    $("#beforewindowClassrooms").click(function() {
      console.log("gre");
      $(".windowClassrooms").remove();
      $(this).remove();
      $("#topbar").css("-webkit-filter", "blur(0px)");
      $("#divLeft").css("-webkit-filter", "blur(0px)");
      $("#divRight").css("-webkit-filter", "blur(0px)");

    });


    $("#topbar").css("-webkit-filter", "blur(5px)");
    $("#divLeft").css("-webkit-filter", "blur(5px)");
    $("#divRight").css("-webkit-filter", "blur(5px)");

  }






  function centerVertically(container, content) {
    var space;
    console.log(content.height());
    space = container.height() - content.height();
    space /= 2;

    content.css("top", space);
    console.log("hey");
    //content.css("margin-top", space);
  }


  function centerHorinzontally(container, content) {
    var space;
    space = container.width() - content.width();
    space /= 2;

    content.css("left", space);
  }


  function squareDimensions(content) {
    var hContent = content.height();
    content.css("width", hContent);
  }

});