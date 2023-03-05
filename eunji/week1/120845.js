//주사위의 개수(https://school.programmers.co.kr/learn/courses/30/lessons/120845)
//머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(box, n) {
  let answer = 0;
  answer = box.map((x) => parseInt(x / n));
  answer = answer.reduce((a, b) => a * b);
  return answer;
}
console.log(solution([10, 8, 6], 3));

/*
[처음 생각]
- 직육면체의 부피(가로 * 세로 * 높이) / 정육면체 부피

[참고한 풀이]
- 가로, 세로, 높이를 각각 모서리만큼 나눈다음 가로 * 세로 * 높이를 한다
*/
