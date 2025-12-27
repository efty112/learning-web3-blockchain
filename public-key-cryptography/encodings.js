// UInt8Array: [Array that takes elements that're a maximum of 8 bits (1 byte) -> {0 to 255}]

const array = [54,9689,64754,6796,415]; //Normal Array
console.log(array);

const bytesArray = new Uint8Array([54,9689,64754,6796,415]);
console.log(bytesArray); // => Uint8Array(5) [ 54, 217, 242, 140, 159 ]



// ASCII: [1 character = 7 bits || {0 TO 127}]
//-----------------------------------------------
// Bytes (UInt8Array) to ASCII: [https://www.geeksforgeeks.org/javascript/how-to-convert-byte-array-to-string-in-javascript/]

const bytesArray2 = new Uint8Array([72, 101, 108, 108, 111]);
const asciiString = new TextDecoder().decode(bytesArray2);
console.log(asciiString) //=> Hello

// ASCII to Bytes:
const asciiToBytes = new TextEncoder().encode(asciiString);
console.log(asciiToBytes) //=> Uint8Array(5) [ 72, 101, 108, 108, 111 ]



// Hexadecimal:
//--------------
