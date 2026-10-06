$(function () {
  //   $(".pre").on("click", function () {
  //     $("div").prepend(`<p>123</p>`);
  //   });

  //   $(".app").on("click", function () {
  //     $("div").append(`<p>치이카와</p>`);
  //   });

  $(".pre").on("click", function () {
    $(`<p>앞으로</p>`).prependTo("div");
  });
  $(".app").on("click", function () {
    $(`<p>뒤로</p>`).appendTo("div");
  });
});
