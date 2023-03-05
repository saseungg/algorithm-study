//음양 더하기 (https://school.programmers.co.kr/learn/courses/30/lessons/76501)

function solution(absolutes, signs) {
  let result = [];
  for(let i = 0; i < signs.length; i++) {
    if(signs[i] === false) {
      result.push(-absolutes[i])
    } else {
      result.push(+absolutes[i])
    }
  }
  result = result.reduce((a, c) => a+c)
  return result
}

solution([1, 2, 3], [false, false, true]);

/*
[손코딩]
1. false인 자리만 -를 붙여주고
2. 배열에 있는 모든 요소를 더하기

[다른사람 풀이 - 1]
function solution(absolutes, signs) {
    let answer = 0;
    absolutes.forEach((v, i) => {
        if (signs[i]) {
            answer += v;
        } else {
            answer -= v;
        }
    })
    return answer;
}
[다른사람 풀이 - 2]
return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
*/