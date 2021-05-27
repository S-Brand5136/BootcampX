const { Pool } = require('pg');
const userInput = process.argv.slice(2);

const cohort = userInput[0].toUpperCase();
const maxResults = userInput[1] || 5;

const values = [`%${cohort}%`, maxResults];

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  });
})
.catch(err => console.log(err));