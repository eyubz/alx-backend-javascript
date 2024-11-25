const fs = require("fs");

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    const lines = data.split("\n").filter((line) => line.trim() !== "");
    if (lines.length <= 1) {
      console.log("Number of students: 0");
      return;
    }
    const students = lines.slice(1).map((line) => line.split(","));
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
      console.log(field, names);
      //   console.log(
      //     `Number of students in ${field}: ${names.length}. List: ${names.join(
      //       ", "
      //     )}`
      //   );
    }
  } catch (error) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
