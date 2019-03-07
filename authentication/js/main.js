var classes = {};

for (var i = 0; i < lightdm.users.length; i++) {

  var c, p;
  if (lightdm.users[i].name.split("_").length == 1) {
    c = "none";
    p = lightdm.users[i].name.split("_")[0];
  } else {
    c = lightdm.users[i].name.split("_")[0];
    p = lightdm.users[i].name.split("_")[1];
  }


  if (!(c in classes)) {
    classes[c] = [];
  }

  classes[c].push({
    "name": p,
    "display_name": lightdm.users[i].display_name,
    "image": lightdm.users[i].image
  });

}

console.log(classes);
console.log("classes : ", Object.keys(classes).length);


for (var key in classes) {
  console.log(key, " : ");
  for (var i = 0; i < classes[key].length; i++) {
    console.log(classes[key][i].name);
  }
}



$(document).ready(function() {

  $("#containerPupil").click(function() {

    displayWindowPupills();

    if (getCurrentClassroomId() == "classroomDefault") {
      for (classe in eleves) {
        for (var i = 0; i < eleves[classe].length; i++) {
          var p = returnHTMLPupills(eleves[classe][i], classe);
          appendHtmlPupill(blocPupills, p);
        }
      }
    } else {
      for (var i = 0; i < eleves[getCurrentClassroomId()].length; i++) {
        var p = returnHTMLPupills(eleves[getCurrentClassroomId()][i], getCurrentClassroomId());
        appendHtmlPupill(blocPupills, p);
      }

    }

    $(".pupillIcon").each(function() {
      //centerV($(this).parent(), $(this));
      console.log("yop");
    });

  });

  $(document).on('click', '#beforewindowPupills', function() {
    $(".croix").remove();
    removeAllHTMLPupills();
    removeWindow(windowPupills, $(this));
    $(".croix").remove();

    return false;
  });


  $(document).on('click', '.pupillImage', function() {
    stopFunction();
    appendPupillToContainer($(this).children());
    appendClassroomToContainer($("<img src= 'img/" + $(this).attr("class").split(" ")[0] + ".png' id='" + $(this).attr("class").split(" ")[0] + "' />"));
    //$(this).attr("class").split(" ")[0]
    removeAllHTMLPupills();
    removeWindow(windowPupills, $("#beforewindowPupills"));
    $("#containerClassroom").removeClass("shining");
    toEnd(400);

    return false;
  });



  containerClassroom.click(function() {

    displayWindowClassrooms();

    for (var classe in eleves) {
      blocClassrooms.append(generateClassrooms(classe));
    }

    $(".containerImgC").each(function() {
      //centerV($(this).children(), $(this).children().children());
    });

    $(".classroomImage").each(function() {
      //centerH($(this).parent(), $(this));
    });


  });

  $(document).on('click', '.classroomImage', function() {
    stopFunction();
    $("#containerClassroom").removeClass("shining");

    if ($(".currentPupill").attr("class").split(" ")[0] != $(this).attr("id")) { // si l'image de l'élève n'a pas la même classe que celle selectionnée alors on remet l'image de l'élève par default
      appendPupillToContainer($("<img src = " + srcPupillDefault + " />"));

    } else {
      toEnd(400);
    }


    appendClassroomToContainer($(this).children());
    removeAllHTMLClassrooms();
    removeWindow(windowClassrooms, $("#beforewindowClassrooms"));

    return false;
  });



  $(document).on('click', '#beforewindowClassrooms', function() {
    $(".croix").remove();
    removeAllHTMLClassrooms();
    removeWindow(windowClassrooms, $(this));


    return false;
  });


  $(document).on("click", ".croix", function() {

    $(this).remove();
    removeAllHTMLClassrooms();
    removeAllHTMLPupills();
    removeWindow(windowClassrooms, $("#beforewindowClassrooms"));
    removeWindow(windowPupills, $("#beforewindowPupills"));
    return false;
  });


  $(document).on("click", "#enterSession", function() {

    // $("body").append($("<div id='stopClick'></div>"));
    appendStopClick();

    if (getCurrentPassword() == "012") {
      alert("bien !");
    } else {
      $(".rectangle").css("background-color", "transparent");
      $(".div1Img").css("background-color", "rgba(255, 29, 29, 0.55)");


      $(".div1Img").each(function(i) {
        for (var x = 1; x <= 3; x++) {
          $(this).animate({
            marginLeft: 4
          }, 60).animate({
            marginLeft: 0
          }, 60);
        }
      });

      var t = 250;
      var counter = $(".div1Img").length - 1
      var animationInterval = setInterval(animateInterval, t);



      // $(".div1Img").animate({
      //   height: 0
      // }, t);
      //
      // $(".rectangle").animate({
      //   opacity: 0
      // }, t);
      //
      // $(".div2Img").animate({
      //   opacity: 0
      // }, t);


      // $(".div1Img").children(".rectangle").animate({
      //   opacity: 0
      // }, t - t / 1.5);

      function animateInterval() {

        console.log("test");
        console.log("counter : ", counter);
        $(".div1Img").eq(counter).animate({
          height: 0
        }, t);


        $(".div1Img").eq(counter).children(".rectangle").animate({
          opacity: 0
        }, t - t / 1.5);

        $(".div1Img").eq(counter).children(".div2Img").animate({
          opacity: 0
        }, t - t / 1.5);


        if (counter >= 0) {
          console.log(counter);
          counter -= 1
        } else {
          $(".div1Img").remove();
          appendEnterSessionButtun();
          clearInterval(animationInterval);
          removeStopClick();
        }

      }


      currentPwd = "";
    }
  });


  $(document).on("keydown", "body", function(event) {
    if (event.which == 37) {

      if (right == false) {
        toStart();
        stopFunction();
      }

    }
  });

  $(document).on("keydown", "body", function(event) {
    if (event.which == 39) {

      if (right == true && $("#containerPupil").children("img").attr("src") != "img/pupillDefault.png") {
        toEnd();
        stopFunction();
      }

    }
  });

});