//OX퀴즈 (https://www.acmicpc.net/problem/8958)
//길이가 짧은 것 부터, 길이가 같으면 사전순으로 정렬하기
//참고 : https://gurtn.tistory.com/40

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

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

/*
[손코딩]
- O표시가 연속일 때 count에 1을 더해줌

[참고한 부분]
- 연속일때의 문자를 검사할때 이중 for문을 활용할 수 있었다..!

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
