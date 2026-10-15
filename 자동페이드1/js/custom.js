//1.setInterval()사용함
//2.반복을 4번하면 됨
//3.1>2>3>4
//4.eq로 치환하면 0>1>2>3
//5.eq가 3이면 다시 0으로 가야함
//6.if문 조건을 만들자
//7.만약 i==3이면 i=0 그렇지 않으면 i++
//8.fadeIn()서서히 나타남/ fadeOut()서서히 사라짐

$(function () {
  let i = 0; // 순번 전역변수
  let total = $(".panel li").length; //li의 갯수를 셈
  let stop; //함수 밖에 만들어서 전역변수가 됨
  console.log(total);
  start();
  function every() {
    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
  }
  function start() {
    stop = setInterval(function () {
      if (i == total - 1) {
        i = 0;
      } else {
        i++;
      }
      every();
    }, 2000);
  }

  $(".next").on("click", function () {
    clearInterval(stop);
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    every();
    start();
  });
  $(".prev").on("click", function () {
    clearInterval(stop);
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
    every();
    start();
  });

  $(".navi li").on("click", function () {
    clearInterval(stop);
    let i = $(this).index();

    $(".panel li").stop().fadeOut();
    $(".panel li").eq(i).stop().fadeIn();
    $(".navi li").removeClass("on");
    $(".navi li").eq(i).addClass("on");
    start();
  });
});
