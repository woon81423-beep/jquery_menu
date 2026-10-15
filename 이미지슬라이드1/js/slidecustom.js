$(function () {
  let stop;
  start();

  let w = $(".slide").width();
    console.log(w);
  function start() {
    stop = setInterval(function () {
      $(".panel").animate({ "margin-left": `${-w}px` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
    }, 3000);
  }

  $(".prev").on("click", function () {
    clearInterval(stop);
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": `${-w}px` });
    $(".panel").animate({ "margin-left": "0px" });
    start();
  });
  $(".next").on("click", function () {
    clearInterval(stop);

    $(".panel").animate({ "margin-left": `${-w}px` }, function () {
      $(".panel li:first-child").appendTo(".panel");
      $(".panel").css({ "margin-left": "0px" });
    });
    start();
  });

  //   $(".prev").on("click", function () {
  //     clearInterval(stop);
  //     $(".panel li").eq(i).stop().animate({ "margin-left": "300px" });
  //     $(".panel li:last-child").prependTo(".panel");
  //     start();
  //   });
  //   $(".next").on("click", function () {
  //     $(".panel li").eq(i).stop().animate({ "margin-left": "-300px" });
  //     start();
  //   });
});
