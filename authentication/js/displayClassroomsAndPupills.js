$(document).ready(function() {

  var containerClassroom = $("#containerClassroom");
  var containerPupil = $("#containerPupil");

  var windowPupills = $("<div></div>");
  var windowClassrooms = $("<div></div>");

  var blocPage = $("#blocPage");

  var blocPupills = $("<div id=\"blocPupills\"></div>");
  var blocClassrooms = $("<div id=\"blocClassrooms\"></div>");

  var selectedIcon = $("<div></div>");
  var selectedIconC = $("<div></div>");

  selectedIcon.addClass("selectedIcon");
  selectedIconC.addClass("selectedIconC");

  var currentPupill = $("<img src=\"\" />");
  var currentClassroom = $("<img src=\"\" />");


  createPupills();
  createClassrooms();


  containerClassroom.click(function() {
    displayWindowClassrooms();
    displayClassrooms();

    $(".classroomImage").click(function() {
      //set index to the selectedIconC relative to the container of .pupillImage, in order to identify the pupill.


      if ($(this).children().attr("src") != currentClassroom.attr("src")) {

        var index = $(".classroomImage").index(this);
        addSelectedC($(this), index);
        currentClassroom = $("<img src=\"" + $(this).children().attr("src") + "\" />");
        currentClassroom.addClass("currentClassroom");

        $("#containerClassroom").append(currentClassroom);
        centerVertically($("#containerClassroom"), currentClassroom);
        centerHorinzontally($("#containerClassroom"), currentClassroom);
        removeWindow(windowClassrooms, beforewindowClassrooms);
        $("#classroomDefault").remove();

      } else {
        var index = $(".classroomImage").index(this);
        addSelectedC($(this), index);
        removeWindow(windowClassrooms, beforewindowClassrooms);
      }


    });


  });

  containerPupil.click(function() {
    displayWindowPupills();
    displayPupills();

    $(".pupillImage").click(function() {
      //set index to the selectedIcon relative to the container of .pupillImage, in order to identify the pupill.


      if ($(this).children().attr("src") != currentPupill.attr("src")) {

        var index = $(".pupillImage").index(this);
        addSelected($(this), index);
        currentPupill = $("<img src=\"" + $(this).children().attr("src") + "\" />");
        currentPupill.addClass("currentPupill");

        $("#containerPupil").append(currentPupill);
        centerVertically($("#containerPupil"), currentPupill);
        centerHorinzontally($("#containerPupil"), currentPupill);

        removeWindow(windowPupills, beforewindowPupills);
        $("#pupillDefault").remove();

      } else {
        var index = $(".pupillImage").index(this);
        addSelected($(this), index);
        removeWindow(windowPupills, beforewindowPupills);
      }


    });


  });


  function createPupills() {

    for (var i = 0; i < 18; i += 1) {
      var containerImg = $("<div></div>");
      containerImg.addClass("containerImg");
      var pupillImage = $("<div></div>");
      pupillImage.addClass("pupillImage");
      var pupillIcon = $("<img src=\"img/michel.jpg\" />");
      pupillIcon.addClass("pupillIcon");
      var namePupill = $("<p>Elève numéro " + i + "</p>")
      namePupill.addClass("namePupill");

      containerImg.append(pupillImage);
      pupillImage.append(pupillIcon);
      containerImg.append(namePupill);
      blocPupills.append(containerImg);

      pupillIcon.css("display", "inline-block");



    }

  }

  function createClassrooms() {

    for (var c = 0; c < 2; c += 1) {
      var containerImgC = $("<div></div>");
      containerImgC.addClass("containerImgC");
      var classroomImage = $("<div></div>");
      classroomImage.addClass("classroomImage");
      var classroomIcon = $("<img src=\"img/alarm.png\" />");
      classroomIcon.addClass("classroomIcon");
      var nameClassroom = $("<p>Classe numéro " + c + "</p>");
      nameClassroom.addClass("nameClassroom");

      containerImgC.append(classroomImage);
      classroomImage.append(classroomIcon);
      containerImgC.append(nameClassroom);
      blocClassrooms.append(containerImgC);

      classroomIcon.css("display", "inline-block");
    }

  }


  function displayPupills() {

    windowPupills.append(blocPupills);

    $(".containerImg").css("display", "block");
    centerHorinzontally($(".containerImg"), $(".namePupill"));
    centerHorinzontally($(".containerImg"), $(".pupillImage"));

    centerVertically($(".pupillImage"), $(".pupillIcon"));
    centerHorinzontally($(".pupillImage"), $(".pupillIcon"));





  }


  function displayClassrooms() {
    windowClassrooms.append(blocClassrooms);

    centerHorinzontally($(".containerImgC"), $(".nameClassroom"));
    centerHorinzontally($(".containerImgC"), $(".classroomImage"));

    centerVertically($(".classroomImage"), $(".classroomIcon"));
    centerHorinzontally($(".classroomImage"), $(".classroomIcon"));

  }




  function displayWindowPupills() {

    windowPupills.addClass("windowPupills");
    blocPage.append(windowPupills);

    $(".windowPupills").before("<div id= \"beforewindowPupills\"> </div>");
    squareDimensions(windowPupills);
    centerVertically(blocPage, windowPupills);
    centerHorinzontally(blocPage, windowPupills);

    blurElement($("#topbar"), 5);
    blurElement($("#divLeft"), 5);
    blurElement($("#divRight"), 5);
    blurElement($("#btn_check"), 5);
    //$("#topbar").css("-webkit-filter", "blur(5px)");
    /*  $("#divLeft").css("-webkit-filter", "blur(5px)");
      $("#divRight").css("-webkit-filter", "blur(5px)");
      $("#btn_check").css("-webkit-filter", "blur(5px)");*/

    $("#beforewindowPupills").click(function() {

      removeWindow(windowPupills, $(this));


    });

  }



  function displayWindowClassrooms() {

    windowClassrooms.addClass("windowClassrooms");
    blocPage.append(windowClassrooms);

    $(".windowClassrooms").before("<div id= \"beforewindowClassrooms\"> </div>");
    //windowClassrooms.append(beforewindowClassrooms);
    squareDimensions(windowClassrooms);
    centerVertically(blocPage, windowClassrooms);
    centerHorinzontally(blocPage, windowClassrooms);

    blurElement($("#topbar"), 5);
    blurElement($("#divLeft"), 5);
    blurElement($("#divRight"), 5);
    blurElement($("#btn_check"), 5);


    $("#beforewindowClassrooms").click(function() {


      removeWindow(windowClassrooms, $(this));
    });



  }


  function blurElement(element, size) {
    var filterVal = 'blur(' + size + 'px)';
    $(element).css({
      'filter': filterVal,
      'webkitFilter': filterVal,
      'mozFilter': filterVal,
      'oFilter': filterVal,
      'msFilter': filterVal,
      'transition': 'all 0.2s ease-out',
      '-webkit-transition': 'all 0.2s ease-out',
      '-moz-transition': 'all 0.2s ease-out',
      '-o-transition': 'all 0.2s ease-out'
    });

  }


  function addSelected(image, index) {
    image.append(selectedIcon);

    /*  if (image.css("border", "2px solid green")) {
        console.log(image.css("border", "2px solid green"));
      }*/
    //image.css("border", "2px solid green");

    selectedIcon.attr("id", index);

  }

  function addSelectedC(image, index) {
    image.append(selectedIconC);


    //  image.css("border", "2px solid green");

    selectedIconC.attr("id", index);
  }

  function removeWindow(container, before) {
    container.remove();
    before.remove();
    blurElement($("#topbar"), 0);
    blurElement($("#divLeft"), 0);
    blurElement($("#divRight"), 0);
    blurElement($("#btn_check"), 0);

  }









  function centerVertically(container, content) {
    var space;
    space = container.height() - content.height();
    space /= 2;

    content.css("top", space);
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