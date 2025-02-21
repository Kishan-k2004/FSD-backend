const http =require('http')

const users=[
    {id:1,name:"Jon",age:25},
    {id:2,name:"Hon",age:35},
    {id:3,name:"Con",age:15}
]

const server=http.createServer(async(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","application/json");
    const name=users.map(users=>users.name)
    res.end(JSON.stringify(name));

});

server.listen(4001, ()=>{
    console.log("server is running on port http://localhost:4001");
})