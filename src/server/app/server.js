const http = require(`http`);
const fs = require('fs');
const qs = require('querystring');
const {validate} = require(__dirname+'\\validator');
const host = 'localhost';
const port = 8080;

const requestListener = (req,res)=>{
    if(req.url == '/') {
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        fs.readFile(__dirname + '\\..\\' + 'views\\question.html', (err,questionPage)=>{
            if(err) throw err;
            res.end(questionPage);
        });
    } else if(req.url == '/submit') {
        if(req.method != 'POST') {
            res.end('pls enter valid solution');
        } else {
            let body='';
            req.on('data',(chunk)=>{
                body+=chunk.toString();
            });
            req.on('end',()=>{
                let obj = qs.parse(body);
                let file = 'recieved_code.' + obj.language;
                let code = obj.code;
                validate(file, code, (result)=>{
                    res.end(result);
                });
            });
        }
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({error: "Resource not found"}));
    }
};

const server = http.createServer(requestListener);
server.listen(port,host,()=>{
    console.log(`server is running on http:://${host}:${port}`);
});