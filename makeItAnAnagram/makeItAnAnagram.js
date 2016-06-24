// https://www.hackerrank.com/challenges/make-it-anagram

function processData(input) {
  const args = input.split('\n');
  const first = args[0];
  const second = args[1];
  const firstCharacters = [];
  const secondCharacters = [];
  const valuesFound = new Set();

  for(let i = 0; i < first.length; i++) {
    const charCode = first.charCodeAt(i);
    valuesFound.add(charCode)
    firstCharacters[charCode] = (firstCharacters[charCode] || 0)+1;
  }

  for(let i = 0; i < second.length; i++) {
    const charCode = second.charCodeAt(i);
    valuesFound.add(charCode)
    secondCharacters[charCode] = (secondCharacters[charCode] || 0)+1;
  }

  let count = 0;
  valuesFound.forEach(i => {
    count += Math.abs((firstCharacters[i]||0) - (secondCharacters[i]||0));
  })
  console.log(count)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
