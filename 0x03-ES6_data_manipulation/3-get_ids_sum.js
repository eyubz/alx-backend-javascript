export default function getStudentIdsSum(objArray) {
  return objArray.reduce((sum, obj) => sum + obj.id, 0);
}
