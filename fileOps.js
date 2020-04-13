var fs = require('fs');
var c = require('./Car');
let rf = require('./readFile');
console.log(fs);
var a = new c('BMW');
console.log(a.getType);
fs.writeFileSync('./output.txt','this is the result','utf8');

rf.readFile('./output.txt').then(
    function(content){
        console.log(content);
    })
    .catch(
        function(err){
            console.error(err);
        });