//행렬의 덧셈 (https://school.programmers.co.kr/learn/courses/30/lessons/12950)

function solution(arr1, arr2) {
  const answer = new Array();
  for(let i = 0; i<arr1.length; i++) {
    answer[i] = new Array();

    for(let j = 0; j<arr1[i].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
    return answer;
}

/*
[손코딩]
1. 2차원배열의 요소에 접근하기
arr1.length -> arr1[i].length
2. 접근한 요소들끼리 더하기
answer[i][j] = arr1[i][j] + arr2[i][j]

[다른사람 풀이]
function sumMatrix(A,B){
  return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
이중 for문 대신 map을 이중으로 활용하는 방법도 있었다..! 대박
*/