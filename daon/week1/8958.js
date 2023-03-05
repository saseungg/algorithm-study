//OX퀴즈: https://www.acmicpc.net/problem/8958

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let number = Number(input[0]);

for (let i = 1; i <= number; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}

/* [처음 코드] : 아무리봐도 출력 상으로는 맞게 나오는데 왜 틀렸다 나오는지 모르겠다..
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().split("\n");

input.shift();
let score = input.map((el) => el.split(""));

for (let i = 0; i < score.length; i++) {
  let count = 0;
  let circle = 0;

  for (let j = 0; j < score[i].length; j++) {
    if (score[i][j] === "O") {
      circle++;
      count += circle;
    } else if (score[i][j] === "X") {
      circle = 0;
    }
  }
  console.log(count);
}


input값을 줄바꿈 기준으로 split해서 배열에 담아주고
담긴 배열을 2차원 배열로 쪼개서 인덱스를 돌면서 카운트를 해줌  */
