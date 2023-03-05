/* 
핵심 : 가능한 정답이 여러가지일 경우 아무거나 출력
7개의 배열공간을 만들어주고 순서를 바꿔가며 팝해주기
*/
const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);
let sum;

dwarf = Array(7).fill().map((x, i) => (x = input.pop()));

while (sum !== 100) {
  dwarf.push(input.shift());
  input.push(dwarf.shift());
  sum = dwarf.reduce((sum, cur) => sum + cur);
}

dwarf.sort((a,b)=>a-b).map((x)=>console.log(x))
