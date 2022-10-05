const http = require(`http`);
const fs = require('fs');
const qs = require('querystring');
const host = 'localhost';
const port = 8080;

const requestListener = (req,res)=>{
    if(req.url == '/') {
        res.setHeader("Content-Type","text/html");
        res.writeHead(200);
        fs.readFile(__dirname + '\\question.html', (err,questionPage)=>{
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
                console.log(obj);
                res.end("submitted");
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