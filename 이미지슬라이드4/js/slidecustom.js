$(function () {
  let i = 0;
  let total = $(".panel li").length;
  console.log(total);
  function navi() {
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }
  let stop;
  let w = $(".slide").width();
  start();
  function start() {
    stop = setInterval(function () {
      i++;

      if (i == total - 1) {
        $(".panel")
          .stop()
          .animate({ "margin-left": "2000px;" }, function () {
            $(".panel").css({ "margin-left": "0px" });
          });
        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ "margin-left": "-2000px;" });
      }
      navi();
    }, 2000);
  }

  /*넥스트 버튼*/
  $(".next").on("click", function () {
    clearInterval(stop);

    i++;

    if (i == total - 1) {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px" }, function () {
          $(".panel").css({ "margin-left": "0px" });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px;" });
    }
    navi();
  });
  /*돌아가는 버튼*/
  $(".prev").on("click", function () {
    clearInterval(stop);
 $(".panel").css({ "margin-left": "-2000px;" });
    i--;
    if (i < 0) {
     
      $(".panel").stop().animate({ "margin-left": "-1500px" });
      i = 3;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": "-2000px;" });
    }
    navi();
  });

  //상자클릭
  $(".navi li").on("click", function () {
    clearInterval(stop);

    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ "margin-left": `${-500*i}`});
    navi();
    start();
  });
});
