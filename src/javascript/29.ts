const getExponential = (value?: number) => (66.567).toExponential(value)

console.log('getExponential: ', getExponential());
console.log('getExponential: ', getExponential(2));
console.log('getExponential: ', getExponential(4));

const powValue = Math.pow(2, 3)
const es7Value = 2 ** 3
console.log('powValue: ', powValue);
console.log('es7Value: ', es7Value);