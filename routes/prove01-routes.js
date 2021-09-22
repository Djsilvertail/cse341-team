const url = req.url;
const method = req.method;
if (url === '/') {
    res.setHeader('Content-Type', ('text/html'))
    res.write('<html>');
    res.write('<head><title>Prove01</title></head>');
    res.write('<body><h1>Welcome to my page!!</h1></body>');
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