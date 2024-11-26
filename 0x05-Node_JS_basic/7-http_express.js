const express = require('express');
const fs = require('fs').promises;

const app = express();

const databaseFile = process.argv[2];

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      return 'Number of students: 0';
    }

    const students = lines.slice(1).map((line) => line.split(','));
    let result = `Number of students: ${students.length}\n`;

    const fields = {};
    for (const student of students) {
      const field = student[3];
      const firstName = student[0];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      const cleanedField = field.trim();
      result += `Number of students in ${cleanedField}: ${
        names.length
      }. List: ${names.join(', ')}\n`;
    }

    return result.trim();
  } catch (error) {
    console.log(error);
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.set('Content-Type', 'text/plain');
  try {
    const studentData = await countStudents(databaseFile);
    res.end(studentData);
  } catch (err) {
    console.error(err);
    res.end('Cannot load the database');
  }
});
app.listen(1245);

module.exports = app;
