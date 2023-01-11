// [BOJ] 벌집 / 브론즈2 / 실패
// https://www.acmicpc.net/problem/2292

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString()

const n = input

let range = 1, block = 1;

while (block < n) {    
  block += 6 * range;
  range++;
}

console.log(range);

//https://gurtn.tistory.com/61 풀이 출처

//ㅡㅡㅡㅡㅡ풀이시도ㅡㅡㅡㅡㅡㅡ
// let range = 1

// range 1 = 2(1+1) 7(1+6)
// range 2 = 8(2+6)19(7+12)
// range 3 = 20(8+12)37(19+18)

// N이 시작h부터 끝t안에 포함되는 range일때 그 range를 리턴

// n = 8

// result = [];
// let t = 2
// let h = 7
// for(range = 1; result.length===0; range++){ 
//     if(t <= n && n <= h){
//         result.push(range)
//         t = t+()
//         h = h
//     }
// }

// console.log(result);

//ㅡㅡㅡㅡ실패ㅡㅡㅡㅡㅡ