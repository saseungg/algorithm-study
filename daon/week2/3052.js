//나머지: https://www.acmicpc.net/problem/3052

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split("\n").map(Number);

let answer = new Set(input.map((el) => el % 42));

console.log(answer.size);
