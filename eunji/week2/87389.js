//나머지가 1이되는 수 찾기 (https://www.acmicpc.net/problem/87389)
//자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

function solution(n) {
  for (let i = 1; i < n; i ++) {
    if(n % i === 1) return i
  }
}


/*
[손코딩]
1. i가 n보다 작은 범위에서 반복문을 돌면서
2. 만약 n % i === 1이면 i를 return 한다.
*/