$(function () {
  let w = $(window).width();
  //스크롤 이동
  $("header li").on("click", function () {
    let i = $(this).index();
    let target = $("section").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
    if (w < 1199) {
      $("header ul").removeClass("off");
      $(".ham div").removeClass("off");
    }
  });

  //헤더 바
  $(".ham").on("click", function () {
    $(".ham div").toggleClass("off");
    $("header ul").toggleClass("off");
  });

  //섹션4 글자움직임
  $(window).on("scroll", function () {
    let sc = $(window).scrollTop();
    // console.log(sc)
    let pg04 = $(".page04").offset().top;
    if (sc >= pg04 - 200) {
      $(".page04 h3").addClass("on");
      $(".page04 p").addClass("on");
    }
  });
});
