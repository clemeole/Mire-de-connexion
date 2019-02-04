$(document).ready(function() {

  var containerClassroom = $("#containerClassroom");
  var containerPupil = $("#containerPupil");

  var windowPupills = $("<div></div>");
  var windowClassrooms = $("<div></div>");

  var blocPage = $("#blocPage");

  var blocPupills = $("<div id=\"blocPupills\"></div>");

  var selectedIcon = $("<div></div>");
  selectedIcon.addClass("selectedIcon");


  createPupills();


  containerClassroom.click(function() {
    displayClassrooms();
  });

  containerPupil.click(function() {
    displayWindowPupills();
    displayPupills();

    $(".pupillImage").click(function() {
      addSelected($(this));
    });


  });


  function createPupills() {

    for (var i = 0; i < 18; i += 1) {
      var containerImg = $("<div></div>");
      containerImg.addClass("containerImg");
      var pupillImage = $("<div></div>");
      pupillImage.addClass("pupillImage");
      var namePupill = $("<p>clément plantier</p>")
      namePupill.addClass("namePupill");

      containerImg.append(pupillImage);
      containerImg.append(namePupill);
      blocPupills.append(containerImg);


    }

  }


  function displayPupills() {

    windowPupills.append(blocPupills);

    centerHorinzontally($(".containerImg"), $(".namePupill"));
    centerHorinzontally($(".containerImg"), $(".pupillImage"));

  }




  function displayWindowPupills() {

    windowPupills.addClass("windowPupills");
    blocPage.append(windowPupills);

    $(".windowPupills").before("<div id= \"beforewindowPupills\"> </div>");
    squareDimensions(windowPupills);
    centerVertically(blocPage, windowPupills);
    centerHorinzontally(blocPage, windowPupills);

    $("#topbar").css("-webkit-filter", "blur(5px)");
    $("#divLeft").css("-webkit-filter", "blur(5px)");
    $("#divRight").css("-webkit-filter", "blur(5px)");


    $("#beforewindowPupills").click(function() {

      removeWindow(windowPupills, $(this));
      $("#topbar").css("-webkit-filter", "blur(0px)");
      $("#divLeft").css("-webkit-filter", "blur(0px)");
      $("#divRight").css("-webkit-filter", "blur(0px)");

    });

  }



  function displayClassrooms() {

    windowClassrooms.addClass("windowClassrooms");
    blocPage.append(windowClassrooms);

    $(".windowClassrooms").before("<div id= \"beforewindowClassrooms\"> </div>");
    //windowClassrooms.append(beforewindowClassrooms);
    squareDimensions(windowClassrooms);
    centerVertically(blocPage, windowClassrooms);
    centerHorinzontally(blocPage, windowClassrooms);


    $("#beforewindowClassrooms").click(function() {
      console.log("gre");

      removeWindow(windowClassrooms, $(this));
    });


    $("#topbar").css("-webkit-filter", "blur(5px)");
    $("#divLeft").css("-webkit-filter", "blur(5px)");
    $("#divRight").css("-webkit-filter", "blur(5px)");

  }



  function addSelected(image) {
    image.append(selectedIcon);
    removeWindow(windowPupills, beforewindowPupills);
  }

  function removeWindow(container, before) {
    container.remove();
    before.remove();
    $("#topbar").css("-webkit-filter", "blur(0px)");
    $("#divLeft").css("-webkit-filter", "blur(0px)");
    $("#divRight").css("-webkit-filter", "blur(0px)");

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