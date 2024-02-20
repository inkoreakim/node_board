import express from 'express'

// express 객체 생성
const app = express();
// express 서버에서 사용할 포트 설정
const PORT = 3000;
app.use(express.static('public'));

// 루트 경로에 대한 GET 요청 처리
// app.get('/', (req, res) => {
//     console.log(__dirname);
//     res.sendFile(__dirname + '/index.html');
// });
// express 서버 실행 코드 (8080포트로 서버가 실행된다.)
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});