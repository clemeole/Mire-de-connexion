$(document).ready(function() {

  var btnCheck = $("#btn_check");
  var left = true;

  btnCheck.click(function() {

    if ($("#containerClassroom").children().attr("src") == "img/classroomDefault.svg" || $("#containerPupil").children().attr("src") == "img/pupillDefault") {

      alert("il faut choisir ta classe !");
    } else {
      console.log($("#blocPage").width());
      borderLeftWidthContainer = parseInt($("#containerPupil").css("border-left-width"));
      borderRightWidthContainer = parseInt($("#containerPupil").css("border-right-width"));

      if (left) {

        //$("#btn_check2").css("display", "block");
        //$("#btn_check").css("display", "none");
        $("#blocPage").animate({
          right: parseInt($("#blocPage").css("width")) - parseInt($("#containerPupil").css("width")) + borderRightWidthContainer * 2 + borderLeftWidthContainer * 2

        }, 500);

        $("#block").animate({
          left: 0
        }, 500)


        left = false;
      } else {

        //$("#btn_check2").css("display", "none");
        //$("#btn_check").css("display", "block");

        $("#blocPage").animate({
          right: 0
        }, 500);

        $("#block").animate({
          left: parseInt($("#block").css("width")) - parseInt($("#containerImg").css("marginLeft"))
        }, 500)

        left = true;
      }







    }

  });


});