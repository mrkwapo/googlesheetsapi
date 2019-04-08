rows.map((row)=> {
   var fs = require('fs');
   var = 

fs.writeFile('rows[0][0]+rows[0][3]+".html"', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 
})



    fs.readFile(fs.realpathSync('input.html'), 'utf8', function (err, data){
        if (err) {
            return console.log(err);
        }
        fs.writeFile('output.html', data, function (err) {
            if (err) return console.log(err);
            console.log('File writing done');
        });
    });