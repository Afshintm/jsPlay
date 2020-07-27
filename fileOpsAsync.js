var fs = require("fs");
var c = require("./Car");
let rf = require("./readFileAsync");

fs.writeFileSync(
  "./output.txt",
  "this is the result\n\r Another new line.",
  "utf8"
);

readFileAsyncWrapper("./output.txt")
  .then(function (content) {
    console.log(content);
  })
  .catch(function (err) {
    console.error(err);
  });

async function readFileAsyncWrapper(fileName) {
  return await rf.readFileAsync(fileName);
}
