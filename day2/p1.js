const http=require("http")

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end(`<h1 style="background-color:red;">Hello world</h1>`); // send response to client
});

server.listen(9000,(err)=>{
    if(err)
        console.log(err);
    console.log("Server is running at https://localhost:9000");
});