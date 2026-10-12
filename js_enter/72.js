$(function () {
  let num = 0;
  let stop = setInterval(function () {
    if (num == 5) {
      num = 1;
    } else {
      num = num + 1;
    }
    console.log(num);
  }, 1000);

  $("button").on("click", function () {
    clearInterval(stop);
  });
});
