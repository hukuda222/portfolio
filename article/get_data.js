const fs = require('fs');
let fileData = {};

fs.readdir('article/', function(err, files){
    if (err) throw err;
    files.filter(function(file){
        return /.*\.md$/.test(file); //絞り込み
    }).forEach(function (file) {
      const msg = fs.readFileSync("./article/"+file, {encoding: "utf-8"});
      fileData[file]=msg;
    });
    fs.writeFileSync('./article/data.json', JSON.stringify(fileData));
});


