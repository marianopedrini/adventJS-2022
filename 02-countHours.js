function countHours(year, holidays) {
  let hoursToRecover = 0;
  let formatedDates = [];
  for (const date of holidays) {
    let month = date.split('/')[0] - 1;
    let day = date.split('/')[1];
    let formatedDate = new Date(year, month, day);

    // Chequea si el año es bisiesto
    if (month == 1 && day == 29) {
      if (formatedDate.getMonth() == 1) {
        formatedDates.push(formatedDate);
      }
    } else {
      formatedDates.push(formatedDate);
    }
  }

  for (const date of formatedDates) {
    if (date.getDay() != 0 && date.getDay() != 6) {
      hoursToRecover += 2;
    }
  }
  return hoursToRecover;
}

const year = 2022;
const holidays = ['01/06', '04/01', '12/25', '02/29']; // formato MM/DD

console.log(countHours(year, holidays)); // 2 días -> 4 horas extra en el año
// countHours(year, holidays);
