//평균: https://www.acmicpc.net/problem/1546

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\n");

input.shift(); // 과목 개수 제거 (배열 인덱스 0)
let [grade] = input.map((el) => el.split(" ").map(Number)); // ['40 80 60']을 map을 통해 과목별로 쪼개서 grade에 배열형태로 담아줌 
                                                            // (map(Number)를 다시 쓰지 않고 첫번째 배열형태에 넣을 수 있는 방법이 있을까?)
let max = Math.max(...grade);

let average = grade.map((el) => (el / max) * 100).reduce((acc, cur) => acc + cur) / grade.length; // reduce로 평균값 계산

console.log(average);

/* 
[다른 풀이]
const N = Number(input[0]);
let record = input[1].split(' ').map(Number);
const MAX = Math.max(...record);

let total = 0;
for (let i = 0; i < N; i++) {
  total += (record[i] / MAX) * 100;
}
console.log((total / N).toFixed(5)); 
*/