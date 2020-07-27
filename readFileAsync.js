let fs = require("fs");
async function readFileAsync(filePath) {
  if (filePath === undefined || filePath === null) return;

  let promise = new Promise(function (resolve, reject) {
    fs.readFile(filePath, { encoding: "utf8" }, function (error, contents) {
      if (error) {
        reject(error);
        return;
      }
      setTimeout(() => resolve(contents), 3000);
    });
  });

  return await promise;
}
module.exports.readFileAsync = readFileAsync;
