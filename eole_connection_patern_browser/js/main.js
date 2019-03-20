//done


var classes = {};

for (var i = 0; i < lightdm.users.length; i++) {
  var c, p, img;
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
  //console.log(lightdm.users[i].image);

  if (userImgExtension == "jpg" || userImgExtension == "png" || userImgExtension == "svg") {
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

  $("#containerPupil").click(function() { //Au clic sur le carré qui liste les élèves

    $("body").on("keydown", function(e) {
      if (e.which == 27) { //echap : ferme la fenêtre de la liste des élèves
        $(".croix").remove();
        removeAllHTMLPupills();
        removeWindow(windowPupills, $("#beforewindowPupills"));
      }
    });

    displayWindowPupills(); //Affiche la fenêtre avec les élèves listés

    if (getCurrentClassroomId() == "classroomDefault") {
      //Si aucune classe n'a été sélectionnée, on affiche tous les élèves toutes classes confondues

      // for (classe in eleves) {
      //   for (var i = 0; i < eleves[classe].length; i++) {
      //     var p = returnHTMLPupills(eleves[classe][i], classe);
      //     appendHtmlPupill(blocPupills, p);
      //   }
      // }

      for (var key in classes) {
        for (var i = 0; i < classes[key].length; i++) {

          var user = classes[key][i];
          var classe = key;
          var p = returnHTMLPupills(user, classe);
          appendHtmlPupill(blocPupills, p);
        }
      }

    } else {
      //Sinon, liste les élèves en fonction de la classe sélectionnée
      // for (var i = 0; i < eleves[getCurrentClassroomId()].length; i++) {
      //   var p = returnHTMLPupills(eleves[getCurrentClassroomId()][i], getCurrentClassroomId());
      //   appendHtmlPupill(blocPupills, p);
      // }

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

    }

  });

  $(document).on('click', '#beforewindowPupills', function() {
    // Au clic HORS (=dans le vide sur les côtés) de la fenêtre des élèves, on ferme cette dernière
    $(".croix").remove();
    removeAllHTMLPupills();
    removeWindow(windowPupills, $(this));

    return false;
  });


  $(document).on('click', '.pupillImage', function() { // Au clic sur l'un des élèves listés dans la fenêtre
    stopFunction(); // On arrête le setInterval (fichier timer.js)
    appendPupillToContainer($(this).children()); // On fait appraître l'image de l'élève en question à la place de l'image par défaut dans le containerPupill
    appendClassroomToContainer($("<img src= 'img/classes/" + $(this).attr("class").split(" ")[0] + ".png' id='" + $(this).attr("class").split(" ")[0] + "' />"));

    removeAllHTMLPupills();
    removeWindow(windowPupills, $("#beforewindowPupills"));
    $("#containerClassroom").removeClass("shining");
    $("#containerPupil").removeClass("shining");

    selectedUser = $(this).attr("id");
    toEnd(400);

    return false;
  });



  containerClassroom.click(function() { // Au clic du carré blanc qui permet de lister les classes

    displayWindowClassrooms();

    $("body").on("keydown", function(e) {
      if (e.which == 27) { //echap : ferme la fenêtre de la liste des élèves
        $(".croix").remove();
        removeAllHTMLClassrooms();
        removeWindow(windowClassrooms, $("#beforewindowClassrooms"));
      }
    });

    for (var i in classes) {
      blocClassrooms.append(generateClassrooms(i));
    }

  });

  $(document).on('click', '.classroomImage', function() { // Au clic d'une des classes listées dans la fenêtre
    stopFunction(); // On arrête le setInterval (fichier timer.js)
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
    // Au clic HORS (=dans le vide sur les côtés) de la fenêtre des élèves, on ferme cette dernière
    $(".croix").remove();
    removeAllHTMLClassrooms();
    removeWindow(windowClassrooms, $(this));


    return false;
  });


  $(document).on("click", ".croix", function() { // Pour fermer la fenêtre

    $(this).remove();
    removeAllHTMLClassrooms();
    removeAllHTMLPupills();
    removeWindow(windowClassrooms, $("#beforewindowClassrooms"));
    removeWindow(windowPupills, $("#beforewindowPupills"));
    return false;
  });


  $(document).on("click", "#enterSession", function() {

    // $("body").append($("<div id='stopClick'></div>"));
    appendStopClick(); // Pendant la vérification du mot de passe, une div transparente empêche l'utilisateur d'actionner des boutons

    setTimeout(function() {


      if (getCurrentPassword() == "012") {
        alert("bien !");
        removeStopClick();
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
          //Fait disparaître chaque caractère du mot de passe 1 par 1

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