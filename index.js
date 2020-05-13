const mysql = require('mysql');

let location = "Manchester";

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


// const instructor = { name: 'Stuart Kirby', city: 'Manchester' };
// connection.query('INSERT INTO instructors SET ?', instructor, (err, res) => {
//   if (err) throw err;
//   console.log('Last insert ID', res.insertId);

// })

connection.query(
  'UPDATE instructors SET city = ? WHERE ID = ?',
  [`${location}`, 1],
  (err, result) => {
    if (err) throw err;
    console.log(`Changed ${result.changedRows} row(s)`);
  }
)

connection.query('SELECT * FROM instructors', (err, rows) => {
  if (err) throw err;

  console.log('Data received from DB');
  // console.log(rows);
  rows.forEach((row) => {
    console.log(`${row.name} teaches in ${row.city}`);
  });

})
// connection.query(
//   'DELETE FROM instructors WHERE id >= 5', [5], (err, result) => {
//     if (err) throw err;
//     console.log(`Seleted ${result.affectedRows} row(s)`);
//   }
// )


connection.end((err) => {
  console.log('Ended.')
})