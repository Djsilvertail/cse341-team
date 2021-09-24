const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', ('text/html'))
        res.write('<html>');
        res.write('<head><title>Prove01</title></head>');
        res.write('<body><form action="/create-users" method="POST"><input type"text" name"username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users') {
        res.setHeader('Content-Type', ('text/html'))
        res.write('<html>');
        res.write('<head><title>Prove01</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul> </body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=') [1]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end;
    }
    else {
        res.setHeader('Content-Type', ('text/html'))
        res.write('html');
        res.write('<head><title>Error</title></head>');
        res.write('<body><p>Error has occured. Please try again later.</p></body>');
        res.write('</html>');
        res.end;
    }
});

server.listen(3000);