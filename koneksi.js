var mysql = require('mysql');

// koneksi to database
const conn = mysql.createConnection({
    host:'localhost',
    users:'root',
    password:'',
    database:'batikpedia'
});

conn.connect((err) => {
    if(err) throw
})