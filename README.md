# Algorithm study!

## 🔰 member

<table><tr><td align="center"><a href="https://github.com/saseungg"><img src="https://user-images.githubusercontent.com/115215178/222355046-97a53d5a-c3fb-4ad3-b7ed-d308c35eced0.jpeg" width="150px;" alt=""/><br /><sub><b>daon</b></a><br/></td>

<td align="center"><a href="https://github.com/dmswl2030"><img src="https://user-images.githubusercontent.com/115215178/210617937-28971c29-97cc-450c-991d-183aabd5a922.png" width="150px;" alt=""/><br /><sub><b>eunji</b></a><br/></td>

<td align="center"><a href="https://github.com/bakhacode"><img src="https://user-images.githubusercontent.com/115215178/222355205-d608114a-648a-4dce-bc92-b48568331b81.jpeg" width="150px;" alt=""/><br /><sub><b>bakha</b></a><br/></td>
</table>

## 🏁 코드 리뷰

-   스터디 시작 날짜 : 2022-12-26 ~
-   리뷰는 매주 토 9시로 고정
-   멤버가 올린 코드는 무조건 확인하고 질문, 피드백, 새롭게 알게된 점이 있다면 코멘트 달아주기

## 🏴 commit 규칙

-   commit 메세지: [플랫폼] 문제이름 / 난이도 / 걸린시간
-   description: 문제 주소 (option)
-   터미널 작성법

```
git commit -m "[BOJ] Hello World / 브론즈5 / 1분" -m "https://www.acmicpc.net/problem/2557"
```

-   플랫폼 작성법
    -   [BOJ] - 백준
    -   [PRG] - 프로그래머스
    -   [LTC] - 리트코드
    -   [ETC] - 그외

## 🏴‍☠️ PR 하는 법

1.  작업 브랜치 생성

```
# git switch -c {작업 브랜치 이름}
$ git switch -c algo1
```

2. 문제 푼 후 add, commit

```
$ git status
$ git add {파일명}
$ git commit
```

3. 원격 fork 저장소에 올리기

```
# git push origin {작업 브랜치 이름}
$ git push origin algo1
```

4. pr 보내기

```
algo1 브랜치를 pull request 원본 daon 브랜치로!
```

5. merge 완료 후 작업 브랜치 삭제

```
# git switch {아이디 브랜치 이름}
$ git switch daon
# git branch -D {삭제할 브랜치 이름}
$ git branch -D algo1
```

6. 원본 브랜치와 내 로컬 브랜치 동기화 작업

```
# git remote add -t {아이디 브랜치 이름} {저장소 별칭} base_저장소_url
$ git remote add -t daon upstream https://github.com/saseungg/algorithm-study.git
# 저장소를 추가한 후 전체 remote 저장소 목록을 확인한다
$ git remote -v
```

7. 브랜치 정보 가져오기

```
# git fetch upstream {아이디 브랜치 이름}
$ git fetch upstream daon
```

8. 원본 daon 브랜치와 내 로컬 daon 브랜치 동기화

```
# git rebase upstream/{아이디 브랜치 이름}
$ git rebase upstream/daon
```

9. 브랜치 올리기 (fork 브랜치로)

```
# git push origin {아이디 브랜치 이름}
$ git push origin daon
```

![image](https://user-images.githubusercontent.com/115215178/222943043-f07a4926-1fc4-4347-b5fe-87cef95db0f6.png)
