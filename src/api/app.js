import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from "path";
import mysql from 'mysql2/promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// express 객체 생성
const app = express();
// express 서버에서 사용할 포트 설정
const PORT = 3000;
// dirname 설정
app.use(express.static(path.join(__dirname, '../public')));
// css 파일 MIME 설정
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// db 정보 설정

//루트 경로에 대한 GET 요청 처리
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/html/login.html'));
});
//express 서버 실행 코드 (3000 포트로 서버가 실행된다.)
app.listen(PORT, () => {
    console.log(`노드 서버 시작 => http://localhost:${PORT}`);
});