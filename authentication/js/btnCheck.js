$(document).ready(function() {

  var btnCheck = $("#btn_check");
  var btnCancel = $("#btn_cancel");
  var right = true;
  var borderLeftWidthContainer = parseInt($("#containerPupil").css("border-left-width"));
  var borderRightWidthContainer = parseInt($("#containerPupil").css("border-right-width"));
  $("#block").css("bottom", parseInt($("#block").css("height")) + parseInt($("#containerPicto").css("height")) - parseInt($("#containerImg").css("marginTop")));

  btnCheck.click(function() {

    if ($("#containerClassroom").children().attr("src") == "img/classroomDefault.svg" || $("#containerPupil").children().attr("src") == "img/pupillDefault") {

    } else if (right) {

      $("#btn_check2").css("display", "block");
      $("#btn_check").css("display", "none");

      $("#block").animate({
        bottom: 0
      }, 400);

      $("#blocPage").animate({
        right: parseInt($("#blocPage").css("width")) - parseInt($("#containerPupil").css("width")) + borderRightWidthContainer * 2 + borderLeftWidthContainer * 2
      }, 400);

      setTimeout(function() {
        $("#blocPage").css("bottom", parseInt($("#blocPage").css("height")) - parseInt($("#containerClassroom").css("marginTop")));
        $("#blocPage").css("right", "0");
      }, 500);


      $("#btn_cancel").animate({
        opacity: "toggle"
      }, 400);


      right = false;

    }


  });


  btnCancel.click(function() {

    if (right == false) {

      $("#btn_check2").css("display", "none");
      $("#btn_check").css("display", "block");

      $("#blocPage").animate({
        bottom: 0
      }, 400);



      $("#block").animate({
        right: parseInt($("#blocPage").css("width")) - parseInt($("#containerImg").css("marginLeft"))
      }, 400);

      setTimeout(function() {
        $("#block").css("bottom", parseInt($("#block").css("height")) + parseInt($("#containerPicto").css("height")) - parseInt($("#containerImg").css("marginTop")));
        $("#block").css("right", "0");
      }, 500);


      $("#btn_cancel").animate({
        opacity: "toggle"
      }, 300);


      right = true;


    }



  });





  /*btnCheck.click(function() {

    if ($("#containerClassroom").children().attr("src") == "img/classroomDefault.svg" || $("#containerPupil").children().attr("src") == "img/pupillDefault") {

      alert("il faut choisir ta classe !");
    } else {
      console.log($("#blocPage").width());
      borderLeftWidthContainer = parseInt($("#containerPupil").css("border-left-width"));
      borderRightWidthContainer = parseInt($("#containerPupil").css("border-right-width"));

      if (right) {
        //$("#btn_check2").css("display", "block");
        //  $("#btn_check").css("display", "none");
        $("#btn_cancel").animate({
          opacity: "1"
        }, 300);

        $("#block").css("right", "0");
        $("#blocPage").animate({
          right: parseInt($("#blocPage").css("width")) - parseInt($("#containerPupil").css("width")) + borderRightWidthContainer * 2 + borderLeftWidthContainer * 2

        }, 300);

        $("#block").animate({
          bottom: 0
        }, 500);



        setTimeout(function() {
          $("#blocPage").css("bottom", parseInt($("#blocPage").css("height")) - parseInt($("#containerClassroom").css("marginTop")));
          $("#blocPage").css("right", "0");
        }, 300);



        right = false;
      } else {
        //$("#btn_check2").css("display", "none");
        //  $("#btn_check").css("display", "block");

        $("#blocPage").css("right", "0");
        $("#blocPage").animate({
          bottom: 0
        }, 500);

        $("#block").animate({
          right: parseInt($("#blocPage").css("width")) - parseInt($("#containerImg").css("marginLeft"))
        }, 300);

        setTimeout(function() {
          $("#block").css("bottom", parseInt($("#block").css("height")) + parseInt($("#containerPicto").css("height")) - parseInt($("#containerImg").css("marginTop")));
          $("#block").css("right", "0");
        }, 300);

        right = true;
      }







    }

  });*/


});