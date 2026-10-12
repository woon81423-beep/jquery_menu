$(function () {
  let num = 0;
  setInterval(function () {
    // num = num + 1;

    if (num == 5) {
      num =1 ;
    } else {
      num = num + 1;
      console.log(num);
    }
  }, 1000);
});

//if 문을 이용해서 만듬. 1~5까지 출력하고
