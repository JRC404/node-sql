const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'codenation'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected.');
})

connection.end((err) => {
  console.log('Ended.')
})