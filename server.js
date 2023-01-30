const http = require('http');
const fs = require('fs');
const minimist = require('minimist');

const argv = minimist(process.argv.slice(2));
const port = argv.port == undefined ? 3000 : argv.port;

fs.readFile('./public/index.html','utf-8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
}

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(data);
});

server.listen(port)
console.log(`Server listening on port ${port}`);
