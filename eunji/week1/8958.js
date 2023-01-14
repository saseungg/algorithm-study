//OX 퀴즈 (https://www.acmicpc.net/problem/8958)
//OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

const line = require("fs").readFileSync("./input.txt").toString().split("\n");

for (let i = 1; i <= line[0]; i += 1) {
  let contiguousOCounts = 0;
  let score = 0;
  for(let j = 0; j < line[i].length; j++) {
    const char = line[i];
    if (char[j] === "O") {
      score += contiguousOCounts + 1;
      contiguousOCounts += 1;
    } else if (char[j] === "X") {
      contiguousOCounts = 0
    }
  }
  console.log(score);
}

/*
[손코딩]
- O표시가 연속일 때 count에 1을 더해줌

[참고한 풀이]
for (let i = 1; i <= input[0]; i++) {
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

[제이슨 풀이 참고]
function calculateLine(line) {
  let contiguousOCounts = 0;
  let score = 0;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === "O") {
      score += contiguousOCounts + 1;
      contiguousOCounts += 1;
    } else if (char === "X") {
      contiguousOCounts = 0
    }
  }
  return score;
}
console.log(calculateLine('OOXXOXXOOO'));
console.log(calculateLine('OOXXOOXXOO'));
console.log(calculateLine('OXOXOXOXOXOXOX'));
console.log(calculateLine('OOOOOOOOOO'));
console.log(calculateLine('OOOOXOOOOXOOOOX'));
*/
