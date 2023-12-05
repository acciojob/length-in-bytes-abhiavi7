const byteSize = (str) => {
  // write your code herefunction byteSize(str) {
  // Create a Blob object with the given string
  const blob = new Blob([str]);

  // Get the size of the Blob in bytes
  const sizeInBytes = blob.size;

  return sizeInBytes;
}
const stringToMeasure = "Hello, 你好, привет!";
const sizeInBytes = byteSize(stringToMeasure);

console.log(`Size of the string in bytes: ${sizeInBytes}`);
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
