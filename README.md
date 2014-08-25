#modern.node.2

모던 웹을 위한 Node.js 프로그래밍 2판 예제 파일입니다.

##express 4.0 관련
1판의 connect 1.0 => 2.0 충격이 다시 재현되다니....
express 모듈이 업데이트 되었는데 믹서기로 달달 갈았군요 'ㅂ' ....
다음 링크에 해결 방법을 정리했답니다 ;ㅂ; ... 죄송합니다 ;ㅂ; .... 이렇게 바뀔 줄이야 ;ㅂ; ...

+ [http://rintiantta.blog.me/40207854837](http://rintiantta.blog.me/40207854837)

##오탈자
###78페이지 - synack님 발견!(1쇄)
두 번째 문단에 `readFile() 메서드 또는 writeFile() 메서드에 try catch 구문 처리를 합니다.`를
`readFileSync() 메서드 또는 writeFileSync() 메서드에 try catch 구문 처리를 합니다.`로 변경합니다!

###87페이지 - 큐님 발견!(1쇄)
`setMaxListenrs() 메서드의 매개변수에 0을 입력합니다.`->`setMaxListeners() 메서드의 매개변수에 0을 입력합니다.`

###135페이지 - 큐님 발견!(1쇄)
`코드 7-5`

5번째 줄: `i+ +` -> `i++`
6번째 줄: `<h2>` -> `</h2>`

###137페이지 - 큐님 발견!(1쇄)
`코드 7-8`

5번째 줄 마지막: `<h2>` -> `</h2>`

###147페이지 - 큐님 발견!(1쇄)
`jade 페이지는 HAML 페이지 위에`->`jade 페이지는 HTML 페이지 위에`


이전 판의 내용이 섞였군요 ㅠㅜ

###178페이지 - 큐님 발견!(1쇄)
`4장에서 http 모듈을 사용할 때는 if 조건문을`->`6장에서 http 모듈을 사용할 때는 if 조건문을`

###159페이지 - 큐님 발견!(1쇄)
`11장에서 express 프레임워크를 살펴볼 때에`->`10장에서 express 프레임워크를 살펴볼 때에`

###166페이지 - 큐님 발견!(1쇄)
`코드를 실행하고 http://127.0.0.1:3000/ 에 접속합니다.`->`코드를 실행하고 http://127.0.0.1:52273/ 에 접속합니다.`

###181페이지 - 큐님 발견!(1쇄)
`app.get('index', ...);`->`app.get('/index', ...);`

###183페이지 - 큐님 발견!(1쇄)
`setCookie 페이지에 접속하면 string 쿠키와 join 쿠키를 생성합니다.`->`setCookie 페이지에 접속하면 string 쿠키와 json 쿠키를 생성합니다.`

###178페이지 - 큐님 발견!(1쇄)

## 9장 예제

9장 예제의 다음 코드를 모두
```javascript
app.post('insert', function (request, response) {
```
다음 코드로 변경해주세요 @_@ .... 
```javascript
app.post('/insert', function (request, response) {
```
추가로 bodyParser 미들웨어가 추가가 안 되어있답니다.
```javascript
app.use(app.router);
```
코드 위에
```javascript
app.use(app.bodyParser());
app.use(app.router);
```
를 추가해주세요 'ㅂ'
