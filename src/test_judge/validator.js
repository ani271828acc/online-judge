const fs=require('fs');
const {exec} = require('child_process');

exec(`py recieved_code.py < input.txt > recieved_output.txt`, (err,stdout,stderr)=>{
    exec(`py checker.py`,(err,stdout,stderr)=>{
        console.log(stdout);
    });
});