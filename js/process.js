var tabImgPwd;
var tabPicto;
var tabSmallImg, positionTabSmallImg = -1;
var currentPwd = "";
var buttonP;
var containerSmallImg;
var rectangles;
var maxCara = 1000;
var allowWritePassword = true;

window.addEventListener("load", function () {


    tabImgPwd = document.querySelectorAll(".image");
    tabPicto = document.querySelectorAll("#containerPicto>div>img");
    tabSmallImg = document.querySelectorAll(".img");
    buttonP = document.querySelector("#pwdImg>p");
    containerSmallImg = document.querySelector("#containerSmallImg");
    rectangles = document.querySelectorAll(".rectangle");


    /*Password images*/
    for (var i = 0; i < tabImgPwd.length; i += 1) {
        tabImgPwd[i].children[0].setAttribute("id", i);
        tabImgPwd[i].addEventListener("click", function (event) {
            writePassword(this.children[0]);
        });
    }


    /*Afficher le mdp*/




    /******************************************************************************
     ***********************************PICTO**************************************
     ***************************************************************************/

    tabPicto[0].addEventListener("click", function () {
        //restart
        removeAllDivImage();
        currentPwd = "";
        positionTabSmallImg = -1;
        //removeAllImages();
        //removeAllRectangles();

        console.log(currentPwd);
    });

    tabPicto[1].addEventListener("click", function () {
        //check

    });

    tabPicto[2].addEventListener("click", function () {
        //back
        removeLastRectangle();
        removeLastDivImage();


        //remove the last character of the password

        currentPwd = currentPwd.replace(currentPwd.charAt(currentPwd.length - 1), "");
        console.log(currentPwd);



    });


    /******************************************************************************
     ****************************Small images**************************************
     ***************************************************************************/


    function writePassword(e) {

        if (currentPwd.length < maxCara) {
            currentPwd += e.id;

            addDivImage();
            addImage(e);
            addRectangle();

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
                div2.css("opacity", "1");
            }

        }

        div1.appendTo(cSmallImg);
        div2.appendTo(div1);
        div2.css("opacity", "0");


        if (allDiv2Img.length > 0) {

            if (allDiv2Img.css("opacity") == "1") {
                console.log("animation div2 opacity 1");
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




        //        $(".rectangle").eq($(".rectangle").length - 1).animate({
        //            height: "20%"
        //        }, 200);
        //
        //
        //        containerSmallImg.appendChild(div1);
        //        div1.appendChild(div2);


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
        //allDiv2Img[allDiv2Img.length - 1].style.width = "30px";

        centerV(allDiv2Img[allDiv2Img.length - 1], image);

        //tabSmallImg[positionTabSmallImg].insertBefore(image, tabSmallImg[positionTabSmallImg].firstChild);
        //console.log(image);

    }


    function removeLastDivImage() {

        $(".div2Img").eq($(".div2Img").length - 1).animate({
            opacity: "0"
        }, 200);

        setTimeout(function () {
            //$(".div2Img").eq($(".div2Img").length - 1).remove();
            $(".div1Img").eq($(".div1Img").length - 1).remove();
        }, 200);



    }

    function removeAllDivImage() {
        var allDiv1Img = document.querySelectorAll(".div1Img");

        if ($(".div2Img").css("opacity") == "0") {

            $(".rectangle").animate({
                height: "toggle"
            }, 200);

            setTimeout(function () {
                for (var d = 0; d < allDiv1Img.length; d++) {
                    allDiv1Img[d].parentNode.removeChild(allDiv1Img[d]);
                }
            }, 200);


        } else {



            $(".div2Img").animate({
                opacity: "0"
            }, 200);


            setTimeout(function () {
                for (var b = 0; b < allDiv1Img.length; b++) {
                    allDiv1Img[b].parentNode.removeChild(allDiv1Img[b]);
                }
            }, 200);



        }






    }


    function addRectangle() {
        console.log("hey rectangle runction");
        //var rectangle = document.createElement("div");
        var rect = $(document.createElement("div"));
        rect.addClass("rectangle");

        var allDiv1Img = document.querySelectorAll(".div1Img");

        //rectangle.className = "rectangle";
        //rectangle.style.height = "0%";

        if (window.getComputedStyle(document.querySelector(".div2Img")).getPropertyValue("opacity") == "0") {
            //allDiv1Img[allDiv1Img.length - 1].appendChild(rectangle);


            rect.appendTo($(".div1Img")[$(".div1Img").length - 1]);



            $(".rectangle").eq($(".rectangle").length - 1).animate({
                height: "20%"
            }, 200);



        } else {
            //            allDiv1Img[allDiv1Img.length - 1].appendChild(rectangle);
            //            rectangle.style.display = "none";
            //            $(".rectangle").eq($(".rectangle").size() - 1).animate({
            //                height: "20%"
            //            }, 200);


            rect.appendTo($(".div1Img")[$(".div1Img").length - 1]);
            rect.css("height", "20%");
            rect.css("background-color", "transparent");

            rect.animate({
                height: "toggle"
            }, 0.00001);




            rect.css("background-color", "white");
        }


    }


    function removeLastRectangle() {

        if ($(".div2Img").css("opacity") == "0") {


            $(".rectangle").eq($(".rectangle").length - 1).animate({
                height: "toggle"
            }, 200);


        }



        setTimeout(function () {

            $(".rectangle").eq($(".rectangle").length - 1).remove();

        }, 200);



    }

    function removeAllRectangles() {

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

            //rectangle[m].style.height = hContainerSmallImg / 5 + "px";
            rectangle[m].style.width = hContainerSmallImg + ratio + "px";
        }




        //
        //            rectangle[m].style.left +=
        //                console.log(window.getComputedStyle(rectangle[m]).getPropertyValue("left"));

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



    $("#pPwd").click(function (event) {

        var smallImg = $(".div2Img");
        var rectangle = $(".rectangle");

        var currentSmallImgOpacity = smallImg.css("opacity");
        var currentDisplay = rectangle.css("display");





        if (currentSmallImgOpacity == "0" && currentDisplay == "block") {

            smallImg.animate({
                opacity: "1"
            }, 200);



            rectangle.animate({
                height: "toggle"
            }, 200);

            //event.preventDefault();

        } else if (currentSmallImgOpacity == "1" && currentDisplay == "none") {

            smallImg.animate({
                opacity: "0"
            }, 200);

            for (var i = 0; i < rectangle.length; i++) {

                if (rectangle.eq(i).css("display") == "block" && currentSmallImgOpacity == "1") {
                    console.log("supe à 0 " + i);
                }

            }

            rectangle.animate({
                height: "toggle"
            }, 200);

            //event.preventDefault();
        }







        //        $(".rectangle").toggle(function () {
        //            $(this).animate({
        //                height: 40
        //            }, 200);
        //        }, function () {
        //            $(this).animate({
        //                height: 10
        //            }, 200);
        //        });



    });








});
