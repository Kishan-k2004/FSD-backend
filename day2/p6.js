const http = require('http');

const server = http.createServer(async (req, res) => {
    
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        
        

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Failed to fetch data' }));
    
});

server.listen(9011, (err) => {
    if (err) {
        console.log(`Error - ${err}`);
    } else {
        console.log(`Server is running at http://localhost:9011`);
    }
});
