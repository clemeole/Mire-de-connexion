//done


/******************************************************************************************************

******************************************************************************************************

******************************************************************************************************

******************************************************************************************************

******************************************************************************************************

******************************************************************************************************

**********************************PUPILLS FUNCTIONS******************************************

*******************************************************************************************************/



function returnHTMLPupills(eleve, c) {
  /*generate pupills according to their classroom as images. return an HTML structure*/
  var blocHtml = "";

  //userImg = eleve.image;
  userImg = "img/eleves/default_pupill.png";
  console.log(userImg);
  //console.log(c);
  blocHtml += "<div class='containerImg'>" // style='display: block;'
  blocHtml += "  <div id='" + eleve.name + "' class='" + c + " pupillImage' >" //style='left: 21.5px;'
  blocHtml += "    <img src = " + userImg + " class='pupillIcon'>" // style='display: inline-block; top: 8.5px; left: 13px;'
  blocHtml += "  </div>"
  blocHtml += "  <p class='namePupill'>" + eleve.display_name + "</p>" //style='left: 0px;'
  blocHtml += "</div>"


  return blocHtml;
}

function displayWindowPupills() {

  /*display the pupills window with css animation (blur) and a before to avoid the click effect of the user outside of the pupills window*/

  windowPupills.addClass("windowPupills");
  blocPage.append(windowPupills);
  windowPupills.append(blocPupills);
  var croix = $("<div>&#x2716;</div>");
  croix.attr("class", "croix");
  windowPupills.append(croix);

  $(".windowPupills").before("<div id= \"beforewindowPupills\"> </div>");
  squareDimensions(windowPupills);
  //centerVertically(blocPage, windowPupills);
  //centerHorinzontally(blocPage, windowPupills);

  blurElement($("#topbar"), 5);
  blurElement($("#divLeft"), 5);
  blurElement($("#divRight"), 5);
  blurElement($("#btn_check"), 5);

}

function removeWindow(container, before) {

  container.remove();
  before.remove();
  blurElement($("#topbar"), 0);
  blurElement($("#divLeft"), 0);
  blurElement($("#divRight"), 0);
  blurElement($("#btn_check"), 0);

}

function getCurrentClassroomId() {
  return $("#containerClassroom").children().attr("id");
}

function appendHtmlPupill(container, pupill) {
  container.append(pupill);
}

function removePupills(eleveHTML) {
  eleveHTML.remove();
}

function removeAllHTMLPupills() {
  $(".containerImg").each(function() {
    $(this).remove();
  });
}

function appendPupillToContainer(pupill) {
  /*append an img of a pupill in the pupill container*/
  $("#containerPupil").children().remove();
  currentPupill = $("<img />");
  currentPupill.attr("src", pupill.attr("src"));
  currentPupill.addClass("currentPupill");
  currentPupill.attr("id", pupill.parent().attr("id"));

  $("#containerPupil").append(currentPupill);

}
/******************************************************************************************************

**********************************CLASSROOMS FUNCTIONS******************************************

*******************************************************************************************************/

function generateClassrooms(classe) {
  /*generate classrooms as images. return an HTML structure*/
  var blocHtml = "";

  srcImg = "img/classes/" + classe + ".png";

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
  classe.removeClass("classroomIcon").addClass("currentClassroom");;
  //centerV($("#containerClassroom"), classe);

}



function displayClassrooms() {
  /*display all the classrooms in the classroom window. Call the function createClassrooms*/

  windowClassrooms.append(blocClassrooms);


  if (loadedImgClassroomIcon == false) {

    $(".classroomIcon").on("load", function() {
      $(".classroomImage").each(function() {

        //centerHorinzontally($(this), $(this).children());
        //centerVertically($(this), $(this).children());
      });

      //  loadedImgClassroomIcon = true;
    });

    //loadedImgClassroomIcon = true;
  } else {

  }


  //centerHorinzontally($(".classroomImage"), $(".classroomIcon"));
  //centerVertically($(".classroomImage"), $(".classroomIcon"));


}


function displayWindowClassrooms() {
  /*display the window which contains all the classrooms*/

  windowClassrooms.addClass("windowClassrooms");
  blocPage.append(windowClassrooms);
  windowClassrooms.append(blocClassrooms);
  var croix = $("<div>&#x2716;</div>");
  croix.attr("class", "croix");
  windowClassrooms.append(croix);

  $(".windowClassrooms").before("<div id= \"beforewindowClassrooms\"> </div>");
  squareDimensions(windowClassrooms);

  blurElement($("#topbar"), 5);
  blurElement($("#divLeft"), 5);
  blurElement($("#divRight"), 5);
  blurElement($("#btn_check"), 5);





}

function removeClassrooms(classroomHTML) {
  /*remove all the classrooms image in the classrooms window*/
  classroomHTML.remove();
}

function removeAllHTMLClassrooms() {
  $(".containerImgC").each(function() {
    $(this).remove();
  });
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

function centerV(container, content) {
  var space;
  space = container.height() - content.height();
  space /= 2;
  content.css("margin-top", space);
}

function centerH(container, content) {
  var space;
  space = container.width() - content.width();
  space /= 2;
  content.css("margin-left", space);
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


function appendEnterSessionButtun() {
  srcButtun = "img/pictogrammes/btn_check.svg";

  //timeout pour passer outre les animations, afin de calculer le nombre d'éléments correctement
  setTimeout(function() {
    console.log($("#containerSmallImg").children(".div1Img").length);

    if ($("#containerSmallImg").children(".div1Img").length == 1) {
      if ($("#containerSmallImg").children("#enterSession").length == 0) {
        $("#containerSmallImg").append($("<img id='enterSession' class='picto' src= " + srcButtun + "/>"));
      }

    } else if ($("#containerSmallImg").children(".div1Img").length == 0) {
      $("#enterSession").remove();
      $("#pPwd>img").attr("src", "img/pictogrammes/soleil.svg");
    }
  }, 1);

}

function getCurrentPassword() {
  var pwd = "";
  $("#containerSmallImg").children().each(function() {
    for (var i = 0; i < listImgPwd.length; i++) {
      if ($(this).find("img").attr("id") == listImgPwd[i]) {
        pwd += listImgPwd[i];
      }
    }
  });

  return pwd;
}

function appendStopClick(t) {

  $("body").append($("<div id='stopClick'></div>"));

}

function removeStopClick() {
  $("#stopClick").remove();
}

function returnDate() {
  var j = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");
  var m = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre");
  var d = new Date();
  var jour = j[d.getDay() - 1];
  var mois = m[d.getMonth()];

  var str = jour + " " + d.getDate() + " " + mois + " " + d.getFullYear();
  return str;
}