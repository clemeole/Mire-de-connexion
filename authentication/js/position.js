$( document ).ready(function() {

  var divLeft = document.querySelector("#divLeft");
  var divRight = document.querySelector("#divRight");

  centerVertically(divLeft, divLeft.children[0]);
  centerVertically(divRight, divRight.children[0]);


function centerVertically(container, content) {
     var space;
     space = container.offsetHeight - content.offsetHeight;
     space /= 2;
     content.style.marginTop = space + "px";
 }

});
