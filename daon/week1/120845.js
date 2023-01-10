// 주사위의 개수: https://school.programmers.co.kr/learn/courses/30/lessons/120845

//가로세로높이 다곱한걸 주사위와 비교

function solution(box, n) {
  let width = parseInt(box[0] / n);
  let height = parseInt(box[1] / n);
  let length = parseInt(box[2] / n);

  return width * height * length;
}

/* 
[문제이해]
가로,세로,높이 별 주사위 모서리(n)이 몇개 들어가는지 확인 후,
직육면체 부피 공식을 활용해 리턴

[다른풀이]
1. 구조분해 할당
function solution(box, n) {
  let [width, length, height] = box;

  return Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n);
} 구조 분해할당으로 배열값 변수에 할당 후 n값을 나누고 곱한값을 리턴

2. reduce
function solution(box, n) {
    return box.reduce((acc,v) => acc * Math.floor(v / n), 1);
}

*/

