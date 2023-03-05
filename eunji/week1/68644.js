//두개 뽑아서 더하기 (https://school.programmers.co.kr/learn/courses/30/lessons/68644)
//정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    //numbers의 num을 2개추출 (이중반복문), 2개 숫자를 answer에 push
    const answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
          answer.push(numbers[i] + numbers[j]);
        }
      }
    //더한 숫자가 겹치는건 제외하기 
    return [...new Set(answer)].sort((a, b) => a - b) 
}