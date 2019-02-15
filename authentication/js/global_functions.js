function opacityDown(elemt, time) {
  elemt.animate({
    opacity: "0"
  }, time)
}


function verifyPassword() {

  var nameCurrentPupill = $(".currentPupill").attr("id");
  for (classe in eleves) {
    for (var i = 0; i < eleves[classe].length; i++) {
      if (nameCurrentPupill == eleves[classe][i].name) {

        if (currentPwd == eleves[classe][i].password) {
          return true;
        } else {
          return false;
        }

      }

    }
  }
}