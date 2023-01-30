let http = require('http');
let fs = require('fs');
let minimist = require('minimist');

let argv = minimist(process.argv.slice(2));
const port = argv.port == undefined ? 3000 : argv.port;

let content;
fs.readFile('./public/index.html','utf-8', (err, data) => {
	if (err) return console.error(err);
	content = data;
});

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(content);
});

server.listen(port)
console.log(`Server listening on port ${port}`);
