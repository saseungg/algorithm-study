//평균 (https://www.acmicpc.net/problem/1546)
//세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.
//예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const num = input[0];
const score = input[1].split(" ");

const max = Math.max(...score)
let result = 0;

for(let i = 0; i < input[0]; i++) {
  result += score[i] / max * 100;
}
console.log(result/num);

/*
[손코딩]
1. 최대값을 변수로 지정
2. 모든점수 = 점수 / 최대값 * 100

최대값 찾기 : Math.max(숫자, 숫자, --)
*/