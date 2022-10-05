const fs=require('fs');
const {exec} = require('child_process');

exec(`py recieved_code.py < input.txt`, (err,stdout,stderr)=>{
    console.log(stdout);
    console.log(stderr);
});