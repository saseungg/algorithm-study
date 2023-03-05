//세로읽기 (https://www.acmicpc.net/problem/10798)
//칠판에 붙여진 단어들이 주어질 때, 영석이가 세로로 읽은 순서대로 글자들을 출력하는 프로그램을 작성하시오.

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const maxLength = Math.max(...input.map(i => i.length));
let vertical = "";
for (let i=0; i<maxLength; i++) {
    for (let j=0; j<input.length; j++) {
        vertical += input[j][i] || "";
    }
}
console.log(vertical);

/*
[손코딩]
- 배열요소 하나씩 접근하기
- 하나씩 접근한 i번째 요소를 가져와서 문자열로 이어붙이기

[풀이보고 이해한거]
- 이중 반복문까지 생각은 나는데 i의 최대길이만큼 반복해야하는걸 생각못함
- 빈칸일때까지의 조건문을 넣지 않아서 빈칸일때는 어떻게 처리해야할지 생각못함

[처음풀이 1]
for(let i = 0; i < input.length; i++) {
  for(let j = 0; j < i.length; j++) {
    result =+ input[i][j];
  }
}

[처음풀이 2]
let result = input.map((v, i) => v = v[i]);
console.log(result);
뭔가 요소 안의 요소에 접근하려고 map을 쓰고싶었는데 잘 안풀림..

map을 이용한 다른풀이
Math.max(...words.map(i => i.length));
에...????
*/