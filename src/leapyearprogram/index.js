// function leapYear(year) {
//     if (year >= 1582) {
//         if (year % 4 == 0) {
//             if (year % 400 == 0) {
//                 return true;
//             } else if (year % 100 == 0) {
//                 return false;
//             }
//             return true;
//         }
//         return false;
//     }
//     throw new Error('Leap year rules dont work before 1582');
// }

function leapYear(year) {
    if(year < 1582) {
      throw new Error('Leap year rules do not work before 1582');
    }
    const div400 = year % 400 === 0;
    const div100 = year % 100 === 0;
    const div4 = year % 4 === 0;
    return div400 || (div4 && !div100);
}

export default leapYear;