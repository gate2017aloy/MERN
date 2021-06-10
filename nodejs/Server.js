const http = require('http');
const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {'content-type': 'text/plain',})
//     res.end('Hello world 2021')
// });

const server = http.createServer((req, res) => {
// normalize url by removing querystring, optional
// trailing slash, and making it lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('Homepage')
            break
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'})
            res.end('About')
            break
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end('Not Found')
            break
    }
})


server.listen(port, () => console.log(`server started on port: ${port}, press ctrl to terminate`));


// function serveStaticFile(res, path, contentType, responseCode = 200) {
//     fs.readFile(__dirname + path, (err, data) => {
//         if(err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             return res.end('500 - Internal Error')
//         }
//         res.writeHead(responseCode, { 'Content-Type': contentType })
//         res.end(data)
//     })
// }
