$(function () {
  let i = 0; //순번 전역변수
  let total = $(".panel li").length; //li의 개수
  let stop; //전역변수
  //   console.log(total);

  $(".panel li p").css({ top: "60%", opacity: "0" });
  $(".panel li").eq(0).find("p").animate({ top: "50%", opacity: "1" });

  start();

  function fade() {
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    $(".panel li p").css({ top: "60%", opacity: "0" });
    $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
  }

  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i = i + 1;
      }
      fade();
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    if (i == total - 1) {
      i = 0;
    } else {
      i = i + 1;
    }
    // $(".panel li").fadeOut();
    // $(".panel li").eq(i).fadeIn();
    // $(".navi li").removeClass("on");
    // $(".navi li").eq(i).addClass("on");
    fade();
    start();
  });

  $(".prev").on("click", function () {
    clearInterval(stop);
    if (i == 0) {
      i = total - 1;
    } else {
      i = i - 1;
    }
    // $(".panel li").fadeOut();
    // $(".panel li").eq(i).fadeIn();
    // $(".navi li").removeClass("on");
    // $(".navi li").eq(i).addClass("on");
    fade();
    start();
  });

  $(".navi li").on("click", function () {
    clearInterval(stop);
    i = $(this).index();
    // console.log(i);
    // $(".panel li").fadeOut();
    // $(".panel li").eq(i).fadeIn();
    // $(".navi li").removeClass("on");
    // $(".navi li").eq(i).addClass("on");
    fade();
    start();
  });
});
