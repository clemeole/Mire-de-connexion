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
      centerV($(this).children(), $(this).children().children());
    });

    $(".classroomImage").each(function() {
      centerH($(this).parent(), $(this));
    });


  });

  $(document).on('click', '.classroomImage', function() {
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
    console.log(getCurrentPassword());
  });


});