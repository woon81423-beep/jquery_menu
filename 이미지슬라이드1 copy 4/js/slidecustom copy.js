$(function () {
  let i = 0;
  let total = $(".panel li").length;
  $(".panel li").find("p").eq(0).addClass("piz");
  // console.log(total);
  function navi() {
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }
  function text() {
    $("p").removeClass("piz");
    $(".panel li").find("p").eq(i).addClass("piz");
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
          .animate({ "margin-left": `${-i * w}px` }, function () {
            $(".panel").css({ "margin-left": "0px" });
          });

        i = 0;
      } else {
        $(".panel")
          .stop()
          .animate({ "margin-left": `${-i * w}px` });
      }
      text();
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
        .animate({ "margin-left": `${-i * w}px` }, function () {
          $(".panel").css({ "margin-left": "0px" });
        });
      i = 0;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": `${-i * w}px` });
    }
    text();
    navi();
    start();
  });
  /*돌아가는 버튼*/
  $(".prev").on("click", function () {
    clearInterval(stop);

    i--;
    if (i < 0) {
      $(".panel").css({ "margin-left": `-${i * w}px` });
      $(".panel")
        .stop()
        .animate({ "margin-left": `${(i - 2) * w}px` });

      i = 3;
    } else {
      $(".panel")
        .stop()
        .animate({ "margin-left": `${-i * w}px` });
    }
    text();
    navi();
    start();
  });

  //상자클릭
  $(".navi li").on("click", function () {
    clearInterval(stop);

    i = $(this).index();
    $(".panel")
      .stop()
      .animate({ "margin-left": `${-i * w}px` });
    text();
    navi();
    start();
  });
});
