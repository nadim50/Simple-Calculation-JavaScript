var math = 34.4;
var physic = 56.49877666666;
let chemistry = 56.5;
const english = 67.3;
const bangla = 56;

const sumOfAllSubjectMarks = math + physic + chemistry + english + bangla;

///const averageAllSubjectMarks = (sumOfAllSubjectMarks / 5).toFixed(2);

const averageAllSubjectMarks = parseInt(sumOfAllSubjectMarks / 5);
console.log('Average of all subject mark: ', +averageAllSubjectMarks)