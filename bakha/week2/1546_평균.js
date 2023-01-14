// [BOJ] 평균 / 브론즈1 / 18분
// https://www.acmicpc.net/problem/1546

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

const n = input[0];
const scores = input[1].split(' ');

const sorted = scores.sort((a, b) => a - b);
const maxNum = sorted[sorted.length - 1];

const cheatScores = sorted.map((el) => el / maxNum * 100);
const cheatScoresSum = cheatScores.reduce((a, b) => a + b);

let cheatAverage = cheatScoresSum / n
if(Number.isInteger(cheatAverage)){
    cheatAverage += '.0';
};
console.log(cheatAverage);

//17분