var http = require('http')

var onRequest = function (request, response) {
    console.log('---Request received---')

    if (request.url === '/api/user') {
        response.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
    
        var userInfo = {
            name: 'rencoo',
            age: 25
        }
    
        response.end(JSON.stringify(userInfo))
    }
}

var server = http.createServer(onRequest)
server.listen(3000, '127.0.0.1')
console.log('Server started on localhost port 3000')