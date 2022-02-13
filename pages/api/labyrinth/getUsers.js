const pg = require('pg');
require('dotenv').config()

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

/**
 * Promise to return all users
 * @returns {Object}
 */
let GetAllGuests = function () {
  return new Promise(function (resolve, reject) {
    pool.query(`SELECT username FROM scoreuser`, (err, result) => {
      if (err) { reject(err) }
      resolve(result.rows);
    });
  });
}

pool.query(`CREATE TABLE IF NOT EXISTS scoreuser (
    username text PRIMARY KEY,
    time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)`, (err, result) => {
  if (err) { console.log(err) }
});

export default function handler(req, res) {
  GetAllGuests().then(function (AllUser_Response) {
    res.status(200).json(AllUser_Response)
  });
}
