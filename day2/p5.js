//https://dummyjson.com/products

const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (reg, res) => {
  const data = await fs.readFile("./data.json");
  const users=JSON.parse(data)
  res.statuscode = 200;
  res.setHeader("Content-Type", "application/json");

  const name=users.map(users=>users.name)
  res.end(JSON.stringify(name));
});

server.listen(9000, (err) => {
  if (err) console.log("Error: " + err);
  console.log("Server is running at http://localhost:9000/");
});