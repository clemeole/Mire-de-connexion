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

  var userImg = lightdm.users[i].image.split("/");
  userImg = userImg[userImg.length - 1];
  var userImgExtension = userImg.substring(userImg.length - 3, userImg.length);
  $("#console").append(lightdm.users[i].image, " <br/>");

  if (userImgExtension == "jpg" || userImgExtension == "png" || userImgExtension == "svg") {
    $("#console").append(userImgExtension);
    userImg = lightdm.users[i].image;
  } else {
    userImg = "img/eleves/default_pupill.png";
  }

  classes[c].push({
    "name": p,
    "display_name": lightdm.users[i].display_name,
    "image": userImg
  });

}

// console.log(classes);
// console.log("classes : ", Object.keys(classes).length);

$(document).ready(function() {

  $("#containerPupil").click(function() {

    $("body").on("keydown", function(e) {
      if (e.which == 27) { //echap
        $(".croix").remove();
        removeAllHTMLPupills();
        removeWindow(windowPupills, $("#beforewindowPupills"));
      }
    });

    displayWindowPupills();

    if (getCurrentClassroomId() == "classroomDefault") {
      for (var key in classes) {
        for (var i = 0; i < classes[key].length; i++) {

          var user = classes[key][i];
          var classe = key;
          var p = returnHTMLPupills(user, classe);

          $("#console").append("hello ", user.image);
          appendHtmlPupill(blocPupills, p);
        }
      }

    } else {

      $("#console").append(getCurrentClassroomId());

      $("#console").empty();
      for (var key in classes) {

        for (var i = 0; i < classes[key].length; i++) {
          var user = classes[key][i];
          var classe = key;
          if (classe == getCurrentClassroomId()) {
            var p = returnHTMLPupills(user, classe);
            appendHtmlPupill(blocPupills, p);
            $("#console").append(user.name);
            $("#console").append("<br />");
          }

        }
      }

      // for (var i = 0; i < lightdm.users.length; i++) {var p = returnHTMLPupills(user, classe);
      //appendHtmlPupill(blocPupills, p);
      //   var user = lightdm.users[i];
      //   var split = user.name.split("_");
      //   var classe = split[0];
      //
      //   if (classe == getCurrentClassroomId()) {
      //     var p = returnHTMLPupills(user, classe);
      //     appendHtmlPupill(blocPupills, p);
      //   }
      //
      // }

    }

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
    appendClassroomToContainer($("<img src= 'img/classes/" + $(this).attr("class").split(" ")[0] + ".png' id='" + $(this).attr("class").split(" ")[0] + "' />"));
    //$(this).attr("class").split(" ")[0]
    removeAllHTMLPupills();
    removeWindow(windowPupills, $("#beforewindowPupills"));
    $("#containerClassroom").removeClass("shining");
    $("#containerPupil").removeClass("shining");

    selectedUser = $(this).attr("id");
    appendToConsole(selectedUser);
    startAuthentication(selectedUser);
    toEnd(400);

    return false;
  });



  containerClassroom.click(function() {

    displayWindowClassrooms();

    $("body").on("keydown", function(e) {
      if (e.which == 27) { //echap
        $(".croix").remove();
        removeAllHTMLClassrooms();
        removeWindow(windowClassrooms, $("#beforewindowClassrooms"));
      }
    });

    for (var i in classes) {
      blocClassrooms.append(generateClassrooms(i));
    }

  });

  $(document).on('click', '.classroomImage', function() {
    stopFunction();
    $("#containerClassroom").removeClass("shining");

    if ($(".currentPupill").attr("class").split(" ")[0] != $(this).attr("id")) { // si l'image de l'élève n'a pas la même classe que celle selectionnée alors on remet l'image de l'élève par default
      appendPupillToContainer($("<img src = " + srcPupillDefault + " />"));
      $("#containerPupil").addClass("shining");

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

    $("#pPwd>img").attr("src", "img/pictogrammes/soleil.svg");
    appendStopClick();
    appendToConsole(getCurrentPassword());
    //alert("|" + currentPwd + "|");
    lightdm.provide_secret(getCurrentPassword());

    setTimeout(function() {

      if (lightdm.is_authenticated) {
        appendToConsole("authenticated !");
        lightdm.login(lightdm.authentication_user, lightdm.default_session);
        cancelAuthentication();
        startAuthentication(selectedUser);
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

        var t = 200;
        var counter = $(".div1Img").length - 1
        var animationInterval = setInterval(animateInterval, t);


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


        cancelAuthentication();
        startAuthentication(selectedUser);
        appendToConsole("not authenticated !");
        currentPwd = "";
      }

      $("#pPwd>img").attr("src", "img/pictogrammes/soleil.svg");
    }, 1000);

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

      if (right == true && $("#containerPupil").children("img").attr("src") != "img/eleves/pupillDefault.png") {
        toEnd();
        stopFunction();
      }

    }
  });


});