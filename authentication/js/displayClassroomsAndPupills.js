$(document).ready(function() {



  var containerClassroom = $("#containerClassroom");
  var containerPupil = $("#containerPupil");

  var windowPupills = $("<div></div>");
  var windowClassrooms = $("<div></div>");

  var blocPage = $("#blocPage");

  var blocPupills = $("<div id=\"blocPupills\"></div>");
  var blocClassrooms = $("<div id=\"blocClassrooms\"></div>");

  var selectedIcon = $("<div></div>");
  var selectedIconClassroom = $("<div id= \"\"></div>");
  var hasSelectedIconPupill = false;
  var hasSelectedIconClassroom = false;


  selectedIcon.addClass("selectedIcon");
  selectedIconClassroom.addClass("selectedIconClassroom");

  var currentPupill = $("<img src=\"\" />");
  var currentClassroom = $("<img src=\"\" />");

  var srcClassroomDefault = "img/classroomDefault.svg";
  var srcPupillDefault = "img/pupillDefault";

  var loadedImgClassroomIcon = false;




  containerClassroom.click(function() {
    displayWindowClassrooms();
    displayClassrooms();





    $(".classroomImage").click(function() {

      if ($(".currentPupill").attr("class").split(" ")[0] != $(this).attr("id")) { // si l'image de l'élève n'a pas la même classe que celle selectionnée alors on remet l'image de l'élève par default
        appendPupillToContainer($("<img src = " + srcPupillDefault + " />"));
      }

      addSelectedClassroom($(this), $(this).attr("id"));
      appendClassroomToContainer($(this).children());
      removeClassrooms();
      removeWindow(windowClassrooms, beforewindowClassrooms);


    });


  });


  containerPupil.click(function() {
    displayWindowPupills();
    displayPupills();

    /*the addEventListener of the pupills image is inside the createPupills function*/

  });


  /******************************************************************************************************

  **********************************PUPILLS FUNCTIONS******************************************

  *******************************************************************************************************/

  function createPupills() {
    /*select pupills according to their classroom*/
    var classe = "";

    if ($("#classroomDefault").attr("src") == srcClassroomDefault) {
      for (classe in eleves) {
        for (var i = 0; i < eleves[classe].length; i++) {
          //console.log(classe); // retourne le nom de la classe
          blocPupills.append(generatePupills(eleves[classe][i], classe));
        }
      }
    } else {
      for (classe in eleves) {
        for (var i = 0; i < eleves[classe].length; i++) {
          if ($(".currentClassroom").attr("id") == classe) {
            blocPupills.append(generatePupills(eleves[classe][i], classe));
          }
        }
      }
    }

    $(".pupillImage").click(function() {

      if ($("#classroomDefault").attr("src") == srcClassroomDefault) {
        var idThis = $(this).attr("class").split(" ")[0]
        var c = $("<img id='" + idThis + "' src='img/" + idThis + ".png' class='currentClassroom' />");
        c.on("load", function() {
          appendClassroomToContainer(c);
        });

      }

      $(this).children().attr("id", $(this).attr("id"));
      $(this).children().addClass($(this).attr("class").split(" ")[0]);
      appendPupillToContainer($(this).children()); // append l'image élève contenu dans la div .pupillImage
      removePupills();
      removeWindow(windowPupills, beforewindowPupills);
    });

  }


  function generatePupills(eleve, c) {
    /*generate pupills according to their classroom as images. return an HTML structure*/
    var blocHtml = "";

    userImg = eleve.image; //eleve.image.length > 0 ? eleve.image : 'img/michel.jpg';
    //console.log(c);
    blocHtml += "<div class='containerImg' style='display: block;'>"
    blocHtml += "  <div id='" + eleve.name + "' class='" + c + " pupillImage' >" //style='left: 21.5px;'
    blocHtml += "    <img src = " + userImg + " class='pupillIcon' style='display: inline-block; top: 8.5px; left: 13px;'>"
    blocHtml += "  </div>"
    blocHtml += "  <p class='namePupill' style='left: 0px;'>" + eleve.display_name + "</p>"
    blocHtml += "</div>"
    //console.log(eleve);


    return blocHtml;
  }


  function removePupills() {
    /*remove all the pupills image in the pupills window*/
    $("#blocPupills").children().remove();
  }



  function appendPupillToContainer(pupill) {
    /*append an img of a pupill in the pupill container*/
    $("#containerPupil").children().remove();
    $("#containerPupil").append(pupill);
    pupill.removeClass("pupillIcon").addClass("currentPupill");

    centerVertically($("#containerPupil"), pupill);
    centerHorinzontally($("#containerPupil"), pupill);
  }


  function displayPupills() {
    /*display all the pupills in a window + add event to center them all*/
    windowPupills.append(blocPupills);

    createPupills();

    $(".containerImg").css("display", "block");
    centerHorinzontally($(".containerImg"), $(".namePupill"));
    //centerHorinzontally($(".containerImg"), $(".pupillImage"));

  }


  function displayWindowPupills() {

    /*display the pupills window with css animation (blur) and a before to avoid the click effect of the user outside of the pupills window*/

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

    $("#beforewindowPupills").click(function() {
      removePupills();
      removeWindow(windowPupills, $(this));


    });

  }

  function addSelectedPupill(image, index) {
    image.append(selectedIcon);

    selectedIcon.attr("id", index);

  }


  /******************************************************************************************************

  **********************************CLASSROOMS FUNCTIONS******************************************

  *******************************************************************************************************/


  function createClassrooms() {
    /*create all the classrooms*/

    for (var classe in eleves) {
      blocClassrooms.append(generateClassrooms(classe));
      if (hasSelectedIconClassroom == classe) {

      }
    }


  }


  function generateClassrooms(classe) {
    /*generate classrooms as images. return an HTML structure*/
    var blocHtml = "";

    srcImg = "img/" + classe + ".png";

    blocHtml += "<div class='containerImgC'>"
    blocHtml += "  <div id='" + classe + "' class='classroomImage' >" //style='left: 21.5px;'
    blocHtml += "    <img id='" + classe + "' src = " + srcImg + " class='classroomIcon'>" // style='display: inline-block; top: 8.5px; left: 13px;'
    blocHtml += "  </div>"
    blocHtml += "  <p class='nameClassroom'>" + classe + "</p>" //style='left: 0px;'
    blocHtml += "</div>"

    return blocHtml;
  }


  function appendClassroomToContainer(classe) {
    /*append a classroom image in the classroom container*/

    $("#containerClassroom").children().remove();
    $("#containerClassroom").append(classe);
    classe.removeClass("classroomIcon").addClass("currentClassroom");
    console.log(classe.height());
    console.log(classe.width());
    centerVertically($("#containerClassroom"), classe);
    centerHorinzontally($("#containerClassroom"), classe);

  }



  function displayClassrooms() {
    /*display all the classrooms in the classroom window. Call the function createClassrooms*/

    windowClassrooms.append(blocClassrooms);

    createClassrooms();
    $(".containerImgC").css("display", "block");
    centerHorinzontally($(".containerImgC"), $(".nameClassroom"));
    centerHorinzontally($(".containerImgC"), $(".classroomImage"));

    if (loadedImgClassroomIcon == false) {

      $(".classroomIcon").on("load", function() {
        centerHorinzontally($(".classroomImage"), $(".classroomIcon"));
        centerVertically($(".classroomImage"), $(".classroomIcon"));
        //  loadedImgClassroomIcon = true;
      });

    }


    centerHorinzontally($(".classroomImage"), $(".classroomIcon"));
    centerVertically($(".classroomImage"), $(".classroomIcon"));


  }


  function displayWindowClassrooms() {
    /*display the window which contains all the classrooms*/

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

      removeClassrooms();
      removeWindow(windowClassrooms, $(this));
    });

  }

  function removeClassrooms() {
    /*remove all the pupills image in the pupills window*/
    $("#blocClassrooms").children().remove();
  }


  function addSelectedClassroom(image, idClasse) {
    selectedIconClassroom.attr("class", idClasse);
    selectedIconClassroom.insertAfter(image);
    image.addClass("hasSelectedIconClassroom");
  }


  /******************************************************************************************************

  **********************************OTHERS******************************************

  *******************************************************************************************************/



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
    //  console.log(container.attr("class") + " : " + container.width());
    //  console.log(content.attr("class") + " : " + content.width());
    var space;
    space = container.width() - content.width();
    space /= 2;
    content.css("left", space + "px");
  }


  function squareDimensions(content) {
    var hContent = content.height();
    content.css("width", hContent);
  }


});