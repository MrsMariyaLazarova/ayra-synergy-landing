$(document).ready(function () {
  $("#slideshow:visible > div:gt(0)").hide();
  setInterval(function () {
    console.log("here");
    $("#slideshow > div:first")
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo("#slideshow");
  }, 3000);
});
