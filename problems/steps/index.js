// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// recursive solution
function steps(n, row = 0, step = '') {
  if (n === row) {
    return;
  }

  if (n === step.length) {
    console.log(step);
    return steps(n, row + 1);
  }

  const add = step.length <= row ? '#' : ' ';
  return steps(n, row, step + add);
}

console.log(steps(2));

module.exports = steps;

// double loop solution
// function steps(n) {
//   // iterate through rows (0 - n)
//   for (let row = 0; row < n; row++) {
//     // create an empty string
//     let step = '';
//     // itretate throu columns (0 - n)
//     for (let col = 0; col < n; col++) {
//       // check if current column is equla to or less the current row
//       if (col <= row) {
//         // if so add '#' to string
//         step += '#';
//       } else {
//         // if not so add ' ' to string
//         step += ' ';
//       }
//     }
//     // console.log the string at this point
//     console.log(step);
//   }
// }
