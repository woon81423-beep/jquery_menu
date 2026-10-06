$(function () {
  $(".prev").on("click", function () {
    $("li:nth-of-type(3)").prependTo("ul");
  });
  $(".next").on("click", function () {
    $("li:nth-of-type(1)").appendTo("ul");
  });
});
