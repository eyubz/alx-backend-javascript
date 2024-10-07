export default function updateStudentGradeByCity(objArray, city, newGrades) {
  return objArray
    .filter((obj) => obj.location === city)
    .map((obj) => {
      const newGrade = newGrades.filter((grade) => grade.studentId === obj.id);
      const student = {
        ...obj,
        grade: newGrade.length > 0 ? newGrade[0].grade : 'N/A',
      };
      return student;
    });
}
