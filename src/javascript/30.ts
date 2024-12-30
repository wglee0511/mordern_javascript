console.log(new Date(), typeof new Date());
console.log(Date(), typeof Date())

console.log(Date.now() / (24 * 60 * 60 * 1000));

const today = new Date()

console.log(today.getTimezoneOffset());
console.log(today.toLocaleString());
console.log(today.toLocaleString("ko-KR"));
console.log(today.toLocaleString("en-US"));
console.log(today.toLocaleString("ja-JP"));

console.log(today.toLocaleTimeString());
console.log(today.toLocaleTimeString("ko-KR"));
console.log(today.toLocaleTimeString("en-US"));
console.log(today.toLocaleTimeString("ja-JP"));

