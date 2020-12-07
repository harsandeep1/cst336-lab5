const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "de1tmi3t63foh7fa.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ompr8ozej54cosys",
    password: "lvrxec9v81f8yeyk",
    database: "fbp43xcij1l1znlh"
});

module.exports = pool;
