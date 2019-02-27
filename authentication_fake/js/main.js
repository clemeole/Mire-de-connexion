var classes = [];

for (var i = 0; i < lightdm.users.length; i++) {
  var c = lightdm.users[i].name.split("_")[0];
  if (checkValue(c, classes) == false) {
    $("#console").append(c);
    classes.push(c);
  }

}
//$("#console").append(classes[classes.length - 1]);
//  $("#console").append("Classe : ", split_name[0], ", name : ", split_name[1], " display_name : ", lightdm.users[i].display_name, "<br/>");


$(document).ready(function() {

  $("#containerPupil").click(function() {

    displayWindowPupills();

    if (getCurrentClassroomId() == "classroomDefault") {

      for (var i = 0; i < lightdm.users.length; i++) {
        var user = lightdm.users[i];
        var split = user.name.split("_");
        var classe = split[0];
        var p = returnHTMLPupills(user, classe);
        appendHtmlPupill(blocPupills, p);
      }

      /*  for (classe in eleves) {
          for (var i = 0; i < eleves[classe].length; i++) {
            var p = returnHTMLPupills(eleves[classe][i], classe);
            appendHtmlPupill(blocPupills, p);
          }
        }*/
    } else {
      // for (var i = 0; i < eleves[getCurrentClassroomId()].length; i++) {
      //   var p = returnHTMLPupills(eleves[getCurrentClassroomId()][i], getCurrentClassroomId());
      //   appendHtmlPupill(blocPupills, p);
      // }

      $("#console").append(getCurrentClassroomId());
      for (var i = 0; i < lightdm.users.length; i++) {
        var user = lightdm.users[i];
        var split = user.name.split("_");
        var classe = split[0];

        if (classe == getCurrentClassroomId()) {
          var p = returnHTMLPupills(user, classe);
          appendHtmlPupill(blocPupills, p);
        }

      }

    }

    $(".pupillIcon").each(function() {
      centerV($(this).parent(), $(this));
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

    selectedUser = $(this).attr("id");
    appendToConsole(selectedUser);
    startAuthentication(selectedUser);
    toEnd(400);

    return false;
  });



  containerClassroom.click(function() {

    displayWindowClassrooms();

    for (var i = 0; i < classes.length; i++) {
      blocClassrooms.append(generateClassrooms(classes[i]));
    }

    /*for (var classe in eleves) {
      blocClassrooms.append(generateClassrooms(classe));
    }*/

    $(".containerImgC").each(function() {
      centerV($(this).children(), $(this).children().children());
    });

    $(".classroomImage").each(function() {
      centerH($(this).parent(), $(this));
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
        cancelAuthentication();
        startAuthentication(selectedUser);
        appendToConsole("not authenticated !");
      }

    }, 1000);


  });


});