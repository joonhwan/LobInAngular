var fsLib = require('fs');
var isThere = require('is-there');

function isFileExist(path) {
  var foundCount = 0;
  fsLib.access(path, fsLib.F_OK, function (err) {
    if(!err) {
      ++foundCount; 
    }
  });
  console.log(foundCount + ' : ' + path);
  return foundCount > 0;
}

function fileExists(filePath)
{
    try
    {
        return fs.statSync(filePath).isFile();
    }
    catch (err)
    {
        return false;
    }
}

console.log(isThere('/Users/jhlee/prj/LobInAngular/angular-directives/tsconfig.json') ? "exists!" : "not exists!");
isFileExist('/Users/jhlee/prj/LobInAngular/angular-directives/tsconfig.json');
if(fileExists('/Users/jhlee/prj/LobInAngular/angular-directives/tsconfig.json')) {
  console.log('exist!');
} else {
  console.log('not exist!');
}