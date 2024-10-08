export default function getStudentIdsSum(listOfStudents) {
  return listOfStudents.reduce((acc, student) => acc + student.id, 0);
}
