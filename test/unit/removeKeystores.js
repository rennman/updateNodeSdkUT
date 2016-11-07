const tutil = require('./test-util.js');
const path = require('path');

var cwd = __dirname;
console.log("__dirname: ", __dirname);
function getUserHome() {
        return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

var keyValStorePath = path.join(getUserHome(), 'kvsTemp');
var keyValStorePath2 = keyValStorePath + "2";
var keyValStorePath3 = keyValStorePath + "3";

var keyStores = [ keyValStorePath, keyValStorePath2, keyValStorePath3 ];

keyStores.forEach(function(value){
   tutil.rmdir(value);
   console.log('removing ', value); 
});

