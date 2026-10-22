$(function () {
   $("header li").on("click", function () {
    let i = $(this).index();
    let target = $("section").eq(i).offset().top;
    $("html, body").stop().animate({ scrollTop: target });
  });
});

//header li를 클릭하면 li의 순번을 변수에 넣고
//i를 이용해서 섹션별 높이를 구함. offset이용
//offset값으로 scriollTop이동
