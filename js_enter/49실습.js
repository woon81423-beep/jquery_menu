$(window).on("scroll", function () {
  let wrap01 = $(this).scrollTop();
  // console.log(wrap01);
  if (wrap01 >= 200 && wrap01 <= 500) {
    $("div").addClass("on");
  } else {
    $("div").removeClass("on");
  }
});


