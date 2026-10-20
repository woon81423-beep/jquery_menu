// $(function () {
//   $(".tap li").on("click", function () {
//     let i = $(this).index();
//     $("#visual .on").removeClass("view");
//     $("#container .txt .down").removeClass("view");
//     $("#visual .on").eq(i).addClass("view");
//     $("#container .txt .down").eq(i).addClass("view");
//     $(".tap li").css({ "background-color": "#fff" });
//     $(".tap li").eq(i).addClass("view");
//   });

// });

$(function () {
  $(".tap li").eq(0).addClass("view");
  $("#visual .on").eq(0).addClass("view");
  $("#container .txt .down").eq(0).addClass("view");

  $(".tap li").on("click", function () {
    let i = $(this).index();

    $(".tap li").removeClass("view");
    $("#visual .on").removeClass("view");
    $("#container .txt .down").removeClass("view");

    $(this).addClass("view");
    $("#visual .on").eq(i).addClass("view");
    $("#container .txt .down").eq(i).addClass("view");
  });
});
