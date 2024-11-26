const fs = require('fs').promises;

async function countStudents(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1).map((line) => line.split(','));
    console.log(`Number of students: ${students.length}`);

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
      const data = `Number of students in ${cleanedField}: ${
        names.length
      }. List: ${names.join(', ')}`;
      console.log(data);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
