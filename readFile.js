let fs = require('fs');
function readFile(filePath){
    if (filePath === undefined || filePath === null ) return;

    let promise = new Promise(function(resolve , reject){
        fs.readFile(filePath,{encoding:'utf8'}, function(error , contents){
            if(error){
                reject(error);
                return;
            }
            resolve(contents);
        });
    });
    
    return promise;
}
module.exports.readFile = readFile;