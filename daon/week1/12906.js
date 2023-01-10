//같은 숫자는 싫어: https://school.programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  var answer = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

//참고 풀이
function solution(arr)
{
    return arr.filter((el,idx) => val != arr[idx+1]);
}