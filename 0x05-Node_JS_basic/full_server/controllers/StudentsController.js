import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, response) {
    response.set('Content-Type', 'text/plain');
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let result = 'This is the list of our students\n';
      const sortedFields = Object.keys(studentsByField).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      for (const field of sortedFields) {
        const studentNames = studentsByField[field];
        result += `Number of students in ${field}: ${
          studentNames.length
        }. List: ${studentNames.join(', ')}\n`;
      }
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    response.set('Content-Type', 'text/plain');
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const studentsByField = await readDatabase(process.argv[2]);
      if (!studentsByField[major]) {
        response.status(200).send('List: ');
      }
      const studentNames = studentsByField[major];
      const result = `List: ${studentNames.join(', ')}`;
      response.status(200).send(result);
    } catch (error) {
      response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
