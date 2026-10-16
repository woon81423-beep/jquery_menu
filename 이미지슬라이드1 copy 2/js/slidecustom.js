$(function () {
  let pa;

  let w = $(".slide").width();
  //   console.log(w);
  $(".panel li:first-child p").addClass("on");

  start();
  function start() {
    pa = setInterval(function () {
      $(".panel li p").removeClass("on");
      $(".panel")
        .stop()
        .animate({ "margin-left": `${-w}px` }, function () {
          $(".panel li:first-child").appendTo(".panel");
          $(".panel").css({ "margin-left": "0px" });

          $(".panel li p").addClass("on");
        });
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(pa);
    $(".panel li p").removeClass("on");
    $(".panel")
      .stop()
      .animate({ "margin-left": `${-w}px` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
        $(".panel li p").addClass("on");
      });

    start();
  });

  $(".prev").on("click", function () {
    clearInterval(pa);
    $(".panel li p").removeClass("on");
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": `${-w}px` });
    $(".panel")
      .stop()
      .animate({ "margin-left": "0px" }, function () {
        $(".panel li p").addClass("on");
      });

    start();
  });
});
