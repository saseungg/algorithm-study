//나머지 (https://www.acmicpc.net/problem/3052)
//수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

let input = require("fs").readFileSync("./input.txt").toString().trim().split("\n");

const newArr = input.map(v => v % 42);

const set = new Set(newArr);
const result = [...set];
console.log(result.length);

/*
[손코딩]
1. 각 숫자를 42로 나눈 나머지를 새로운 배열에 모으기
2. 중복을 제거하고 배열의 길이를 출력한다.

[처음 풀이]
const newArr = input.map(v => v % 42);

const set = new Set(newArr);
const result = [...set];
console.log(result.length);

[더 간단한 다른사람 풀이]
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
	
const count = new Set(input.map(x => x % 42)).size;
    
console.log(count);

*/