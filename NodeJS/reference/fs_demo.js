const fs = require('fs');
const path = require('path');

//Create Folder
// fs.mkdir(path.join(__dirname,'/test'),{},function(err){
//     if(err) throw err;
//     console.log('Folder created..')
// })


fs.writeFile(path.join(__dirname,'hello.txt'), 'Hello World!', err =>{
    if (err) throw err;
    console.log('File written to...1')
})

fs.appendFile(path.join(__dirname, 'hello.txt'), 'I love Node JS!', err => {
    if (err) throw err;
    console.log('File written to...2')
})

fs.readFile(path.join(__dirname, 'hello.txt'), 'utf-8', (err,data) => {
    if (err) throw err;
    console.log(data);
});




