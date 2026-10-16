$(function () {
  let stop;
  let i = $(`.panel li`).index();
  let total = $(".panel li").length;
  //  console.log(total);
  
  // console.log(w);

  $(".panel li p").css({ top: "60%", opacity: "0" });
  $(".panel li").eq(0).find("p").animate({ top: "50%", opacity: "1" });

  start();

  function start() {
    stop = setInterval(function () {
      $(".panel").animate({ "margin-left": `${-w}px` }, function () {
        $(".panel li:first-child").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
      $(".panel li p").css({ top: "60%", opacity: "0" });
      $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
    }, 3000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);

    let i = $(`.panel li`).index();
    console.log(i);

    $(".panel").animate({ "margin-left": `${-w}px` }, function () {
      $(".panel li:first-child").appendTo(".panel");
      $(".panel").css({ "margin-left": "0px" });
      $(".panel li p").css({ top: "60%", opacity: "0" });
      $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
    });
    start();
  });
  /* */
  $(".prev").on("click", function () {
    clearInterval(stop);
    let i = $(`.panel li`).index();

    $(".panel li:last-child").eq(i).prependTo(".panel");
    $(".panel").css({ "margin-left": `${-w}px` });
    $(".panel li p").css({ top: "60%", opacity: "0" });
    $(".panel").animate({ "margin-left": "0px" });
    $(".panel li").eq(i).find("p").animate({ top: "50%", opacity: "1" });
    start();
  });
});
