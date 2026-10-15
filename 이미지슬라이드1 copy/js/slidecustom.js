$(function () {
  let stop;

  let i = 0;
  let total = $(".panel li").length;
  let w = $(".slide").width();
  console.log(w);
  $(".panel li p").css({ top: "60%", opacity: "0" });
  $(".panel li").eq(0).find("p").animate({ top: "50%", opacity: "1" });

  start();

  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
      $(".panel").animate({ "margin-left": `${-w}px` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
      $(".panel li p").css({ top: "60%", opacity: "0" });
      $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
    }, 3000);
  }

  $(".prev").on("click", function () {
    clearInterval(stop);

    if (i == 0) {
      i = total - 1;
    } else {
      i = i - 1;
    }
    $(".panel li:last-child").prependTo(".panel");
    $(".panel").css({ "margin-left": `${-w}px` });
    $(".panel").animate({ "margin-left": "0px" });
    $(".panel li p").css({ top: "60%", opacity: "0" });
    $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
    start();
  });
  $(".next").on("click", function () {
    clearInterval(stop);
    if (i == total - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    $(".panel").animate({ "margin-left": `${-w}px` }, function () {
      let i = $(this).index();
      $(".panel li:first-child").appendTo(".panel");
      $(".panel").css({ "margin-left": "0px" });
      $(".panel li p").css({ top: "60%", opacity: "0" });
      $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
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
