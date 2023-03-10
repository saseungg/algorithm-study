# Algorithm study!

## ๐ฐ member

<table><tr><td align="center"><a href="https://github.com/saseungg"><img src="https://user-images.githubusercontent.com/115215178/222355046-97a53d5a-c3fb-4ad3-b7ed-d308c35eced0.jpeg" width="150px;" alt=""/><br /><sub><b>daon</b></a><br/></td>

<td align="center"><a href="https://github.com/dmswl2030"><img src="https://user-images.githubusercontent.com/115215178/210617937-28971c29-97cc-450c-991d-183aabd5a922.png" width="150px;" alt=""/><br /><sub><b>eunji</b></a><br/></td>

<td align="center"><a href="https://github.com/bakhacode"><img src="https://user-images.githubusercontent.com/115215178/222355205-d608114a-648a-4dce-bc92-b48568331b81.jpeg" width="150px;" alt=""/><br /><sub><b>bakha</b></a><br/></td>
</table>

## ๐ ์ฝ๋ ๋ฆฌ๋ทฐ

-   ์คํฐ๋ ์์ ๋ ์ง : 2022-12-26 ~
-   ๋ฆฌ๋ทฐ๋ ๋งค์ฃผ ํ  9์๋ก ๊ณ ์ 
-   ๋ฉค๋ฒ๊ฐ ์ฌ๋ฆฐ ์ฝ๋๋ ๋ฌด์กฐ๊ฑด ํ์ธํ๊ณ  ์ง๋ฌธ, ํผ๋๋ฐฑ, ์๋กญ๊ฒ ์๊ฒ๋ ์ ์ด ์๋ค๋ฉด ์ฝ๋ฉํธ ๋ฌ์์ฃผ๊ธฐ

## ๐ด commit ๊ท์น

-   commit ๋ฉ์ธ์ง: [ํ๋ซํผ] ๋ฌธ์ ์ด๋ฆ / ๋์ด๋ / ๊ฑธ๋ฆฐ์๊ฐ
-   description: ๋ฌธ์  ์ฃผ์ (option)
-   ํฐ๋ฏธ๋ ์์ฑ๋ฒ

```
git commit -m "[BOJ] Hello World / ๋ธ๋ก ์ฆ5 / 1๋ถ" -m "https://www.acmicpc.net/problem/2557"
```

-   ํ๋ซํผ ์์ฑ๋ฒ
    -   [BOJ] - ๋ฐฑ์ค
    -   [PRG] - ํ๋ก๊ทธ๋๋จธ์ค
    -   [LTC] - ๋ฆฌํธ์ฝ๋
    -   [ETC] - ๊ทธ์ธ

## ๐ดโโ ๏ธ PR ํ๋ ๋ฒ

1.  ์์ ๋ธ๋์น ์์ฑ

```
# git switch -c {์์ ๋ธ๋์น ์ด๋ฆ}
$ git switch -c algo1
```

2. ๋ฌธ์  ํผ ํ add, commit

```
$ git status
$ git add {ํ์ผ๋ช}
$ git commit
```

3. ์๊ฒฉ fork ์ ์ฅ์์ ์ฌ๋ฆฌ๊ธฐ

```
# git push origin {์์ ๋ธ๋์น ์ด๋ฆ}
$ git push origin algo1
```

4. pr ๋ณด๋ด๊ธฐ

```
algo1 ๋ธ๋์น๋ฅผ pull request ์๋ณธ daon ๋ธ๋์น๋ก!
```

5. merge ์๋ฃ ํ ์์ ๋ธ๋์น ์ญ์ 

```
# git switch {์์ด๋ ๋ธ๋์น ์ด๋ฆ}
$ git switch daon
# git branch -D {์ญ์ ํ  ๋ธ๋์น ์ด๋ฆ}
$ git branch -D algo1
```

6. ์๋ณธ ๋ธ๋์น์ ๋ด ๋ก์ปฌ ๋ธ๋์น ๋๊ธฐํ ์์

```
# git remote add -t {์์ด๋ ๋ธ๋์น ์ด๋ฆ} {์ ์ฅ์ ๋ณ์นญ} base_์ ์ฅ์_url
$ git remote add -t daon upstream https://github.com/saseungg/algorithm-study.git
# ์ ์ฅ์๋ฅผ ์ถ๊ฐํ ํ ์ ์ฒด remote ์ ์ฅ์ ๋ชฉ๋ก์ ํ์ธํ๋ค
$ git remote -v
```

7. ๋ธ๋์น ์ ๋ณด ๊ฐ์ ธ์ค๊ธฐ

```
# git fetch upstream {์์ด๋ ๋ธ๋์น ์ด๋ฆ}
$ git fetch upstream daon
```

8. ์๋ณธ daon ๋ธ๋์น์ ๋ด ๋ก์ปฌ daon ๋ธ๋์น ๋๊ธฐํ

```
# git rebase upstream/{์์ด๋ ๋ธ๋์น ์ด๋ฆ}
$ git rebase upstream/daon
```

9. ๋ธ๋์น ์ฌ๋ฆฌ๊ธฐ (fork ๋ธ๋์น๋ก)

```
# git push origin {์์ด๋ ๋ธ๋์น ์ด๋ฆ}
$ git push origin daon
```

![image](https://user-images.githubusercontent.com/115215178/222943043-f07a4926-1fc4-4347-b5fe-87cef95db0f6.png)
