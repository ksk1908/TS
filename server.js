const express = require('express');
const path = require('path');
const app = express();

// DB Connection
const mariaDB = require('./database/connect-maria');
mariaDB.connect()
// DB Connection End
// mariaDB.end()

app.listen(8080, function(){
    console.log("서버 킵니다?!?!")
})

app.use(express.static(path.join(__dirname,'tsedu/build')))

app.get('/',function(res,req){
    req.sendFile(path.join(__dirname,'/tsedu/build/index.html'))
})
