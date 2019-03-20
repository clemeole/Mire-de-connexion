/*var cursorPupill = $("#cursorPupill");
var cursorClassroom = $("#cursorClassroom");*/

$(document).ready(function() {

  $("#date").empty();
  $("#date").append(returnDate());


  var divLeft = document.querySelector("#divLeft");
  var divRight = document.querySelector("#divRight");

  var classroomDefault = $("#classroomDefault");
  var pupillDefault = $("#pupillDefault");

  var tabImg = document.querySelectorAll(".image img");
  var block = document.querySelector("#block");

  var containerImg = document.querySelector("#containerImg");
  var secondContainer = document.querySelector("#secondContainer");

  var containerInput = document.querySelector("#containerInput");
  var smallImg = document.querySelectorAll(".img");
  var smallImgContainer = document.querySelector("#containerSmallImg");

  var containerPicto = document.querySelectorAll("#containerPicto>div");
  var picto = document.querySelectorAll("#containerPicto>div>img");

  var containerMdp = document.querySelector(".image");
  var images = document.querySelectorAll(".image>img");

  var displayPwd = document.querySelector("#pwdImg>p");
  var rectangles = document.querySelectorAll(".rectangle");

  var divPower = document.querySelector("#divPower");
  var power = document.querySelector("#power");



  //var name = document.querySelector("label");



  /*  centerHorinzontally($("#divLeft"), cursorClassroom);
    centerHorinzontally($("#divRight"), cursorPupill);

    centerHorinzontally($("#divLeft"), cursorClassroom);
    centerHorinzontally($("#divRight"), cursorPupill);

    cursorClassroom.css("opacity", "0");
    cursorPupill.css("opacity", "0");

    setTimeout(function() {
      cursorClassroom.animate({
        opacity: "1"
      }, 200);

      cursorPupill.animate({
        opacity: "1"
      }, 200);
    }, 900);


    function loopP() {
      cursorPupill.animate({
        'top': '66%'
      }, {
        duration: 1000,
        complete: function() {
          cursorPupill.animate({
            top: "68%"
          }, {
            duration: 1000,
            complete: loopP
          });
        }
      });
    }
    loopP();

    function loopC() {
      cursorClassroom.animate({
        'top': '66%'
      }, {
        duration: 1000,
        complete: function() {
          cursorClassroom.animate({
            top: "68%"
          }, {
            duration: 1000,
            complete: loopC
          });
        }
      });
    }
    loopC();
  */

  //centerVertically(divLeft, divLeft.children[0]);
  //centerVertically(divRight, divRight.children[0]);

  /*centerHorinzontally($("#containerClassroom"), classroomDefault);
  centerVerticallyJquery($("#containerClassroom"), classroomDefault);

  centerHorinzontally($("#containerPupil"), pupillDefault);
  centerVerticallyJquery($("#containerPupil"), pupillDefault);*/


  //smallImgContainer.style.width = document.querySelector("input").offsetWidth + "px";
  adaptSize(smallImgContainer, smallImg);
  //adaptSize(smallImgContainer, rectangles);

  //setRectangles(smallImgContainer, rectangles);

  //centerVertically(block, containerImg); //center the block of images relative to the window
  //centerVertically(secondContainer, containerInput); //center the block of the input relative to the window
  //centerVertically(containerSmallImg, smallImg);
  //centerVertically(divPower, power);

  //name.style.paddingTop = (1 / 5) * containerImg.offsetHeight + "px";


  /*for (var i = 0; i < images.length; i++) {
    centerVertically(containerMdp, images[i]);
    i < smallImg.length ? centerVertically(smallImgContainer, smallImg[i]) : console.log();
    i < containerPicto.length ? centerVertically(containerPicto[i], picto[i]) : console.log();

  }*/




  $("#containerSmallImg").css("height", parseInt($(".image").css("height")) / 2);
  //centerVerticallyJquery($("#containerInput"), $("#containerSmallImg"));



  function adaptSize(container, items) {
    containerWidth = container.offsetWidth;

    for (var j = 0; j < items.length; j++) {

      items[j].style.width = containerWidth / (items.length + 1) + "px";
      items[j].style.height = containerWidth / (items.length + 1) + "px";
      container.style.height = containerWidth / (items.length + 1) + "px";

    }

  }




  function centerVertically(container, content) {
    var space;
    space = container.offsetHeight - content.offsetHeight;
    space /= 2;
    content.style.marginTop = space + "px";
  }

  function centerVerticallyJquery(container, content) {
    var space;
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


  //
  //    function setRectangles(container, rect) {
  //
  //        var position = 0;
  //
  //        for (var a = 0; a < rect.length; a++) {
  //            rect[a].style.left = position + "%";
  //            rect[a].style.bottom = "0";
  //            rect[a].style.height = container.offsetHeight / 5 + "px";
  //            position += 20;
  //        }
  //    }

  borderLeftWidthContainerBlock = parseInt($("#containerImg").css("border-left-width"));
  borderRightWidthContainerBlock = parseInt($("#containerImg").css("border-right-width"));




});