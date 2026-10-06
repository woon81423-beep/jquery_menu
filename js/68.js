$(function () {
  let i = 0; //순번 0, 1, 2

  $(".next").on("click", function () {
    // i = i + 1;
    // console.log("next", i);
    // if (i == 4) {
    //   $("ul").stop().animate({ "margin-left": `0px` });
    //   i = 0;
    // } else {
    //   $("ul")
    //     .stop()
    //     .animate({ "margin-left": `${i * -400}px` });
    // }
    if (i == 3) {
      i = 0;
    } else {
      i = i + 1;
    }
    $("ul")
      .stop()
      .animate({ "margin-left": `${i * -400}px` });
  });

  $(".prev").on("click", function () {
    if (i == 0) {
      i = 3;
    } else {
      i = i - 1;
    }
    $("ul")
      .stop()
      .animate({ "margin-left": `${i * -400}px` });
  });
});
