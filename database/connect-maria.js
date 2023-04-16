const maria = require('mysql');  

// mysql 접속 설정
const conn = {  
    host: 'localhost',
    port: '3306',
    user: 'ksk1908',
    password: 'rlarudtn1!',
    database: 'TSEDU'
};

// mysql connection 생성
let connection = maria.createConnection(conn);

module.exports = connection;
//DB 연결
// connection.connect()

// // 테스트 쿼리
// var testQuery = "SELECT * From test"

// // 쿼리 실행 (쿼리 , callback(에러메세지, 쿼리결과, results의 컬럼 정보 배열) )
// connection.query(testQuery, function (err, results, fields) { // testQuery 실행
//     if (err) {
//         console.log(err);
//     }
//     console.log(results);
// });

// //연결 종료
// connection.end();