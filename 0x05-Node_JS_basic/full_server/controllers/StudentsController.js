const readDatabase = require("../utils");
class StudentsController {
  static getAllStudents(req, res) {
    try {
      const studentsByField = await(readDatabase(process.argv[2]));
      let response = "This is the list of our students\n";

      const sortedFields = Object.keys(studentsByField).sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
      );

      for (const field of sortedFields) {
        const studentNames = studentsByField[field];
        response += `Number of students in ${field}: ${
          studentNames.length
        }. List: ${studentNames.join(", ")}\n`;
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }
  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== "CS" && major !== "SWE") {
      return res.status(500).send("Major parameter must be CS or SWE");
    }

    try {
      const studentsByField = await readDatabase(process.argv[2]);
      if (!studentsByField[major]) {
        return res.status(200).send(`List: `);
      }
      const studentNames = studentsByField[major];
      const response = `List: ${studentNames.join(", ")}`;
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send("Cannot load the database");
    }
  }
}

module.exports = StudentsController;
