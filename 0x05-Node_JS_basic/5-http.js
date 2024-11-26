const http = require('http');
const fs = require('fs').promises;

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
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    try {
      const studentData = await countStudents(databaseFile);
      res.end(studentData);
    } catch (err) {
      console.error(err);
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
