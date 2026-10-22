$(function () {
   $("header li").on("click", function () {
    let i = $(this).index();
    let target = $("section").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
  });
});

//header li를 클릭하면 li의 순번을 변수에 넣고

//let box1 = $(".box1").offset().top;
// console.log(box1);

// let box2 = $(".box2").offset().top;
// console.log(box2);

// let box3 = $(".box2").offset().left;
// console.log(box3);
