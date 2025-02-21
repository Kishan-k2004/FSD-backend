const http=require('http')
const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});

    const data=await fetch('https://fakestoreapi.com/products');
    const jsonData=await data.json();

    const myhtml =
    `
    <html>
    <head>
    <title>Document</title>
    <style>
    body {
    font-family: Arial, sans-serif;
    margin: 20px;
    padding: 0;
    background-color: #f5f5f5;
    text-align: center;}

    h1 {
    color: #333;
    margin-bottom: 20px;}

    div {
    background: white;
    padding: 15px;
    margin: 10px auto;
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);}

    h2 {
    font-size: 20px;
    color: #444;}

    p {
    font-size: 16px;
    color: #666;}

    img {
    margin: 10px 0;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);}

    hr {
    border: 0;
    height: 1px;
    background: #ddd;
    margin: 10px 0;}


    </style>
    </head>
    <body>
    <h1>Products</h1>
    ${
        jsonData.map((product) =>

            `<div>
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.image}" height="200" width="150" alt="${product.title}">
                <p>$ ${product.price}</p>
                <p>User Rating - ${product.rating.rate}</p>
                <hr>
            </div>`

        ).join('')
    }
    
    </body>
    </html>`

    res.end(myhtml);
})
server.listen(9100,(err)=>{
    if(err)
        throw err;
    console.log('Server is Running at http://localhost:9100');
});