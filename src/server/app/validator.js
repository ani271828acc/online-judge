const fs=require('fs');
const {exec} = require('child_process');
const inputfile = __dirname + '\\..\\validation\\input.txt';
const outputfile = __dirname + '\\..\\validation\\obtained.txt';
async function validate(filename, str, callback){
    const recieved_code_file = __dirname + '\\..\\' + `validation\\${filename}`;
    let result = "tle";
    fs.writeFileSync(recieved_code_file, str);
    exec(`py ${recieved_code_file} < ${inputfile} > ${outputfile}`, (err, stdout, stderr)=>{
        exec(`py ..\\validation\\checker.py`, (err,stdout,stderr)=>{
            if(typeof callback == 'function') {
                callback(stdout, stderr);
            }
        });
    });
};

module.exports = {
    validate
}