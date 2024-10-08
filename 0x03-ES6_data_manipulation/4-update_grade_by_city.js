export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const studentInCertainCity = listOfStudents.filter((student) => student.location === city);

  return studentInCertainCity.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    const grade = studentGrade ? studentGrade.grade : 'N/A';
    const updatedStudent = { ...student, grade };

    return updatedStudent;
  });
}
