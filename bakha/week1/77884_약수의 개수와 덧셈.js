// [PGR] 약수의 개수와 덧셈 / lv1 / 1시간 15분
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer;
    let odd = [];
    let even = [];
    for(i = left; i <= right; i++){
        let count = 0;
        for(j = 1; j <= i; j++){
            if(i % j === 0) count++
        }
        (count % 2 === 0) ? odd.push(i) : even.push(i)
    }
    answer = odd.reduce((a,b) => a + b) - even.reduce((a,b) => a + b);
    return answer;
}
//처음에 제대로 다 풀어놓고 선언 위치랑 변수명 틀린거 제대로 확인안해서 1시간정도 머리싸매다가 풀이보고
//시간초과 문제가 아닌걸 깨닫고 해결

// ㅡㅡㅡㅡㅡㅡ처음 시간초과난 18분 풀이ㅡㅡㅡㅡㅡ
// function solution(left, right) {
//     var answer = 0;
//     let result = 0;
//     let odd = [];
//     let even = [];
//     for(i = left; i <= right; i++){ ***//i가아니라 j인데 개멍청
//         for(j = 1; j <= i; j++){
//             let count = 0; ***//카운트를 상위 포문 블록에 넣었어야 짝수 홀수 배열 처리과정에서 참조가능
//             if(i % j === 0) count++
//         }
//         (count % 2 === 0) ? odd.push(i) : even.push(i)
//     }
//     answer = odd.reduce((a,b) => a + b) - even.reduce((a,b) => a + b);
//     return answer;
// }