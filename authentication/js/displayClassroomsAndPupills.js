$(document).ready(function() {

  var containerClassroom = $("#containerClassroom");
  var containerPupil = $("#containerPupil");

  var windowPupills = $("<div></div>");
  var windowClassrooms = $("<div></div>");

  var blocPage = $("#blocPage");

  var blocPupills = $("<div id=\"blocPupills\"></div>");

  var selectedIcon = $("<div></div>");
  selectedIcon.addClass("selectedIcon");

  var currentPupill = $("<img src=\"\" />");


  createPupills();


  containerClassroom.click(function() {
    displayClassrooms();
  });

  containerPupil.click(function() {
    displayWindowPupills();
    displayPupills();

    $(".pupillImage").click(function() {
      //set index to the selectedIcon relative to the container of .pupillImage, in order to identify the pupill.


      console.log($(this).children().attr("src"));
      console.log(currentPupill.attr("src"));

      if ($(this).children().attr("src") != currentPupill.attr("src")) {

        console.log("hey je suis rentré !");
        var index = $(".pupillImage").index(this);
        addSelected($(this), index);
        currentPupill = $("<img src=\"" + $(this).children().attr("src") + "\" />");
        currentPupill.addClass("currentPupill");

        $("#containerPupil").append(currentPupill);
        centerVertically($("#containerPupil"), currentPupill);
        centerHorinzontally($("#containerPupil"), currentPupill);

      } else {
        var index = $(".pupillImage").index(this);
        addSelected($(this), index);
      }


    });


  });


  function createPupills() {

    for (var i = 0; i < 18; i += 1) {
      var containerImg = $("<div></div>");
      containerImg.addClass("containerImg");
      var pupillImage = $("<div></div>");
      pupillImage.addClass("pupillImage");
      var pupillIcon = $("<img src=\"img/ghost.png\" />");
      pupillIcon.addClass("pupillIcon");
      var namePupill = $("<p>clément plantier</p>")
      namePupill.addClass("namePupill");

      containerImg.append(pupillImage);
      pupillImage.append(pupillIcon);
      containerImg.append(namePupill);
      blocPupills.append(containerImg);

      pupillIcon.css("display", "inline-block");



    }

  }


  function displayPupills() {

    windowPupills.append(blocPupills);

    centerHorinzontally($(".containerImg"), $(".namePupill"));
    centerHorinzontally($(".containerImg"), $(".pupillImage"));

    centerVertically($(".pupillImage"), $(".pupillIcon"));
    centerHorinzontally($(".pupillImage"), $(".pupillIcon"));

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


      removeWindow(windowClassrooms, $(this));
    });


    $("#topbar").css("-webkit-filter", "blur(5px)");
    $("#divLeft").css("-webkit-filter", "blur(5px)");
    $("#divRight").css("-webkit-filter", "blur(5px)");

  }



  function addSelected(image, index) {
    image.append(selectedIcon);

    selectedIcon.attr("id", index);
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
    //console.log("content " + content.innerHeight());
    //console.log("container " + content.innerHeight());
    space = container.height() - content.height();
    space /= 2;

    content.css("top", space);

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