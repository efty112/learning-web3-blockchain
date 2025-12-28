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



// Hexadecimal: [1 character = 4 bits]
//------------------------------------

// Bytes to Hex:
const bytesArray3 = new Uint8Array([72, 101, 108, 108, 111]);
let hexString = "";

bytesArray3.map((a) => {
    hexString += a.toString(16).padStart(2,'0');
});

console.log(hexString);

// Hex to Bytes:
let bytes = new Uint8Array(hexString.length/2);

for (let i=0; i < bytes.length; i++){
    bytes[i] = parseInt(hexString.substring(i*2, i*2 + 2), 16)
}

/*SUBSTRING vs SUBSTR:
--> Both cut a string into a certain piece
--> substring(startIndex, expectedEndIndex+1)
--> substr(startIndex, numberOfCharacters)*/

console.log(bytes);

