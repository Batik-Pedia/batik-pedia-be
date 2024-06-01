var mysql = require('mysql');

// koneksi to database
const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"batikpedia",
    });

conn.connect((err) => {
    if(err) throw err;

    console.log('Mysql succes connection');
});

module.exports = conn;