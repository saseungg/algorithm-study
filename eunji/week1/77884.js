//약수의 개수와 덧셈 (https://school.programmers.co.kr/learn/courses/30/lessons/77884)
//두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

function solution(left, right) {
  let answer = 0;
    //left~right의 모든수를 반복하면서
    for (let i = left; i <= right; i++) {
      //만약 i의 제곱근이 정수라면 약수의 개수가 홀수라는 말이래요
      if (Number.isInteger(Math.sqrt(i))) {
        //홀수면 i만큼 빼고   
        answer -= i;
      } else {
        //짝수면 i만큼 더한다
        answer += i;
      }
    }
    return answer;
}

/*
[참고한 풀이]
Math.sqrt() : 숫자의 제곱근을 반환
Number.isInteger() : 주어진 값이 정수인지 판별
*/
