//일곱난쟁이 (https://www.acmicpc.net/problem/2309)
//풀이 참고 (https://velog.io/@rkio/%EB%B0%B1%EC%A4%80-Javascript-2309)

const fs = require("fs");
const heights = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dwarf = null; //계산식에 해당되는 키만 걸러서 넣어줄 dwarf변수 생성

for (let i = 0; i < heights.length - 1; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    const sum = heights.reduce((acc, curr) => {
      return acc + curr;
    }, 0); //모든 숫자의 합을 sum에 저장

    if (sum - heights[i] - heights[j] === 100) {
      //계산식이 100일때
      dwarf = heights.filter(
        (height) => height !== heights[i] && height !== heights[j]
      ); //계산식에 해당되지 않는 난쟁이의 키를 걸러서 dwarf에 할당

      break;
    }
  }

  if (dwarf) {
    break;
  }
}

console.log(dwarf.sort((a, b) => a - b).join("\n")); //dwarf변수를 오름차순으로 정렬

/*
[풀이 참고]
1. 계산식 = 100 - 제외할 난쟁이1 - 제외할 난쟁이2
2. filter를 사용해서 계산식에 맞지 않는 값들은 걸러준다
*/
