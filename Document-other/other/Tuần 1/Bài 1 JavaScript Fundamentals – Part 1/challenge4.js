// TEST CASE 1
const billUC1 = 275;
// TEST CASE 2
const billUC2 = 40;
// TEST CASE 3
const billUC3 = 430;

const outputBill = (bill, testCaseNumber) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const finalValue = bill + tip;
  console.log(`TEST CASE ${testCaseNumber}`);
  console.log(
    `The bill was ${bill}, the tip was ${tip}, and the total value ${finalValue}`
  );
};

outputBill(billUC1, 1);
outputBill(billUC2, 2);
outputBill(billUC3, 3);
