$(function () {
  let total = $("li").length;
  let num = 0;

  setInterval(function () {
    $("li").eq(num).css("display", "none");

    num = num + 1;
    if (num >= total) {
      num = 0;
    } else {
      $("li").eq(num).css("display", "block");
    }
  }, 2000);
});

// 1. 현재 화면에 보이고 있는 li 숨기기 (주석 해제)
// 2.다음 인덱스 계산
// 끝까지 가면 다시 첫 번째(0)로
// 3. 새로 지정된 인덱스의 li 보여주기 (else 밖으로 이동)
