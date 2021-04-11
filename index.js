const fs = require('fs');

fs.writeFileSync('note.txt', 'one')
fs.copyFileSync('./note.txt', './note_copy.txt');
fs.readdirSync('./').forEach(t => console.log(t));
fs.appendFileSync('./note.txt', 'Hey!');

fs.readFile('./note.txt', 'utf-8', function(err, data) {
    if (err) throw err;
 
    const newValue = data.replace(/oneHey!/gim, 'Hello!!');
 
    fs.writeFile('./note.txt', newValue, 'utf-8', function(err, data) {
        if (err) throw err;
        console.log('Done!');
    })
})

