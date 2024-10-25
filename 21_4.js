const uri = "https://www.youtube.com/results?search_query=에스파"

const enc = encodeURI(uri)
console.log('enc: ', enc); // enc:  https://www.youtube.com/results?search_query=%EC%97%90%EC%8A%A4%ED%8C%8C

const dec = decodeURI(enc)
console.log('dec: ', dec); // dec:  https://www.youtube.com/results?search_query=에스파

const queryString = "results?search_query=에스파"

const encCom = encodeURIComponent(queryString) // encCom:  results%3Fsearch_query%3D%EC%97%90%EC%8A%A4%ED%8C%8C
console.log('encCom: ', encCom);

const decCom = decodeURIComponent(encCom)
console.log('decCom: ', decCom); // decCom:  results?search_query=에스파
