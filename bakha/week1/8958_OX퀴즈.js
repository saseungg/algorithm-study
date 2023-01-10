// [BOJ] OX퀴즈 / 브론즈2 / 실패
// https://www.acmicpc.net/problem/8958

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./input.txt";
let input = fs.readFileSync(file).toString().trim().split('\n')

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0; //굳이 배열로 안하고 그냥 카운트처럼해서 올리면 땡이였음

  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      count++; //연속되면 else에서 count가 0이 안되니 간단..
    } else {
      count = 0;//중간에 X가 나오면 초기화
    }
    
    sum += count; //배열내 반복되면서 평가 후 값은 계속 합산
  }
  
  console.log(sum);
}

//생각한대로 코드를 못 짜서 빙빙 시간낭비한듯 간단하게 조건과 경우를 설정해서
//처리되게 하는 연습이 많이 부족한 거 같다 컴퓨팅적 사고..


// ㅡㅡㅡㅡㅡㅡㅡ망한풀이과정ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// let caseCount = input.shift();

// let oxArr = input

// console.log(oxArr)

// let getScore = function(arr){
//     let scores = [];
//     for(i = 0; i < arr.length; i++){
//         arr2 = arr.split('');
//         let count = 0;
//         let continue = [];
//         for(j = 0; j < arr2.length; j++){
//             let row = 0;
//             if(arr2[j] === 'O'){
//                 if(arr2[j+1] === 'O'){
//                     row++
//                     continue.push(row);    
//                 } else {
//                 count ++;
//                 row = 0;
//             };
//         };
//         scores.push(count);
//     }
//     console.log(scores)
// }

// getScore(oxArr);


// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// let ox = 'OOXXOXXOOO'

// let scores = [];
// let arr2 = ox.split('');

// console.log(arr);

// let count = 0;
// let conti = [];

// for(j = 0; j < arr2.length; j++){
//     let row = 0;
//     if(arr2[j] === 'O'){
//         if(arr2[j+1] === 'O'){
//             row = ++row
//             conti.push(row);    
//         } else {
//         count ++;
//         row = 0;
//         }
//     }
// }

// console.log(conti);
// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ