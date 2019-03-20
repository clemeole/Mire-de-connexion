var btnCheck = $("#btn_check");
var btnCancel = $("#btn_cancel");
var right = true; // if true you can go to the 2nd bloc (password)
var borderLeftWidthContainer = parseInt($("#containerPupil").css("border-left-width"));
var borderRightWidthContainer = parseInt($("#containerPupil").css("border-right-width"));
$("#block").css("bottom", parseInt($("#block").css("height")) - parseInt($("#containerImg").css("marginTop")));


function toEnd(t) {
  //$("#btn_check2").css("display", "block");
  setTimeout(function() {

    $("#btn_check").css("display", "none");


    $("#block").animate({
      bottom: 0
    }, 400);

    $("#blocPage").animate({
      right: parseInt($("#blocPage").css("width")) //- parseInt($("#containerPupil").css("width")) + borderRightWidthContainer * 5 + borderLeftWidthContainer * 5
    }, 300);

    setTimeout(function() {
      //$("#blocPage").css("bottom", parseInt($("#blocPage").css("height")) - parseInt($("#containerClassroom").css("marginTop")));
      //$("#blocPage").css("right", "0");
      $("#blocPage").css("zIndex", "-2");
    }, 500);


    $("#btn_cancel").animate({
      //opacity: "toggle"
    }, 400);



  }, t);

  setTimeout(function() {
    right = false;
  }, 1000);
}

function toStart() {

  $("#btn_check2").css("display", "none");
  //$("#btn_check").css("display", "block");

  $("#blocPage").css("zIndex", "auto");

  $("#blocPage").animate({
    right: 0
  }, 400);


  $("#block").animate({
    bottom: parseInt($("#block").css("height")) - parseInt($("#containerImg").css("marginTop"))
  }, 300);

  setTimeout(function() {
    //$("#block").css("bottom", parseInt($("#block").css("height")) - parseInt($("#containerImg").css("marginTop")));
    //$("#block").css("right", "0");
  }, 500);


  $("#btn_cancel").animate({
    //opacity: "toggle"
  }, 300);


  if ($("#containerPupil").children("img").attr("src") == "img/eleves/pupillDefault.png") {
    $("#containerPupil").addClass("shining");
  } else {
    $("#containerPupil").removeClass("shining");
  }

  //cursorPupill.css("opacity", "1");



  setTimeout(function() {
    $("#containerSmallImg").each(function() {
      $(this).children().remove();
    });
  }, 200);


  setTimeout(function() {
    right = true;
  }, 1000);

  currentPwd = "";

}





$(document).ready(function() {



  btnCheck.click(function() {

    if ($("#containerClassroom").children().attr("src") == "img/classes/classroomDefault.svg" && $("#containerPupil").children().attr("src") == "img/eleves.pupillDefault.png") {

      // $('#containerClassroom').animate('shake', {
      //   times: 3
      // }, 200);
      //
      // $('#containerPupil').animate('shake', {
      //   times: 3
      // }, 200);

    } else if ($("#containerPupil").children().attr("src") == "img/eleves/pupillDefault.png") {



    } else if (right) {

      toEnd();

      right = false;

    }


  });


  btnCancel.click(function() {

    if (right == false) {

      toStart();

      right = true;


    }



  });


  $("#btn_check2").click(function() {
    verifyPassword();
  });



});