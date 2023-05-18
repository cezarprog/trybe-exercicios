// Agora, inverta o lado do triângulo. Por exemplo:

// n = 5

//     *
//    **
//   ***
//  ****
// *****

let size = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = size;

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  for (let columIndex = 0; columIndex <= size; columIndex += 1){
    if (columIndex < inputPosition) {
        inputLine = inputLine + ' ';
    } else {
        inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}