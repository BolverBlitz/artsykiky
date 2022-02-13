const pg = require('pg');
const Joi = require('joi');
require('dotenv').config()

const pool = new pg.Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

const CheckUsername = Joi.object({
  Username: Joi.string().required().regex(/^[a-z\d\s\-\.\,\ä\ü\ö\ß\&\(\)\"\!\?\+\*\/\<\>\|]*$/i)
});

/**
 * Promise to write a user to DB
 * @param {string} username
 * @returns {Promise}
 */
let WriteNewUser = function (username) {
  return new Promise(function (resolve, reject) {
    pool.query('INSERT INTO scoreuser (username) VALUES ($1)', [
      username
    ], (err, result) => {
      if (err) { reject(err) }
      resolve(result);
    });
  });
}

pool.query(`CREATE TABLE IF NOT EXISTS scoreuser (
    username text PRIMARY KEY,
    time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP)`, (err, result) => {
  if (err) { console.log(err) }
});

export default async function handler(req, res) {
  const value = await CheckUsername.validateAsync(req.query);
  WriteNewUser(value.Username).then(function (NewUser_Response) {
    res.status(200).json({ state: 'Success' })
  }).catch(function (error) {
    if (error.constraint === 'scoreuser_pkey') {
      res.status(400).json({ state: 'Duplicate' })
    } else {
      res.status(500).json({ Message: 'Database Error' });
    }
  });
}
