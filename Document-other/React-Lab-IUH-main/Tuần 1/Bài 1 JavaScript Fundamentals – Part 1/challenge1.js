const bmiCalc = (person) => {
  const bmi = person.mass / person.height ** 2;
  return bmi;
};

const output = (firstPerson, secondPerson, testCaseNumber) => {
  const firstPersonBMI = bmiCalc(firstPerson);
  const secondPersonBMI = bmiCalc(secondPerson);
  const firstPersonHigherBMI = firstPersonBMI > secondPersonBMI;

  console.log(`TEST CASE ${testCaseNumber}`);
  console.log(firstPerson, firstPersonBMI);
  console.log(secondPerson, secondPersonBMI);
  console.log(firstPersonHigherBMI);
};

// TEST CASE 1
const markInfoUC1 = {
  name: "Mark",
  mass: 78,
  height: 1.69,
};

const johnInfoUC1 = {
  name: "John",
  mass: 92,
  height: 1.95,
};

// TEST CASE 2
const markInfoUC2 = {
  name: "Mark",
  mass: 95,
  height: 1.88,
};

const johnInfoUC2 = {
  name: "John",
  mass: 85,
  height: 1.76,
};

output(markInfoUC1, johnInfoUC1, 1);
output(markInfoUC2, johnInfoUC2, 2);
