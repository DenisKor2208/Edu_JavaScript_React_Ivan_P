//49. Rest оператор

'use strict';

/*********/
const log = function(a, b, ...rest) { // название rest может быть любое
    console.log(a, b, rest);
}
log('basic', 'rest', 'operator', 'usage'); // basic rest [ 'operator', 'usage' ]
/*********/

/*********/
function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(3, 5);
/*********/