const fs = require("fs").promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf-8");

    const lines = data.trim().split("\n");
    if (lines.length <= 1) {
      return {};
    }

    const students = lines.slice(1).map((line) => line.split(","));
    const fields = {};
    for (const student of students) {
      const [firstName, , , field] = student;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstName);
    }

    return fields;
  } catch (error) {
    return Promise.reject(new Error("Cannot load the database"));
  }
}

module.exports = readDatabase;
