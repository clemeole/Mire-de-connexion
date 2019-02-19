var tabImgPwd;
var tabPicto;
var tabSmallImg, positionTabSmallImg = -1;
var currentPwd = "";
var buttonP;
var containerSmallImg;
var rectangles;
var maxCara = 20;
var allowWritePassword = true;

window.addEventListener("load", function() {


  tabImgPwd = document.querySelectorAll(".image");
  tabPicto = document.querySelectorAll("#containerPicto>div>img");
  tabSmallImg = document.querySelectorAll(".img");
  buttonP = document.querySelector("#pwdImg>p");
  containerSmallImg = document.querySelector("#containerSmallImg");
  rectangles = document.querySelectorAll(".rectangle");


  /*Password images*/
  for (var i = 0; i < tabImgPwd.length; i += 1) {
    tabImgPwd[i].children[0].setAttribute("id", i);
    tabImgPwd[i].addEventListener("click", function(event) {
      writePassword(this.children[0]);

      //  setTimeout(function() {}, 3000);

    });
  }




  /*Afficher le mdp*/




  /******************************************************************************
   ***********************************PICTO**************************************
   ***************************************************************************/



  /******************************************************************************
   ****************************Small images**************************************
   ***************************************************************************/


  function writePassword(e) {

    if (currentPwd.length < maxCara) {
      currentPwd += e.id;

      addDivImage();
      addImage(e);
      addRectangle();


      // for (let i = 0; i < document.querySelectorAll(".rectangle").length; i++) {
      //   document.querySelectorAll(".rectangle")[i].addEventListener("click", function() {
      //     console.log("you clicked region number " + i);
      //     removeRectangle(document.querySelectorAll(".rectangle")[i]);
      //     return;
      //   });
      // }



      // $(".rectangle").on("click", function() {
      //   console.log("rectanngngngngnle " + $(".rectangle").index($(this)));
      //   removeRectangle($(this));
      //
      // });

      smallImgResponsive();

    } else {
      console.log("tu as dépassé la limite de caractère !");
    }

    //console.log(currentPwd);
  }


  function addDivImage() {



    var div1 = $(document.createElement("div"));
    var div2 = $(document.createElement("div"));
    var cSmallImg = $("#containerSmallImg");

    div1.addClass("div1Img");
    div2.addClass("div2Img");



    var allDiv1Img = $(".div1Img");
    var allDiv2Img = $(".div2Img");

    var p = document.querySelector("#pPwd");
    div2.css("opacity", "0");


    if (allDiv2Img.length > 0) {

      if (window.getComputedStyle(allDiv2Img[0]).getPropertyValue("opacity") == "0") {
        div2.css("opacity", "0");
      } else if (window.getComputedStyle(allDiv2Img[0]).getPropertyValue("opacity") == "1") {
        setTimeout(function() {
          $(".rectangle").css("display", "none");
        }, 1);

        div2.css("opacity", "1");
      }

    }

    div1.appendTo(cSmallImg);
    div2.appendTo(div1);
    div2.css("opacity", "0");


    if (allDiv2Img.length > 0) {

      if (allDiv2Img.css("opacity") == "1") {
        div2.animate({
          opacity: "1"
        }, 200);
      } else {
        div2.animate({
          opacity: "0"
        }, 200);
      }

    } else {
      div2.css("opacity", "0");
    }

    $(".div1Img").on("click", function() {
      /*Have to create a clone of div1img because of some animation problems of div1img. So div1Img is removed without animation, over which a div1img
      clone which is animated*/
      var div1Animated = $("<div></div>");
      div1Animated.addClass("div1Animated");

      div1Animated.css("height", $(this).height());
      div1Animated.css("width", $(this).width());

      div1Animated.append($(this).children());

      div1Animated.insertBefore($(this));

      removeDiv1Img($(this));
      removeDiv1Animated(div1Animated);


    });

  }

  function addImage(img) {


    var srcSplit = img.src.indexOf("img");
    srcSplit = img.src.substring(srcSplit, img.src.length);

    var image = document.createElement("img");
    image.setAttribute("src", srcSplit);
    image.setAttribute("id", img.id);
    image.style.height = "80%";
    image.className = "img";

    var allDiv2Img = document.querySelectorAll(".div2Img");
    allDiv2Img[allDiv2Img.length - 1].appendChild(image);

    centerV(allDiv2Img[allDiv2Img.length - 1], image);

  }


  function addRectangle() {
    var rect = $(document.createElement("div"));
    rect.addClass("rectangle");

    var allDiv1Img = document.querySelectorAll(".div1Img");


    if (window.getComputedStyle(document.querySelector(".div2Img")).getPropertyValue("opacity") == "0") {

      rect.appendTo($(".div1Img")[$(".div1Img").length - 1]);

      $(".rectangle").eq($(".rectangle").length - 1).animate({
        height: "100%"
      }, 50);


    } else {

      rect.appendTo($(".div1Img")[$(".div1Img").length - 1]);
      rect.css("height", "0%");

    }



  }


  function removeDiv1Img(div) {

    if ($(".div1Img").index(div) != -1) {
      var indexDiv = $(".div1Img").index(div);

      console.log(indexDiv);
      currentPwd = currentPwd.replace(currentPwd.charAt(indexDiv), "");
      console.log(currentPwd);

      div.remove();

    }

  }

  function removeDiv1Animated(div1Animated) {
    div1Animated.animate({
      height: "0",
      width: "0"
    }, 300);

    setTimeout(function() {
      div1Animated.remove();

    }, 300);
  }



  function smallImgResponsive() {
    var allDiv1Img = document.querySelectorAll(".div1Img");
    var rectangle = document.querySelectorAll(".rectangle");

    var leftRect;

    var hContainerSmallImg = containerSmallImg.offsetHeight;
    var ratio = hContainerSmallImg / hContainerSmallImg;
    for (var m = 0; m < allDiv1Img.length; m++) {


      allDiv1Img[m].style.height = hContainerSmallImg + ratio + "px";
      allDiv1Img[m].style.width = hContainerSmallImg + ratio + "px";

      rectangle[m].style.width = hContainerSmallImg + ratio + "px";
    }

  }



  function centerV(container, content) {

    var space;
    space = container.offsetHeight - content.offsetHeight;
    space /= 2;
    content.style.marginTop = space - space / 4 + "px";

  }


  /******************************************************************************
   ****************************Animations***************************************
   ***************************************************************************/



  $("#pPwd").click(function(event) {

    var currentDisplayRectangle = $(".rectangle").css("display");
    var currentDiv2ImgOpacity = $(".div2Img").css("opacity");

    if (currentDisplayRectangle == "block") {
      $(".div2Img").animate({
        opacity: "1"
      }, 200);

      $(".rectangle").animate({
        height: "0%"
      }, 100);

      setTimeout(function() {
        $(".rectangle").css("display", "none");
      }, 300);
    } else if (currentDisplayRectangle == "none") {

      $(".rectangle").css("display", "block");

      $(".div2Img").animate({
        opacity: "0"
      }, 200);

      $(".rectangle").animate({
        height: "100%"
      }, 100);
    }





    // var smallImg = $(".div2Img");
    // var rectangle = $(".rectangle");
    //
    // var currentSmallImgOpacity = smallImg.css("opacity");
    // var currentDisplay = rectangle.css("display");
    //
    //
    //
    //
    //
    // if (currentSmallImgOpacity == "0" && currentDisplay == "block") {
    //
    //   smallImg.animate({
    //     opacity: "1"
    //   }, 200);
    //
    //
    //
    //   rectangle.animate({
    //     height: "toggle"
    //   }, 200);
    //
    //
    // } else if (currentSmallImgOpacity == "1" && currentDisplay == "none") {
    //
    //   smallImg.animate({
    //     opacity: "0"
    //   }, 200);
    //
    //   for (var i = 0; i < rectangle.length; i++) {
    //
    //     if (rectangle.eq(i).css("display") == "block" && currentSmallImgOpacity == "1") {}
    //
    //   }
    //
    //   rectangle.animate({
    //     height: "toggle"
    //   }, 200);
    //
    // }


  });


});