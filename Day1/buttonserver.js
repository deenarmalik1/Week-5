const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My First Server</title>
        </head>
        <body>
            <h1>Welcome to Node.js</h1>

            <button onclick="getData()">Get Data</button>

            <div id="result"></div>

            <script>
                function getData() {
                    document.getElementById('result').textContent =
                        'Hello! This message comes from JavaScript.';
                }
            </script>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});